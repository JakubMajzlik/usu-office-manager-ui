export interface EmployeeDetail {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    startDate: string;
  }

export interface EmployeeAddress {
    number: string;
    street: string;
    city: string;
    zip: string;
    country: string;
}