import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ControlBase } from './control-base';
import { FormGroup } from '@angular/forms';
import { DynamicControlsService } from 'src/app/services/dynamic-controls.service';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<any>[] = [];
  @Input() form: FormGroup;
  @Output() submit: EventEmitter<any>  = new EventEmitter<any>();
  @ViewChild(MultiFileUploadComponent,{static:false}) fileField: MultiFileUploadComponent;

  constructor(private controlsService: DynamicControlsService) {
  }

  ngOnInit() {
    this.form = this.controlsService.toFormGroup(this.form, this.controls);
    this.form.valueChanges
    .subscribe(val => {
      this.submit.emit(val);
    });
  }

  onSubmit() {
    console.log("chegou");
    console.log(this.form.value);
    this.submit.emit(this.form.value);
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
