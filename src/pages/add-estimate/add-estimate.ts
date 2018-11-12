import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Estimate } from '../../models/estimate';
import { EstimateListService } from '../../services/estimate-list/estimate-list.service';


@IonicPage()
@Component({
  selector: 'page-add-estimate',
  templateUrl: 'add-estimate.html',
})
export class AddEstimatePage {

  estimate = {} as Estimate;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private estim : EstimateListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEstimatePage');
  }

  addEstimate(estimate: Estimate) {
    this.estim.addEstimate(estimate).then(ref => {
      console.log(ref.key)
      this.navCtrl.setRoot('EstimatesPage', {key: ref.key})
    })
  }

}
