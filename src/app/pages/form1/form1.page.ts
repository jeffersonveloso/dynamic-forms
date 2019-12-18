import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/components/dynamic-form/control-base';
import { FormConfigServiceService } from 'src/app/services/form-config-service.service';
import { ControlsService } from 'src/app/services/controls.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {
  form: FormGroup;
  submitted:any;
  controls: ControlBase<any>[];
  readonly FILENAME = 'form1-conf.json';
  constructor(public configFormService:FormConfigServiceService,
    public controlsService: ControlsService,
    public alertCtrl:AlertController
    ) { }
    
    ngOnInit(){

    }

   ionViewWillEnter() {
    this.configFormService.getFormConfig(this.FILENAME).subscribe((data)=>{
      this.controls = this.controlsService.getControls(data);
    });
  }

  async submitForm(event){
		const alert = await this.alertCtrl.create({
      header: 'Success!',
      subHeader: 'Your form was successfully submitted!',
      buttons: ['OK']
    });
    await alert.present();
		console.log("Success\n", this.submitted);
  }
  
  onNotify(event: any): void {
    this.submitted = event;
    console.log("form1page form valuechanges ",event);
  }



}
