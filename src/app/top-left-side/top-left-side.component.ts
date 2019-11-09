import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';
import { File } from '../../models/file';

@Component({
  selector: 'app-top-left-side',
  templateUrl: './top-left-side.component.html',
  styleUrls: ['./top-left-side.component.scss']
})
export class TopLeftSideComponent implements OnInit {
  files: File[] = [];
  amountSelected = 0;
  amountAll = 0;
  constructor(private filesService: FilesService) {
    this.filesService.getFiles().subscribe((files) => {
      this.files = files;
      this.amountSelected = files.filter(file => file.checked).length;
      this.amountAll = files.length;
    });
  }
  changeView(viewButton) {
    if (!viewButton.classList.contains('active')) {
      viewButton.classList.add('active');
      viewButton.nextSibling ? viewButton.nextSibling.classList.remove('active') : viewButton.previousSibling.classList.remove('active');
    }
  }

  uploadFiles(e) {
    for (const file of e.target.files) {
      file.checked = false;
      this.files.push(file);
    }
    this.filesService.setFiles(this.files);
  }

  ngOnInit() {
  }

}
