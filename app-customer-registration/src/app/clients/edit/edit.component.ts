import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../clients';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ){
    this.titleService.setTitle("Editar Cadastro")
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id)
    })
  }
  getById(id: number) {
    this.clientsService.edit(id).subscribe((data) => {
      this.formdata = data;
    })
  }

  update() {
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
