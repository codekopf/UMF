import {Role} from './Role';

export class IncomingUserDTO {

  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public password: string;
  public roles: Role[];
  public createdAt: string;
  public createdBy: string;

  constructor(incomingUserDTO: IncomingUserDTO) {
    this.id = incomingUserDTO.id;
    this.firstName = incomingUserDTO.firstName;
    this.lastName = incomingUserDTO.lastName;
    this.email = incomingUserDTO.email;
    this.phone = incomingUserDTO.phone;
    this.password = incomingUserDTO.password;
    this.roles = incomingUserDTO.roles;
    this.createdAt = incomingUserDTO.createdAt;
    this.createdBy = incomingUserDTO.createdBy;
  }
}
