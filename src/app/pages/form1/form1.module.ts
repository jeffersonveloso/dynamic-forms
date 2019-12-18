import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Form1PageRoutingModule } from './form1-routing.module';

import { Form1Page } from './form1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Form1PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Form1Page]
})
export class Form1PageModule {}
