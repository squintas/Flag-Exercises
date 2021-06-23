import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [{id:1,userId:1, body:"Bla Bla", title:"Hello"},
                  {id:3,userId:2, body:"Glu Glu", title:"Hello"}
                 ];
                 // TODO - Ir buscar estes dados a API REMOTA
  constructor() { }

  ngOnInit(): void {
  }

}
