import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private REST_API_SERVER = "https://opensky-network.org/api/flights/";
	
	// Http Options
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	}
	
	constructor(private httpClient: HttpClient) { }
	
	public initiateGet(mode, icao, begin, end) {
		return this.httpClient.get(this.REST_API_SERVER+mode+'/?airport='+icao+'&begin='+begin+'&end='+end, this.httpOptions); 
	} 
}
