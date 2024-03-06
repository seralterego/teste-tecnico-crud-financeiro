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
  ) {
    this.titleService.setTitle("Formulário de Cadastro")

    this.formCadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.multipleNamesValidator]],
      cpf: [0, [Validators.required]], //, this.cpfValidator
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

  // Validação para verificar se CPF é válido
  /* private cpfValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value as string;

    if (!this.isValidCPF(value)) {
      return { 'invalidCPF': true };
    }

    return null;
  } */

  // Função para validar o CPF
  /* private isValidCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    const cleanedCPF = cpf.replace(/\D/g, '');

    // Verifica se possui 11 dígitos
    if (cleanedCPF.length !== 11) {
      return false;
    }
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cleanedCPF)) {
      return false;
    }
    // Algoritmo de validação do CPF
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
  } */
}
