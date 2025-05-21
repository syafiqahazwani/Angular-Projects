export class EmployeeModel {
    empId: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    contactNo: string;
    address: string;

    constructor() {
        this.address = '';
        this.contactNo = '';
        this.emailId = '';
        this.state = '';
        this.city = '';
        this.name = '';
        this.empId = 0;

    }
}