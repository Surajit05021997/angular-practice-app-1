import { NgModule } from "@angular/core";
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@NgModule({
  declarations: [DashboardItemComponent, ServerStatusComponent, TicketsComponent, TrafficComponent],
  exports: [DashboardItemComponent, ServerStatusComponent, TicketsComponent, TrafficComponent],
})
export class DashboardModule {}