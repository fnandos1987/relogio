import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  hora:String;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.mostrarhora(), 1000);
  }

  mostrarhora() {
    const f = new Date();
    this.hora = this.lpad(f.getHours()) + ':' + this.lpad(f.getMinutes()) + ':' + this.lpad(f.getSeconds());
  }

  lpad(num) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }
}