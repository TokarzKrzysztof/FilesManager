import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';
import { File } from '../../models/file';

@Component({
  selector: 'app-top-right-side',
  templateUrl: './top-right-side.component.html',
  styleUrls: ['./top-right-side.component.scss']
})
export class TopRightSideComponent implements OnInit {
  files: File[] = [];
  constructor(private filesService: FilesService) {
    this.filesService.getFiles().subscribe((files) => {
      this.files = files;
    });
  }
  remove() {
    this.files = this.files.filter(file => file.checked !== true);
    this.filesService.setFiles(this.files);
  }
  ngOnInit() {
  }

}
