import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as logindb from '../../services/login.db.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(form:NgForm){
    const username = form.value.username
    const password = form.value.password

    const query = 'SELECT "ID_USUARIO", email, rut, nombre, "apPaterno", "apMaterno", "fechaNacimiento", profesion, "ID_ROL", "fechaRegistro" FROM public."USUARIO" WHERE username=$1 && password=$2'
    const params = [username, password]
    var log = async (req:any,res:any) => {
      const result = await logindb.query(query,params,)
      res.send(result.rows[0])
      
    }
  }

}
