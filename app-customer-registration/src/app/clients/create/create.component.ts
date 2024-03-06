import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


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
  ) {
    this.titleService.setTitle("Formulário de Cadastro")

    this.formCadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.multipleNamesValidator]],
      cpf: [0, [Validators.required, Validators.maxLength(11), Validators.minLength(11), this.cpfValidator]],
      birthday: ['', [Validators.required]],
      income: [0, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      registered: [new Date().toLocaleDateString('pt-BR'), [Validators.required]],
    })
  }

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

  // Validação de sobrenome
  private multipleNamesValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value as string;

    // Verificar se há pelo menos um espaço em branco
    if (value && value.indexOf(' ') === -1) {
      return { 'multipleNames': true };
    }

    return null;
  }

  // Validação do CPF
  private cpfValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value as string;

    if (!CreateComponent.isValidCPF(value)) {
      return { 'invalidCPF': true };
    }
    return null;
  }
  //Verificar se o CPF é válido
  static isValidCPF(cpf: string): boolean {
    // Lógica de validação do CPF
    const cleanedCPF = String(cpf).replace(/\D/g, '');  // Garante que cpf é tratado como string

    if (cleanedCPF.length !== 11 || /^(\d)\1+$/.test(cleanedCPF)) {
      return false;
    }

    let sum = 0;
    let weight = 10;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCPF.charAt(i), 10) * weight--;
    }

    const remainder = (sum * 10) % 11;
    if (remainder !== parseInt(cleanedCPF.charAt(9), 10)) {
      return false;
    }

    sum = 0;
    weight = 11;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCPF.charAt(i), 10) * weight--;
    }

    const secondRemainder = (sum * 10) % 11;

    return secondRemainder === parseInt(cleanedCPF.charAt(10), 10);
  }

}
