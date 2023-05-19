import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IncomingUserDTO} from '../models/IncomingUserDTO';

@Injectable()
export class UsersService {

  private static ISSUES_ENDPOINT = '/users';

  constructor(private httpClient: HttpClient) {
  }

  public get(id: string): Observable<IncomingUserDTO> {
    return this.httpClient.get<IncomingUserDTO>(environment.API + UsersService.ISSUES_ENDPOINT + '/' + id);
  }

  public getUsers(): Observable<IncomingUserDTO[]> {

    const endpoint = environment.API + UsersService.ISSUES_ENDPOINT;

    return this.httpClient.get<IncomingUserDTO[]>(endpoint);
  }

}
