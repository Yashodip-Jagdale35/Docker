import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  public employeeForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    })
  }

  onSubmit(): void {
    console.log(this.employeeForm)
  }

  onLoadDataClick(): void{
    this.employeeForm.patchValue({
      fullName: 'Competent Technologies',
      email: 'yash@competenttech.com'//,
      // skills: {
      //   skillName: 'C#',
      //   experienceInYears: 9.2,
      //   proficiency: 'beginner'
      // }
    })
  }
}
