import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];

  constructor() {
    this.createForm();
    const oldData = localStorage.getItem("EmpData");
    if (oldData != null) {
      this.employeeList = JSON.parse(oldData);
    }
  }

  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name, [Validators.required]),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      address: new FormControl(this.employeeObj.address),
      contactNo: new FormControl(this.employeeObj.contactNo),
      emailId: new FormControl(this.employeeObj.emailId)
    });
  }

  reset() {
    this.employeeObj = new EmployeeModel();
    this.createForm();
  }

  onSave() {
    const oldData = localStorage.getItem("EmpData");
    let newId = 1;
    if (oldData) {
      const parseData = JSON.parse(oldData);
      newId = parseData.length + 1;
      this.employeeList = parseData;
    }
    this.employeeForm.controls['empId'].setValue(newId);
    this.employeeList.unshift(this.employeeForm.value);
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
    this.reset();
  }

  onEdit(item: EmployeeModel) {
    this.employeeObj = item;
    this.createForm();
  }

  onUpdate() {
    const id = this.employeeForm.controls['empId'].value;
    const record = this.employeeList.find(emp => emp.empId === id);
    if (record) {
      record.name = this.employeeForm.controls['name'].value;
      record.address = this.employeeForm.controls['address'].value;
      record.contactNo = this.employeeForm.controls['contactNo'].value;
      record.city = this.employeeForm.controls['city'].value;
      record.state = this.employeeForm.controls['state'].value;
      record.emailId = this.employeeForm.controls['emailId'].value;
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
    this.reset();
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      const index = this.employeeList.findIndex(emp => emp.empId === id);
      if (index !== -1) {
        this.employeeList.splice(index, 1);
        localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
      }
    }
  }
}
