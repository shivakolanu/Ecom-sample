import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  @Input() product;
  @Output() notify: EventEmitter<string> = new EventEmitter();
  test: "test";
  notifyNum(){
    this.notify.emit("test");
  }
}