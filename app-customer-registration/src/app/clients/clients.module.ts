import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TabNavComponent } from '../shared/tab-nav/tab-nav.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    TabNavComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ]
})
export class ClientsModule { }
