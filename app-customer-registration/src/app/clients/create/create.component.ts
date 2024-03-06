import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formCadastro: FormGroup;

  constructor(
    private clientsService: ClientsService, 
    private router: Router,
    private titleService: Title,
    private fb: FormBuilder
  ){
    this.titleService.setTitle("Formulário de Cadastro")

    this.formCadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.multipleNamesValidator]],
      cpf: [0, [Validators.required]],
      birthday: ['', [Validators.required]],
      income: [0, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      registered: [new Date().toLocaleDateString('pt-BR'), [Validators.required]],
    })
  }

  // Validador personalizado para verificar se há mais de um nome
  private multipleNamesValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value as string;

    // Verificar se há pelo menos um espaço em branco
    if (value && value.indexOf(' ') === -1) {
      return { 'multipleNames': true };
    }

    return null;
  }
  /* formdata: Clients = {
    id: 0,
    name: '',
    cpf: 0,
    birthday: '',
    income: 0,
    email: '',
    registered: new Date().toLocaleDateString('pt-BR'),
  } */

  create() {
    if (this.formCadastro.valid) {
      const formData: Clients = this.formCadastro.value;
      
      this.clientsService.creat(formData).subscribe({
        next: (data) => {
          this.router.navigate(["clients/home"]);
        },
        error: (er) => {
          console.log(er)
        }
      })
    }
  }
}
