import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { File } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private files: Array<File> = [];
  private filesArray = new BehaviorSubject<Array<File>>(this.files);
  constructor() { }
  setFiles(componentArray: File[]) {
    this.files = componentArray;
    this.filesArray.next(this.files);
  }
  getFiles(): Observable<Array<File>> {
    return this.filesArray.asObservable();
  }
}
