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

  
  habilitacionCuadro = false;
  
  usuRegistrado=true;

  textoDeRegistro = "No hay nadie registrado";
  
  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  llamaEmpresa(value:String){
    
  }

  setUsuarioRegistrado(event:Event){
    
    //alert("El usuario se acaba de registrar.")
    this.textoDeRegistro = "El usuario se acaba de registrar.";
    //alert(event.target); //HTMLInputElement (para luego hacer casting)
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar.";
    }else{
      this.textoDeRegistro = "No hay nadie registrado.";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
