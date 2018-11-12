import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEstimatePage } from './edit-estimate';

@NgModule({
  declarations: [
    EditEstimatePage,
  ],
  imports: [
    IonicPageModule.forChild(EditEstimatePage),
  ],
})
export class EditEstimatePageModule {}
