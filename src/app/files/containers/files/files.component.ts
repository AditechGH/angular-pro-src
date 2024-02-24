import { Component, OnInit } from '@angular/core';

import { FilesizePipe } from '../../pipes/filesize.pipe';
import { NgForOf } from '@angular/common';

interface File {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'files',
  standalone: true,
  imports: [FilesizePipe, NgForOf],
  template: `
    <div>
      <div *ngFor="let file of files">
        <p>{{ file.name }}</p>
        <p>{{ file.size | filesize }}</p>
      </div>
    </div>
  `,
  styles: [``],
})
export class FilesComponent implements OnInit {
  files!: File[];
  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' },
    ];
  }
}
