import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DentistsPage } from './dentists';

@NgModule({
  declarations: [
    DentistsPage,
  ],
  imports: [
    IonicPageModule.forChild(DentistsPage),
  ],
})
export class DentistsPageModule {}
