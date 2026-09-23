import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAuthComponent } from '@auth/components/navbar-component/navbar-component';
import { FooterAuthComponent } from '@auth/components/footer-component/footer-component';

@Component({
  selector: 'app-auth-front-layout',
  imports: [RouterOutlet, NavbarAuthComponent, FooterAuthComponent],
  templateUrl: './auth-front-layout.html',
})
export class AuthFrontLayout {}
