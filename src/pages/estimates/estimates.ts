import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstimateListService } from '../../services/estimate-list/estimate-list.service';
import { Observable } from 'rxjs';
import { Estimate } from '../../models/estimate';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-estimates',
  templateUrl: 'estimates.html',
})
export class EstimatesPage {

  estimateList: Observable<Estimate[]>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private estim: EstimateListService) {

                this.estimateList = this.estim
                .getEstimateList()
                .snapshotChanges()
                .map(changes => {
                    return <Estimate[]>changes.map( 
                      c => ({
                        key: c.payload.key, ...c.payload.val()
                      }))
                  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimatesPage');
  }

 proceedEstimate(estimate: Estimate) {
    this.estim.proceedEstimate(estimate)
    .then(ref => {
      console.log(ref.key)
      this.navCtrl.setRoot('EstimatesPage', {key: ref.key})
    })
    this.estim.removeEstimate(estimate)
  }
  removeEstimate(estimate: Estimate) {
    this.estim.removeEstimate(estimate)
    .then(() => {
      this.navCtrl.setRoot(EstimatesPage);
    })
  }

}
