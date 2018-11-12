import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Appointment } from "../../models/appointment";

@Injectable()
export class AppointmentListService {

    private appointmentListRef = this.db.list<Appointment>('appointment-list');

    constructor (private db: AngularFireDatabase){

    }

    getAppointmentList(){
        return this.appointmentListRef;
    }

    addAppointment(appointment: Appointment) {
        return this.appointmentListRef.push(appointment);
    }

    editAppointment(appointment: Appointment) {
        return this.appointmentListRef.update(appointment.key, appointment);
    }
}