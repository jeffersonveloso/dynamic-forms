import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(MultiFileUploadComponent,{static:false}) fileField: MultiFileUploadComponent;

  constructor(public router:Router) { }

  ionViewDidEnter() {
    this.router.navigate(['/form1']);
  }

  ngOnInit(): void {
   
  }
  upload(){

    let files = this.fileField.getFiles();
    console.log(files);

    let formData = new FormData();
    formData.append('somekey', 'some value') // Add any other data you want to send

    files.forEach((file) => {
      formData.append('files[]', file.rawFile, file.name);
    });

    // POST formData to Server

  }

}
