import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/ClProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productos: ClProducto[] = [];

  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public router: Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    await loading.present();

    await this.restApi.getProducts().subscribe({
      next: (res) => {
        // Filtra los productos que tienen el código "08-Grupo2"
        this.productos = res.filter(producto => producto.codigo === '09-G5');
        loading.dismiss();
      },
      complete: () => {},
      error: (err) => {
        console.log("Err:" + err);
        loading.dismiss();
      }
    });
  }
}
