import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [DynamicFormComponent,MultiFileUploadComponent],
  exports:[
    DynamicFormComponent,
    MultiFileUploadComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class ComponentsModule { }
