import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  pk: number = 0 ;
  n : string = "";


 
  constructor(private rota:ActivatedRoute, private caminho: Router) { 

  }

  ngOnInit(): void {
    this.n=this.rota.snapshot.params['pk'];
  }

}
