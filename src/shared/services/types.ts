export interface User {
  name: string
  lastName: string
  birthDay: string
  parsedBirthDay?: Date
  age?: number
  dni?: string
  phone?: string
}

export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}
