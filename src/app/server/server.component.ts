import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:white;
    }
    `]
})
export class ServerComponent {
    serverCreationStatus = 'No server was created'
    serverName = 'test Server';
    allowNewServer = false;
    serverCreated = false;
    serverId: number = 10;
    serverStatus: string = '';
    servers =['serverTest','serverTest 2'];

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offLine';
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'server was created and the server name is: ' + this.serverName

    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'onLine' ? 'green' : 'red';
    }
}