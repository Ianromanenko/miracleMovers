import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimatesPage } from './estimates';

@NgModule({
  declarations: [
    EstimatesPage,
  ],
  imports: [
    IonicPageModule.forChild(EstimatesPage),
  ],
})
export class EstimatesPageModule {}
