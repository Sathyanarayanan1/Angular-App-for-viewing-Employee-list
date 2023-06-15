import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent {
  employees: Employee[] = [
    {
      firstName: 'Sathya',
      lastName: 'Narayanan',
      dateOfBirth: new Date(2001, 2, 25),
      age: 22,
      joiningDate: new Date(2022, 5, 11),
      country: 'India'
    },
    {
      firstName: 'Alekhya',
      lastName: 'Mysore',
      dateOfBirth: new Date(2000, 9, 21),
      age: 22,
      joiningDate: new Date(2022, 10, 15),
      country: 'India'
    },
    {
      firstName: 'Vaishali',
      lastName: 'Sharma',
      dateOfBirth: new Date(1999, 18, 9),
      age: 23,
      joiningDate: new Date(2022, 21, 7),
      country: 'India'
    },
    {
      firstName: 'Ram',
      lastName: 'Krishnan',
      dateOfBirth: new Date(1993, 2, 5),
      age: 31,
      joiningDate: new Date(2024, 11, 15),
      country: 'India'
    },
    
  ];
}
