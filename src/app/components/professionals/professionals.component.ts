import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiHandlerService } from 'src/app/service/api-handler.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Country, State, City } from 'country-state-city';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  professionalForm!: FormGroup;
  jobType: any = [];
  skiLLs: any = [];
  jobLocation: any = [];
  experTies: any = [];
  showOutput: boolean = false;
  empLoyeMent_Type: any = [
    { name: "Freelancer", key: 'Emp_Type' },
    { name: "Working", key: 'Emp_Type' },
    { name: "Not Working", key: 'Emp_Type' }
  ]
  currentDate: any = '';
  selectedSkills: any;
  selectedAssocition: any;
  function_Industry: any = [];
  function_Area: any = [];

  constructor(private fb: FormBuilder, private api: ApiHandlerService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.intiForm();
    this.getAllData();
    this.loadAllData();
    // console.log(Country.getAllCountries())
    // this.dropdownList = Country.getAllCountries();
    // console.log(State.getAllStates())
    // this.jobLocation = Country.getAllCountries();
    // console.log('All City', this.jobLocation)
    let date = new Date();
    this.currentDate = this.datePipe.transform(date, "yyyy-MM-dd");
    console.log('Current Date', this.currentDate); //output : 2018-02-13
   
    // this.professionalForm.patchValue({
    //   years_Experience: this.datePipe.transform(this.currentDate, "yyyy-MM-dd")
    // })

  }

  intiForm() {
    this.professionalForm = this.fb.group({
      Emp_Type: ['Freelancer', [Validators.required]],
      years_Experience: [0, [Validators.required]],
      job_Title: ['Front End', [Validators.required]],
      job_Description: [],
      current_Job: [],
      desired_Job_Type: [],
      desired_Job_Location: [],
      clent_Work: [],
      association_Associated: [],
      association_Liencence_Num: [],
      skills: [],
      Experties: [],
      functional_Industry: [],
      functional_Area: [],
      notice_Period: [0, [Validators.required, Validators.min(1), Validators.max(90)]],
      current_Pay: [0, [Validators.required]]
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  changeYears(event: any) {
    console.log("date", this.currentDate = event.target.value);
  }


  loadAllData() {
    this.jobType = this.api.getJobType();
    this.experTies = this.api.getExpertise();
    this.skiLLs = this.api.getSkills();
    this.jobLocation = this.api.getJobLocation();
    this.dropdownSettings = this.api.allDropDownSettings();
    this.function_Industry = this.api.getFunc_Indudtry();
    this.function_Area = this.api.getFunc_Area();
    this.loadSelectedData();
  }

  loadSelectedData() {
    this.selectedItems = [
      { id: 1, name: 'Full Time' },
      { id: 4, name: 'Remote Work' },
    ];
    this.selectedSkills = [
      { id: 1, name: 'Angular' },
    ]
    this.selectedAssocition = [
      { id: 3, name: 'Mid Level Developer' },
    ]
  }

  sendData() {
    this.showOutput = true;
    let data = this.professionalForm.value;
    console.log("professonal data", data);
    this.api.createTask(data).subscribe((res: any) => {
      // console.log("get all data", res)
      alert('Create Data Succefully..?');
      this.professionalForm.reset();
    }, error => {
      console.log("error data......", error)
    })
  }

  getAllData() {
    this.api.getList().subscribe((res: any) => {
      // console.log("get all data", res)
    }, error => {
      console.log("error data......", error)
    })
  }


}
