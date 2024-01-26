import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  //login part will continue later
  login(username: string, password: string): boolean {
 
    return this.isAuthenticated;
  }

  logout(): void {
   
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
