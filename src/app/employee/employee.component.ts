import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-employee',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: IEmployee[];
  showEdit: boolean = false;

  constructor() {
    this.employeeList = [];
    this.addDemoEmployee();
  }

  addDemoEmployee() {
    this.employeeList = [
      { Dob: '23/12/2021', Email: 'demo@gmail.com', EmployeeId: 1, FirstName: 'Demo', LastName: 'Employee', Salary: 9000 },
      { Dob: '23/12/2021', Email: 'demo2@gmail.com', EmployeeId: 2, FirstName: 'Demo 2', LastName: 'Employee 2', Salary: 8000 },
      { Dob: '23/12/2021', Email: 'demo3@gmail.com', EmployeeId: 3, FirstName: 'Demo 3', LastName: 'Employee 3', Salary: 7000 }
    ];
  }

  ngOnInit(): void {}

  EditEmp() {
    this.showEdit = true;
  }

  UpdateEmp() {
    this.showEdit = false;
  }
}
