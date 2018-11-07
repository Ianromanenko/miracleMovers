import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireList } from "angularfire2/database";
import { AngularFireDatabase} from "angularfire2/database";
import { Observable} from 'rxjs/Observable';
import { AngularFireObject } from "angularfire2/database";
import { Profile } from "./../../models/profile"




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: AngularFireObject<any>

  data: Observable<any[]>;
  ref: AngularFireList<any>;

  constructor(  	
  	private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toastCtrl: ToastController,
  	public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.afAuth.authState.subscribe(data => {
   	if(data && data.email && data.uid){
	   	this.toastCtrl.create({
	   		message: 'Success auth',
	   		duration: 3000
	   	}).present();

       this.profileData = this.db.object('profile/' + data.uid)
       
   	}else{
   		this.toastCtrl.create({
	   		message: 'Could not find auth details',
	   		duration: 3000
	   	}).present();
   	}
  }

)}
}