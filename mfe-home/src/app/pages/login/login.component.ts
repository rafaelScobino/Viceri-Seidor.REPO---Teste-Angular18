import { Component } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from "primeng/floatlabel";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, ButtonModule, DialogModule, CommonModule, FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

 esqueciSenhaVisible: boolean = false;


    showEsqueciSenha() {
        this.esqueciSenhaVisible = true;
    }




}
