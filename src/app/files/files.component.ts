import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/services/files.service';
import { File } from '../../models/file';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: File[] = [];
  constructor(private filesService: FilesService) {
    this.filesService.getFiles().subscribe((files) => {
      this.files = files;
    });
  }
  handleCheckbox(e, index: number) {
    e.target.previousSibling.classList.toggle('checked');
    this.files[index].checked = !this.files[index].checked;
    this.filesService.setFiles(this.files);
  }

  ngOnInit() {
  }

}
