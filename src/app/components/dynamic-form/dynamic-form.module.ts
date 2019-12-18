import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ControlsService } from '../../services/controls.service';
import { DynamicControlsService } from '../../services/dynamic-controls.service';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports: [IonicModule],
  providers: [DynamicControlsService, ControlsService],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {

}