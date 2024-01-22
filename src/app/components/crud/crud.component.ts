import { CrudapiService } from './../../service/crudapi.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/emp';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public empList: any = [];
  public empForm!: FormGroup;
  public btnshow:boolean = true;
  public userId:any;
  employeesToDisplay:any;

  constructor(public api: CrudapiService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.intiForm();
    this.getEmp_list();
  }

  intiForm() {
    this.empForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      experience: ['', Validators.required],
      postions: ['', Validators.required],
      salary: ['', Validators.required]
    })
  }

  getEmp_list() {
    this.api.getMethod().subscribe((res) => {
      this.empList = res;
      console.log(this.empList);
    }, error => {
      console.log(error);
    })
  }

  editTodo(data: any) {
   console.log(data);
   alert("edit");
   this.userId = data.id;
   this.empForm.patchValue({
    id:data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    email:data.email,
    dob: data.dob,
    experience: data.experience,
    postions: data.postions,
    salary: data.salary
   })
   this.btnshow = false;
  }

  updateEmpL(){
    alert("update");
    let apibody = this.empForm.value;
    console.log(apibody.id);
    this.api.updateMethod(this.userId,apibody).subscribe((res)=>{
     console.log('update data .',res);
     this.getEmp_list();
    this.btnshow = true;
    this.empForm.reset();
    },error =>{
     console.log(error);
    })
  }

  deleteTodo(id: any) {
    this.api.deleteMethod(id).subscribe((res => {
      console.log(res);
      this.getEmp_list();
    }), error => {
      console.log(error);
    })

  }

  createTodo() {
    console.log(this.empForm.value);
    let payload = this.empForm.value;
    this.api.createMethod(payload).subscribe((res) => {
      console.log(res);
      this.getEmp_list();
      this.empForm.reset();
    }, error => {
      console.log(error);
    })

  }


  searchEmployees(event: any) {
    console.log(event)
    let filteredEmployees: Employee[] = [];
    if (event === '') {
      this.employeesToDisplay = this.empList;
    } else {
      filteredEmployees = this.empList.filter((val:any, index:any) => {
        let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }


  searchUser(event:any){
    console.log('ssssssssss',event.target.value);
    this.empList.filter((item:any)=>{
        // console.log(item.id == item.id);
        if(item.id == event.target.value){
          this.userId = item.id
          console.log(this.userId);
          this.api.getUpdateByid(this.userId).subscribe((res)=>{
            console.log(res);
            this.empList = res;
          } ,error =>{
            console.log(error);
          })
        }
        else{
          console.log("user not found");
        }


    })
  }
}
