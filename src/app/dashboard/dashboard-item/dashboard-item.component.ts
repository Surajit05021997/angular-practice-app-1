import { Component, Input } from '@angular/core';
import { DashboardItemImage } from './dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: false,
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: DashboardItemImage;
  @Input({ required: true }) title!: string;
}
