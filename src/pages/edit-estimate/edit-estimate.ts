import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Estimate } from '../../models/estimate';
import { EstimateListService } from '../../services/estimate-list/estimate-list.service';
import { EstimatesPage } from '../estimates/estimates';


@IonicPage()
@Component({
  selector: 'page-edit-estimate',
  templateUrl: 'edit-estimate.html',
})
export class EditEstimatePage {

  estimate: Estimate;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private estim: EstimateListService) {
  }

  ionViewWillLoad() {
    this.estimate = this.navParams.get('estimate');
  }

  saveEstimate(estimate: Estimate) {
    this.estim.editEstimate(estimate)
    .then(() => {
      this.navCtrl.setRoot('EstimatesPage');
    })
    }

  removeEstimate(estimate: Estimate) {
    this.estim.removeEstimate(estimate)
    .then(() => {
      this.navCtrl.setRoot(EstimatesPage);
    })
  }

  }


