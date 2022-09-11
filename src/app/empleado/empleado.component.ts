import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{color:red;}"] //inline
})
export class EmpleadoComponent implements OnInit {

  nombre = "David";
  apellido = "Seva";
  edad = 47;  
  //Sempresa = "ADD Informática";

  // getEdad(){
  //   return this.edad;
  // }

  llamaEmpresa(value:String){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
