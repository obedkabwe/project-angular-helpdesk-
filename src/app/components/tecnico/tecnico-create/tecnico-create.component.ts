import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  nome:FormControl = new FormControl(null, Validators.minLength(3));
  cpf:FormControl = new FormControl(null, Validators.required);
  email:FormControl = new FormControl(null, Validators.email);
  senha:FormControl = new FormControl(null, Validators.minLength(3));



  constructor() { }

  ngOnInit(): void {
  }


  validaCampo(): Boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
  }

}
