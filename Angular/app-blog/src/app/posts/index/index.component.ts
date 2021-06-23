import { Component, OnInit } from '@angular/core';
// O "Import Post" abaixo foi escrito manualmente 
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  // Vai Buscar estes dados a API Remota 
  posts: Post[] = [
    {id:1,userID:1, body:"Body Teste 1", title:"Título Teste 1"},
    {id:2,userID:2, body:"Body Teste 2", title:"Título Teste 2"},
    {id:3,userID:3, body:"Body Teste 3", title:"Título Teste 3"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
