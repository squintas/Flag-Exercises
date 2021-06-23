import { Component, OnInit } from '@angular/core';
import { Ialbum } from '../ialbum';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  albuns: Ialbum[] = [{id:10, title:"hello", imageurl:"/asset/"},
  {id:2, title:"Hello", imageurl:"/asset/"}
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
