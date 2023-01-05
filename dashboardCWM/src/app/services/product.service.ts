import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  getListProducts(): Observable<any> {
    
    return this.http.get(this.url)

  }

  getProduct(id: number): Observable<any> {
    return this.http.get(this.url + id)
  }

  deleteProduct(id: number): Observable<any>{

    return this.http.delete(this.url + id)

  }

  saveProduct(product: Product): Observable<any> {

    return this.http.post(this.url, product)
    
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(this.url + id, product)
  }

}
