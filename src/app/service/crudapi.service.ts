import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class CrudapiService {
  private APIBASE_URL = 'http://localhost:3000/';

  readonly apiUrl = "http://localhost:3000/employee";

  headers = new HttpHeaders().set("content-Type","application-json");

  constructor(private http:HttpClient) { }


  getMethod(): Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl);
  }

  deleteMethod(id:any): Observable<Employee>{
    return this.http.delete<Employee>(this.apiUrl +'/'+id).pipe(
      catchError(this.errorHandling) 
    )
  }

  getUpdateByid(id:any): Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl+'/'+id).pipe(
       catchError(this.errorHandling) )
  }

  createMethod(body:any): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl,body) .pipe(
      catchError(this.errorHandling)
    )
  }

  updateMethod(id:any,body:any): Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl+'/'+id, body).pipe(
      catchError(this.errorHandling)
    )
  }


  errorHandling(error:HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.error(`An Error Occured ${error.error.message}`)
    }
    else{
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  createTask(data:any){
    return this.http.post<any>(this.APIBASE_URL+'professional',data)
  }

  getList(){
    return this.http.get<any>(this.APIBASE_URL+'professional')
  }

  getJobLocation() {
    return this.http.get<any>(this.APIBASE_URL+'jobLocation')
  }

  getSkill() {
    return this.http.get<any>(this.APIBASE_URL+'skills') 
  }

  getJobType(){
    return this.http.get<any>(this.APIBASE_URL+'jobType') 

  }

  getExpertise(){
    return this.http.get<any>(this.APIBASE_URL+'experTies') 
  }

  getFuncArea(){
    return this.http.get<any>(this.APIBASE_URL+'function-Area') 
  }

  getFuncIndudtry(){
    return this.http.get<any>(this.APIBASE_URL+'function-Industry') 
  }

}
