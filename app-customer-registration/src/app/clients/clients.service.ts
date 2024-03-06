import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from './clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Clients[]>('http://localhost:3000/clientes');
  }

  creat(data:Clients) {
    return this.httpClient.post('http://localhost:3000/clientes', data);
  }

  edit(id:number) {
    return this.httpClient.get<Clients>(`http://localhost:3000/clientes/${id}`);
  }
  
  update(data:Clients) {
    return this.httpClient.put<Clients>(`http://localhost:3000/clientes/${data.id}`, data)
  }
  
  delete(id:number) {
    return this.httpClient.delete<Clients>(`http://localhost:3000/clientes/${id}`);
  }
}
