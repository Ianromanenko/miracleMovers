import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentListService } from '../../services/appointment-list/appointment-list.service';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/appointment';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

  appointmentList: Observable<Appointment[]>
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private appoint: AppointmentListService) {
    this.appointmentList = this.appoint
    .getAppointmentList()
    .snapshotChanges()
    .map(changes => {
        return <Appointment[]>changes.map( 
          c => ({
            key: c.payload.key, ...c.payload.val()
          }))
      })
  }

  
}
