import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { url } from 'inspector';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if (senha && confirma && senha !== confirma) {
      return {
        senhaConfirmada: true,
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss'],
})
export class AppCadastroComponent implements OnInit {
  formularioCadastro = this.loginBuilder.group(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
      confirmaSenha: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
    },
    { validators: passwordMatchValidator() }
  );

  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router
  ) {}

  get nome() {
    return this.formularioCadastro.get('nome');
  }

  get email() {
    return this.formularioCadastro.get('email');
  }

  get senha() {
    return this.formularioCadastro.get('senha');
  }

  get confirmaSenha() {
    return this.formularioCadastro.get('confirmaSenha');
  }

  get url() {
    return this.formularioCadastro.get('url');
  }

  enviaCadastro() {
    if (!this.formularioCadastro.valid) {
      return;
    }
    const { nome, email, senha, url } = this.formularioCadastro.value;
    this.autenticacaoFirebaseService
      .cadastrarUsuario(nome, email, senha, url)
      .pipe(
        this.toast.observe({
          // Correção de Português no Toast
          success: 'Cadastro executado! Bem-vindo(a) ao BookShelf!',
          loading: 'Enviando informações...',
          error: ({ message }) => `Houve um problema: #BS${message}`,
        })
      )
      .subscribe(() => {
        this.rotas.navigate(['/']);
        this.limparCadastro();
      });
  }
  // Rotina de limpar campos de cadastro
  limparCadastro() {
    this.formularioCadastro = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmaSenha: new FormControl(''),
      url: new FormControl(''),
    });
    this.formularioCadastro.reset();
  }
  ngOnInit(): void {}
}
