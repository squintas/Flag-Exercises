import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  pk: number;

  constructor(private rota:ActivatedRoute, private caminho: Router) { }

  ngOnInit(): void {
    this.pk=this.rota.snapshot.params['pk'];
  }

}
