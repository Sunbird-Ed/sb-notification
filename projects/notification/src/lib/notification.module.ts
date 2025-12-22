import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationCardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    NotificationComponent,
    NotificationCardComponent
  ]
})
export class SbNotificationModule {
  forRoot(sbNotificationService): ModuleWithProviders<any> {
    return {
      ngModule: sbNotificationService,
      providers: [
        { provide: 'SB_NOTIFICATION_SERVICE', useClass: sbNotificationService }
      ]
    };
  }
}
