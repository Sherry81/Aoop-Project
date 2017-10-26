import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsychoPage } from './psycho';

@NgModule({
  declarations: [
    PsychoPage,
  ],
  imports: [
    IonicPageModule.forChild(PsychoPage),
  ],
})
export class PsychoPageModule {}
