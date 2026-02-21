import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Location {
    latitude: number;
    longitude: number;
    address: string;
}
export interface ContactData {
    hours: Array<string>;
    email: string;
    phoneNumber: string;
    location: Location;
    daysOpen: Array<string>;
}
export interface Inquiry {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getContactData(): Promise<ContactData>;
    getInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(name: string, email: string, subject: string, message: string): Promise<void>;
}
