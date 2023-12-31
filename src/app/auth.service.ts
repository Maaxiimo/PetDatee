import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { 
    this.ngOnInit();
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  async login(username: string, password: string): Promise<boolean> {
    // Aquí, verificarías las credenciales en una base de datos o en algún otro lugar.
    // Por simplicidad, compararemos las credenciales con valores fijos.
    const usuario = await this.storage.get('user');
    if (usuario) {
      // Hacer algo con los datos del usuario, como mostrarlos en la interfaz de usuario.
      console.log(usuario.username,'-', usuario.password);
    } else {
      // El usuario no está almacenado en la memoria local.
      console.log('No se encontraron datos de usuario.');
    }

    if (username === usuario.username && password === usuario.password) {
      await this.storage.set('isLoggedIn', true);
      return true;
    } else {
      return false;
    }
  }

  async register(username: string, password: string): Promise<boolean> {
    // Aquí, normalmente agregarías el nuevo usuario a la base de datos o algún servicio de autenticación.
    // Por simplicidad, simplemente guardamos las credenciales en el almacenamiento local.
    //await this.storage.set(username, password);
    await this.storage.set('user', { username, password });
    return true;
  }

  async isLoggedIn(): Promise<boolean> {
    return !!(await this.storage.get('isLoggedIn'));
  }

  async logout(): Promise<void> {
    await this.storage.remove('isLoggedIn');
  }
}