export interface User {
  name: string
  lastName: string
  birthDay: string
  parsedBirthDay?: Date
  age?: number
  dni?: string
  phone?: string
  plan?: Plan
}

export interface Plan {
  name: string
  price: number
  description: string[]
  age: number
  originalPrice?: number
}
