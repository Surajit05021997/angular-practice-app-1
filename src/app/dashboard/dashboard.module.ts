import { NgModule } from "@angular/core";
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { TrafficComponent } from "./traffic/traffic.component";

@NgModule({
  declarations: [ServerStatusComponent, TicketsComponent, TrafficComponent],
  exports: [ServerStatusComponent, TicketsComponent, TrafficComponent],
})
export class DashboardModule {}