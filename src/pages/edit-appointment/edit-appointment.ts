import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment';
import { AppointmentListService } from '../../services/appointment-list/appointment-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-appointment',
  templateUrl: 'edit-appointment.html',
})
export class EditAppointmentPage {

  appointment: Appointment;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private appoint: AppointmentListService) {
  }

  ionViewWillLoad() {
   this.appointment = this.navParams.get('appointment');
  }
  
  saveAppointment(appointment: Appointment) {
    this.appoint.editAppointment(appointment)
    .then(() => {
      this.navCtrl.setRoot('AppointmentsPage');
    })
  }

}
