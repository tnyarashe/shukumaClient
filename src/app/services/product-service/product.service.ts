import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:3000/v1/product/';

  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseUrl}articles`);
  }

  getProduct(id: any): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/article/${id}`);
  }

  addProduct(data: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(id: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
