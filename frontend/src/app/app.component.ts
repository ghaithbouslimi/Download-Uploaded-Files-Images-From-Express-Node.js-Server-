import { Component } from '@angular/core';
import {saveAs} from 'file-saver';
import { DownloadFileService } from './download-file.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'download File';

 constructor (private serv :DownloadFileService) {}
  downloadFile(){
    this.serv.getFile().subscribe((data: Blob | MediaSource) => {
      let downloadURL = window.URL.createObjectURL(data);
      saveAs(downloadURL);
    })

  }
}
