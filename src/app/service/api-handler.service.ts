import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private APIBASE_URL = 'http://localhost:3000/professional';

  constructor(private http:HttpClient) { }

  createTask(data:any){
    return this.http.post<any>(this.APIBASE_URL,data)
  }

  getList(){
    return this.http.get<any>(this.APIBASE_URL)
  }

  getJobLocation():Array<any> {
    return [
      { id: 1, name: 'Indore' },
      { id: 2, name: 'Bangaluru' },
      { id: 3, name: 'Pune' },
      { id: 4, name: 'Navsari' },
      { id: 5, name: 'New Delhi' },
      { id: 6, name: 'Mumbai' }
    ]
  }

  getSkills() :Array<any>{
    return [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'React Js' },
      { id: 3, name: 'Java' },
      { id: 4, name: 'Python' },
      { id: 5, name: 'Node js' },
      { id: 6, name: 'Next Js' },
    ]
  }

  getJobType() :Array<any>{
    return [
      { id: 1, name: 'Full Time' },
      { id: 2, name: 'Part Time' },
      { id: 3, name: 'Contractually' },
      { id: 4, name: 'Remote Work' }
    ];
  }

  getExpertise():Array<any>{
    return [
      { id: 1, name: 'Fresher' },
      { id: 2, name: 'Junior' },
      { id: 3, name: 'Mid Level Developer' },
      { id: 4, name: 'Senior Developer' }
    ]
  }


  getFunc_Area() :Array<any>{
    return [
      { id: 1, name: 'Front End Developer' }, 
      { id: 2, name: 'Backend Developer' },
      { id: 3, name: 'Devops' },
      { id: 4, name: 'Sales Force Developer' }
    ];
  }

  getFunc_Indudtry() :Array<any>{
    return [
      { id: 1, name: 'TCS (TATA Consulatancy Service)' },
      { id: 2, name: 'Infosys' },
      { id: 3, name: 'Amazon' },
      { id: 4, name: 'Accenture' }
    ];
  }

  allDropDownSettings(){
    return {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      clearSearchFilter: true,
      noDataAvailablePlaceholderText: 'Data Not Found..'
    }
  }

  
}

