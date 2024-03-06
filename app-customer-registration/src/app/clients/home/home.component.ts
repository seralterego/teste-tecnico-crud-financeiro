import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';
ClientsService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allClients: Clients[] = [];

  constructor(private clientsService: ClientsService) { }

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
