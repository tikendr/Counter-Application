import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductService } from './services/product.service'; //Import Service
import { Product } from './model/product.model'; //import model
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
   count:number=0;
   history:number[]=[];
  title = 'angular13';
  products: Product[] = [];
  constructor(private service:ProductService){}
  ngOnInit() {
    this.service.getProducts().subscribe(data =>this.products =data)
  }
  increment(){
    this.count++;
    this.updateHistory();
  }
  decrement(){
    if (this.count > 0){
    this.count--;
    this.updateHistory();
    }
  }
  reset(){
    this.count=0;
    this.updateHistory();
  }
  clear(){
    this.history=[];
  }
  updateHistory() {
    this.history.push(this.count);
  }
}
