import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FilesizePipe } from '../../pipes/filesize.pipe';

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: 'files',
  standalone: true,
  imports: [NgForOf],
  providers: [FilesizePipe],
  template: `
    <div>
      <div *ngFor="let file of mapped">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  styles: [``],
})
export class FilesComponent implements OnInit {
  files!: File[];
  mapped!: File[];

  constructor(private fileSizePipe: FilesizePipe) {}

  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' },
    ];
    this.mapped = this.files.map((file: File) => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb'),
      };
    });
  }
}
