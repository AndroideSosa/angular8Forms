import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario:Usuario = {
    nombrecompleto:{
      nombre: "andres",
      apellido: "sosa"
    },
    correo: "andres.chavezsosa1494@gmail.com",
    pasatiempos:["Correr","Dormir","Comer"],
    nacionalidad: null
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

  constructor() { 

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl( '' , [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl( '', Validators.required),
      }),
        'correo': new FormControl( '' , [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
        'nacionalidad': new FormControl( '', Validators.required),
        'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ])
    })

   // this.forma.setValue ( this.usuario ); 

  }

  ngOnInit() {
  }

  agregarPasatiempo(texto){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl(this.forma.controls['pasatiempos'].value, Validators.required)
    )
  }


  guardarCambios(){
    console.log( this.forma.value);
    console.log( this.forma );

    this.forma.reset ({
      nombrecompleto:{
        nombre: "",
        apellido: ""
      },
      correo:"",
      pasatiempos:[],
      nacionalidad: "" 
    });
  }
  
}
