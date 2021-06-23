import { Component, OnInit } from '@angular/core';
import { Disco } from '../disco';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public servico: DiscoService) { }

  ngOnInit(): void {
  }

}
