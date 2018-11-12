import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Estimate } from "../../models/estimate";
import { Appointment } from "../../models/appointment";

@Injectable()
export class EstimateListService {

    private estimateListRef = this.db.list<Estimate>('estimate-list');
    private appointmentListRef = this.db.list<Appointment>('appointment-list');

    constructor (private db: AngularFireDatabase){

    }

    getEstimateList(){
        return this.estimateListRef;
    }

    addEstimate(estimate: Estimate) {
        return this.estimateListRef.push(estimate);
    }

    proceedEstimate(estimate: Estimate) {
        return this.appointmentListRef.push(estimate);
    }

    editEstimate(estimate: Estimate) {
        return this.estimateListRef.update(estimate.key, estimate);
    }

}