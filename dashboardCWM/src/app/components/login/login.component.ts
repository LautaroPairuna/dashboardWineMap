import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/users-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private _adminServices: AdminService,
    private router: Router,) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
   }

  ngOnInit(): void {}

  login() {
    const { usuario, contrasena } = this.form.value;

    this._adminServices.login(usuario, contrasena).subscribe(data => {

      this.router.navigate(['/products'])

    })
      
  }

}
