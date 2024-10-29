export interface EmployeeDetail {
    id: number;
    firstName: string;
    lastName: string;
    address: EmployeeAddress;
    startDate: Date
  }
export interface EmployeeDetailTemp {
    id: number;
    firstName: string;
    lastName: string;
    address: String;
    startDate: Date
  }

export interface EmployeeAddress {
    number: number;
    street: string;
    city: string;
    zip: string;
    country: string;
}