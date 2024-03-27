import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent implements OnInit{
  receivedData: string | undefined;
  subscription!:Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('ReceiverComponent initialized');
    this.subscription = this.dataService.getData().subscribe(data => {
      console.log('Data received:', data);
      this.receivedData = data;
    });

  }

  showData() {

  }
}
