export class Friend {
  _firstname: string
  _lastname: string
  _email: string
  _phone: number
  _language: string

  constructor(firstName: string, lastName: string, email: string, phone: number, language: string) {
    this._firstname = firstName;
    this._lastname = lastName;
    this._email = email;
    this._phone = phone;
    this._language = language;
  }
}
