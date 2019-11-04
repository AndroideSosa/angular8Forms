import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  //Objeto para cargar información por defecto
  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    genero: null,
    acepta: false
  }

  paises = [{
    codigo: "MXN",
    pais: "Mexico"
  },{
    codigo: "CRI",
    pais: "Costa Rica"
  },{
    codigo: "FRA",
    pais: "Francia"
  },{
    codigo: "BRA",
    pais: "Brasil"
  },{
    codigo: "ESP",
    pais: "España"
  }
];

  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ){

    console.log( "ngForm", forma );
    
    console.log("Valor", forma.value );
    
    console.log("Usuario", this.usuario);
  }

}
