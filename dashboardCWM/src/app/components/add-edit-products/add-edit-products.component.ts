import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'AGREGAR '
  products: any
  

  destacadoSeleccionado = "false"
  activoSeleccionado = "true"

  destacado: any [] = [

    { value: "true", nombre: 'Si'},
    { value: "false", nombre: 'No'}

  ];

  activo: any [] = [

    { value: "true", nombre: 'Si'},
    { value: "false", nombre: 'No'}

  ];

  constructor(private fb: FormBuilder, 
    private _productServices: ProductService,
    private router: Router,
    private aRouter: ActivatedRoute) { 

    this.form = this.fb.group({
      producto: ['', Validators.required],
      foto: ['', Validators.required],
      precio: [null, Validators.required],

    })

    this.id = Number(aRouter.snapshot.paramMap.get('id'))
    
  }

  ngOnInit(): void {

    if(this.id != 0){
      this.operacion = 'EDITAR '
      this.getProduct(this.id);
    }

  }

  getProduct(id: number) {
    this._productServices.getProduct(id).subscribe((data:Product) => {
      console.log(data)

      this.form.patchValue({
        producto: data.producto,
        foto: data.foto,
        precio: data.precio,
        destacado: data.destacado,
        activo: data.activo
      })
    })
  }

  addProduct(){

    const product: Product = {

      producto: this.form.get('producto')?.value,
      foto: this.form.get('foto')?.value,
      precio: this.form.get('precio')?.value,
      destacado: this.destacadoSeleccionado,
      activo: this.activoSeleccionado

    }


    if(this.id !== 0) {

      product.id = this.id

      this._productServices.updateProduct(this.id, product).subscribe(data => {
        this.products = data
        this.router.navigate(['/'])
      })

    } else{

      this._productServices.saveProduct(product).subscribe(data => {
        this.products = data
        this.router.navigate(['/']);
        console.log(product)
      }, error => {
        console.log
      })

    }

  }

}