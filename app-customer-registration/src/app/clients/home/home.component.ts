import { Component, NgModule, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allClients: Clients[] = [];

  constructor(private clientsService: ClientsService, private titleService: Title) {
    this.titleService.setTitle("Lista de Clientes");
  }

  ngOnInit(): void {
    this.clientsService.getAll().subscribe((data) => {
      this.allClients = data;
    })
  }

  deleteItem(id:number) {
    this.clientsService.delete(id).subscribe({
      next: (_data) => {
        this.allClients = this.allClients.filter(_ => _.id != id)
      },
    })
  }
}

