import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/Client';
import { Router } from "@angular/router"

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  }

  disableBalanceOnAdd: boolean = true;

  @ViewChild('clientForm', { static: false }) form: any

  constructor(
    private flashMessages: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;

    }
    if (!valid) {
      //  show error
      this.flashMessages.show('Please fii out the Form correctly', {
        cssClass: 'alert-danger', timeOut: 4000
      })
    } else {
      // Add new Client
      this.clientService.newClient(value);
      // show message
      this.flashMessages.show('New Client added', {
        cssClass: 'alert-success', timeOut: 4000
      });
      // Redirect to Dashboard

      this.router.navigate(['/'])
    }
  }
}
