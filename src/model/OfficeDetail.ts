export interface OfficeDetail {
    id: number;
    name: string;
    area: number;
    tables: OfficeTable[];
}

export interface OfficeTable {
    id: number;
    name: string;
    utilizedArea: number;
}