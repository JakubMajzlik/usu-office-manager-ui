import { EmployeeDetail } from "./EmployeeDetail";

export interface OfficeDetailResponse {
    id: number;
    name: string;
    area: number;
    tables: number[];
}

export interface OfficeDetail {
    id: number;
    name: string;
    area: number;
    tables: OfficeTableDetail[];
}


export interface OfficeTableDetail {
    id: number;
    name: string;
    utilizedArea: number;
    office: OfficeDetail | null;
    employee: EmployeeDetail | null;
}

export interface OfficeTableDetailResponse {
    id: number;
    name: string;
    utilizedArea: number;
    officeId: number | null;
}