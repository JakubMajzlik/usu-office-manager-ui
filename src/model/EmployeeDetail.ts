import { OfficeTableDetail } from "./OfficeDetail";

export interface EmployeeDetail {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    startDate: string;
    officeTableId: number | null;
  }

export interface EmployeeAddress {
    number: string;
    street: string;
    city: string;
    zip: string;
    country: string;
}