import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private clientsService: ClientsService, private router: Router) { }

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
