import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private http : HttpClient) { }
  getFile(){
    return this.http.get('http://localhost:8081/getfile',{responseType:'blob'});
    }
}
