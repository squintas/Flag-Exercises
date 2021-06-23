import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  posts: Post[] = [{id:1,userId:1, body:"Bla Bla", title:"Hello"},
  {id:2,userId:2, body:"Glu Glu", title:"Hello"}
  ];

  constructor() { }

  pesquisa(id):Post{
    return this.posts[id];
  }
}
