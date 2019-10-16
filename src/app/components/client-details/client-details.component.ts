import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/Client';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hastBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;


  constructor(
    private flashMessages: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Get Id Form URL
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client != null) {
        if (client.balance > 0) {
          this.hastBalance = true;
        }
      }
      this.client = client;

    })
  }

}
