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
  serverCreationStatus = 'No server was created'
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  onCreateServer() {
    this.serverCreationStatus = 'server was created'
  }
  onUpdaterServerName(event : Event){
     this.serverName = (<HTMLInputElement>event.target).value;
// this is just needed to inform type script
// that we know that the type of the HTML element
// of this event will be an HTML input element.
// We do this explicit casting with this syntax
// with the opening and closing tag with the smaller
// and greater than sign and to type in between.

  }
}
