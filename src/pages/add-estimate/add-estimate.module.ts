import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEstimatePage } from './add-estimate';

@NgModule({
  declarations: [
    AddEstimatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddEstimatePage),
  ],
})
export class AddEstimatePageModule {}
