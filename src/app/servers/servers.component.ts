import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //selecy by elements
  //selector: '.app-servers',//select by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;

  constructor(){
    setTimeout( ()=>{
      this.allowNewServer=true;
    } ,2000)
  }

}
