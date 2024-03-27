import { Routes } from '@angular/router';
import {SenderComponent} from "./sender/sender.component";
import {ReceiverComponent} from "./receiver/receiver.component";

export const routes: Routes = [
  {path: "send", component: SenderComponent},
  {path: "receive", component: ReceiverComponent}
];
