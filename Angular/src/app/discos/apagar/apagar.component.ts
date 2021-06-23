import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-apagar',
  templateUrl: './apagar.component.html',
  styleUrls: ['./apagar.component.css']
})
export class ApagarComponent implements OnInit {

  constructor(public servico: DiscoService) { }

  ngOnInit(): void {
  }

}
