import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario:Object = {
    nombrecompleto:{
      nombre: "andres",
      apellido: "sosa"
    },
    correo: "andres.chavezsosa1494@gmail.com"
  }

  constructor() { 

    this.forma = new FormGroup({
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ])
    })

  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log( this.forma.value);
    console.log( this.forma );
  }

}
