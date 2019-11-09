import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';
import { File } from '../../models/file';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  files: File[] = [];
  constructor(private filesService: FilesService) {
    this.filesService.getFiles().subscribe((files) => {
      this.files = files;
    });
  }
  handleCheckbox(e) {
    e.target.previousSibling.classList.toggle('checked');
  }
  ngOnInit() {
  }

}
