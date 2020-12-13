import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { FlightFilter } from '../model/flight-filter';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  FLIGHT_URL = "http://localhost:3000/Flights/";
  USERS_URL ='http://localhost:3000/Users/';


  constructor(private http: HttpClient) {
  }

  getAllFlights() : Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FLIGHT_URL);
  }

  getFlightById(id: string): Observable<Flight> {
    return this.http.get<Flight>(this.FLIGHT_URL+id);
  }
  deleteFlight(id : number){
    return this.http.delete(this.FLIGHT_URL+id);
  }

  updateFlight(flight : Flight){
    return this.http.put(this.FLIGHT_URL+flight.id,flight);
  }

  addFlight(flight : Flight){
    return this.http.post(this.FLIGHT_URL,flight);
  }

  getFlightBySearch(S : string){
    return this.http.get<Flight[]>("http://localhost:3000/Flights"+S);
  }

    getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.USERS_URL);
  }

  addUser(u : User){
    return this.http.post(this.USERS_URL,u);
  }

  getSpecificUser(username : string, password : string){
    return this.http.get<User[]>(this.USERS_URL+"?username="+username+"&password="+password);
  }

  modifyUser(user : User){
    return this.http.put(this.USERS_URL+user.id,user);
  }

  getUserById(id : number){
    return this.http.get<User>(this.USERS_URL+id)
  }

  deleteUserById(id : number){
    return this.http.delete(this.USERS_URL+id);
  }
}
