import { Component, OnInit } from '@angular/core';
import { ClUsuario } from '../model/ClUsuario';
@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.page.html',
  styleUrls: ['./user-all.page.scss'],
})
export class UserAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  usuario: ClUsuario = { id: 1, first_name: '', last_name: '', email: '', clave: ''};;

  constructor() { }
  ngOnInit() {  }
  public id: string = '';


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}
