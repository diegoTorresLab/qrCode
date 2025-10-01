import { Component } from '@angular/core';
import { QrcardComponent } from "./qrcard/qrcard.component";

@Component({
  selector: 'app-root',
  imports: [QrcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qrcode';
}
