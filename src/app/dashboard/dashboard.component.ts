import { Component, OnInit, Inject} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../api.service';

export interface DialogData {
    icao: any;
    country: any;
    modes: any;
    days: any;
    airport: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  locations: any[];
  days: any[];
  flight_modes: any[];
  
  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit() {
    this.days = [{
      "count": 1
    },
    {
      "count": 2
    },
    {
      "count": 3
    },
    {
      "count": 4
    },
    {
      "count": 5
    },
    {
      "count": 6
    },
    {
      "count": 7
    }];
    
    this.flight_modes = [{
      "value" : "departure",
      "label" : "Departing Flights"
    },
    {
      "value" : "arrival",
      "label" : "Arriving Flights"
    }];
    
    this.locations  = [{
        "airportName": "Hartsfield–Jackson Atlanta Airport",
        "icao": "KATL",
        "country": "United States",
        "image": "http://dapo-ogunlana.com.ng/airline-info/Atlanta.jpg"
    },
    {
        "airportName":"Beijing Capital International Airport",
        "icao":"ZBAA",
        "country":"China",
        "image":"http://dapo-ogunlana.com.ng/airline-info/beijing-airport.jpg"
    },
    {
        "airportName":"London Heathrow Airport",
        "icao":"EGLL",
        "country":"United Kingdom",
        "image":"http://dapo-ogunlana.com.ng/airline-info/London-Heathrow-Airport.jpg"
    },
    {
        "airportName":"O'Hare International Airport",
        "icao":"KORD",
        "country":"United States",
        "image":"http://dapo-ogunlana.com.ng/airline-info/OHare-International-Airport.jpg"
    },
    {
        "airportName":"Tokyo Narita Airport",
        "icao":"RJAA",
        "country":"Japan",
        "image":"http://dapo-ogunlana.com.ng/airline-info/Tokyo-Narita-Airport.jpg"
    },
    {
        "airportName":"Los Angeles International Airport",
        "icao":"KLAX",
        "country":"United States",
        "image":"http://dapo-ogunlana.com.ng/airline-info/Los-Angeles-International-Airport.jpg"
    },
    {
        "airportName":"Paris Charles de Gaulle Airport",
        "icao":"LFPG",
        "country":"France",
        "image":"http://dapo-ogunlana.com.ng/airline-info/Paris-Charles-de-Gaulle-Airport.jpg"
    },
    {
        "airportName":"Dallas Fort Worth International Airport",
        "icao":"KDFW",
        "country":"United States",
        "image":"http://dapo-ogunlana.com.ng/airline-info/Dallas-Fort-Worth-International-Airport.jpg"
    },
    {
        "airportName":"Frankfurt Airport",
        "icao":"EDDF",
        "country":"Germany",
        "image":"http://dapo-ogunlana.com.ng/airline-info/Frankfurt-Airport.jpg"
    },
    {
        "airportName":"Hong Kong International Airport",
        "icao":"VHHH",
        "country":"China",
        "image":"http://dapo-ogunlana.com.ng/airline-info/Hong-Kong-International-Airport.jpg"
    }];
  }
  
  openDialog(icao: any, airport: any, country: any): void {
    const dialogRef = this.dialog.open(DashboardComponentDialog, {
      width: '90%',
      data: {icao: icao, airport: airport, country: country, days: this.days, modes: this.flight_modes}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'dashboard-dialog',
  templateUrl: './dashboard.dialog.html',
})

export class DashboardComponentDialog implements OnInit {
  
  panelOpenState = false;
  flightDetails:any[];
  
  ngOnInit() { }
    
  constructor( public dialogRef: MatDialogRef<DashboardComponentDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData,  private api: ApiService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  getFlightDetails(icao: any, form: any): any {
    let f_mode = form.controls['mode'].value;
    let f_day = form.controls['duration'].value;
    let end = new Date().getTime() / 1000;
    let date = new Date();
    // add a day
    date.setDate(date.getDate() - f_day);
    let begin = date.getTime() / 1000;
    
    this.api.initiateGet(f_mode, icao, Math.round(begin), Math.round(end)).subscribe((data: any) => {
      this.flightDetails = data;
      console.log(data);
    },
    (error: any) => {
      console.log(error);
    });
  }
}