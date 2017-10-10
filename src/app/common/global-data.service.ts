import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { INotification } from './notification/shared/notification.model';

@Injectable()
export class GlobalDataService {
  private showNotification = new Subject<INotification>();
  private loader = new Subject<boolean>();
  private showLoginPopup = new Subject<boolean>();
  private autoLoginSubject = new Subject<boolean>();

  constructor() {
  }

  public setUserToken(token: string): void {
    sessionStorage.setItem('userToken', token);
  }

  public getUserToken(): string {
    return sessionStorage.getItem('userToken') ? sessionStorage.getItem('userToken') : null;
  }

  public showLoader(): void {
    this.loader.next(true);
  }

  public hideLoader(): void {
    this.loader.next(false);
  }

  public getLoaderState(): Observable<boolean> {
    return this.loader.asObservable();
  }

  public getNotification(): Observable<INotification> {
    return this.showNotification.asObservable();
  }

  public setNotification(notification: INotification) {
    return this.showNotification.next(notification);
  }

  public openLoginPopup(): void {
    if (!this.getUserToken()) {
      this.showLoginPopup.next(true);
      return;
    }
    this.showLoginPopup.next(false);
  }

  public getLoginPopupState(): Observable<boolean> {
    return this.showLoginPopup.asObservable();
  }

  public autoLogin(): void {
    this.autoLoginSubject.next(true);
  }

  public getLoginState(): Observable<boolean> {
    return this.autoLoginSubject.asObservable();
  }
}
