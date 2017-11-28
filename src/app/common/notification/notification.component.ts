import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { INotification, Type } from './shared/notification.model';
import { Subscription } from 'rxjs/Subscription';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})

export class NotificationComponent {
  public options = {
    timeOut: 3000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: true,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };
  private notificationSubscription: Subscription;

  constructor(private notificationService: NotificationsService, private globalDataService: GlobalDataService) {
    this.notificationSubscription = this.globalDataService.getNotification().subscribe(notification => {
      this.create(notification);
    });
  }

  public create(notification: INotification) {
    switch (notification.type) {
      case Type.SUCCESS:
        this.notificationService.success(notification.title, notification.content);
        break;
      case Type.ALERT:
        this.notificationService.alert(notification.title, notification.content);
        break;
      case Type.ERROR:
        this.notificationService.error(notification.title, notification.content);
        break;
      case Type.INFO:
        this.notificationService.info(notification.title, notification.content);
        break;
      case Type.BARE:
        this.notificationService.bare(notification.title, notification.content);
        break;
    }
  }

}
