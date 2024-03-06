import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formularioDeCadastro = FormGroup;

  constructor(
    private clientsService: ClientsService, 
    private router: Router,
    private titleService: Title,
    private fb: FormBuilder
  ){
    this.titleService.setTitle("Formulário de Cadastro")
    this.formularioDeCadastro
    this.fb.group
  }

  formdata: Clients = {
    id: 0,
    name: '',
    cpf: 0,
    birthday: '',
    income: 0,
    email: '',
    registered: new Date().toLocaleDateString('pt-BR'),
  }

  create() {
    this.clientsService.creat(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["clients/home"]);
      },
      error: (er) => {
        console.log(er)
      }
    })
  }
}
