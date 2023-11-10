import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  petForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.petForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      raza: ['', Validators.required],
      sexo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.petForm.valid) {
      // Aquí puedes agregar lógica adicional, como enviar datos a un servidor.
      console.log('Formulario válido', this.petForm.value);
    } else {
      console.log('Formulario inválido');
      // Puedes mostrar mensajes de error o realizar otras acciones aquí
    }
  }
}
