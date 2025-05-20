import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component'; // ✅ import it

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent], // ✅ add it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // your logic here
}

