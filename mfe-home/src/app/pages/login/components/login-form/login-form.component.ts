import { FloatLabelModule } from 'primeng/floatlabel';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  @Output() esqueciSenha: EventEmitter<any> = new EventEmitter();

  loginForm!: FormGroup;
  submitted = false;
    resolvedCaptcha = false;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid || !this.resolvedCaptcha) {
      return;
    }


    this.setMockToken('tokenMockado123456778990controlederota', 1000);

    this.router.navigate(['/home/dashboard'])
  }

  _esqueciSenha() {
    this.esqueciSenha.emit(true);
  }

  //MOCKANDO TOKEN PARA GUARDA DE ROTA DE ACESSO
  setMockToken(token: string, expireMinutes: number = 60) {
    const d = new Date();
    d.setTime(d.getTime() + expireMinutes * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();

    document.cookie = `authToken=${token}; ${expires}; path=/`;
  }



  resolveCaptcha() {
    this.resolvedCaptcha = true;
  }
}
