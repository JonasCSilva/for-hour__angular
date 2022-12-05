import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormsModule } from '@angular/forms';
import { EmailTaken } from 'src/app/validators/email-taken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormsModule],
})
export class LoginComponent {

  public control: FormControl = new FormControl();
  email: string = '';
  password: string = '';
  alertMsg: string = '';
  error!: boolean;


  // inicia o load desligado
  public loading: boolean = false;

  // exibe a senha quando clicado no icone do olho
  public hiddenPassword: boolean = true;

  constructor(private readonly router: Router, private auth: AuthService, private emailTaken: EmailTaken) {}

  async login(email: string, password: string) {
    this.loading = true;
    await this.auth.login(email, password).then(() => {
      this.router.navigate(['for-hour']).then(() => (this.loading = false))
    })
    .catch(e => {
      console.log(e);
      this.error = true;
      this.loading = false;
    })
  }
}
