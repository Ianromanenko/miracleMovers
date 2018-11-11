import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment';
import { Observable } from 'rxjs';
import { AppointmentListService } from '../../services/appointment-list/appointment-list.service';

@IonicPage()
@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {

  appointment = {} as Appointment;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private appoint : AppointmentListService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAppointmentPage');
  }

  addAppointment(appointment: Appointment) {
      this.appoint.addAppointment(appointment).then(ref => {
        console.log(ref.key)
        this.navCtrl.setRoot('AppointmentsPage', {key: ref.key})
      })
  }

}
