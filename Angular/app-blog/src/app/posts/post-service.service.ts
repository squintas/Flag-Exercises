import { Injectable } from '@angular/core';
import { Post }from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts: Post[] = [
    {id:1,userID:1, body:"Body Teste 1", title:"Título Teste 1"},
    {id:2,userID:2, body:"Body Teste 2", title:"Título Teste 2"},
    {id:3,userID:3, body:"Body Teste 3", title:"Título Teste 3"}
  ];

  constructor() { }
}
