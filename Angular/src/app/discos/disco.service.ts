import { Injectable } from '@angular/core';
import { Disco } from './disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  discos: Disco[]= [{nome:"U2",ano:1991,preco:10},
  {nome:"Patrick Watson",ano:2020,preco:20}]

  constructor() { }

  select():Disco[]{
    return this.discos;
  }
  getById(id:number):Disco{
    return this.discos[id];
  }
  insert(d:Disco){

  }
  delete(id:number){
    
  }
  update(id:number, d:Disco){

  }


}
