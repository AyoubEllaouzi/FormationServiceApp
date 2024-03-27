import { Component } from '@angular/core';
import {DataService} from "../services/data.service";
import {FormsModule} from "@angular/forms";
import {ReceiverComponent} from "../receiver/receiver.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [
    FormsModule,ReceiverComponent,RouterLink
  ],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  newData: string | undefined;

  constructor(private dataService: DataService) {

  }

  submitData() {
    if (this.newData){
      console.log(this.newData);
      this.dataService.updateData(this.newData);
      this.newData = ''; // Clear input after submitting
    }
  }
}
