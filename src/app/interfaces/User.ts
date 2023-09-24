export interface IUser {
  id: number;
  name: string;
  blood_type: string;
  last_donated?: number;
  area?: string;
  district?: string;
  phoneNo?: string;
  // ... other properties
}
