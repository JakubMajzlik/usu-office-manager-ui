export interface EmployeeDetail {
    id: number;
    firstName: string;
    lastName: string;
    address: EmployeeAddress;
  }

export interface EmployeeAddress {
    number: Number;
    street: string;
    city: string;
    zip: string;
    country: string;
}