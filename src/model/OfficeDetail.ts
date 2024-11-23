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
}