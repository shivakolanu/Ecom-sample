import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { Alert, AlertType } from './alert.model';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    // enable subscribing to alerts observable
    onAlert(): Observable<Alert> {
        return this.subject.asObservable();
    }

    // convenience methods
    success(message: string, keepAfterRouteChange?: boolean) {
        this.alert(new Alert({ message, type: AlertType.Success, keepAfterRouteChange }));
    }

    error(message: string) {
        this.alert(new Alert({ message, type: AlertType.Error }));
    }

    info(message: string) {
        this.alert(new Alert({ message, type: AlertType.Info}));
    }

    warn(message: string) {
        this.alert(new Alert({ message, type: AlertType.Warning}));
    }

    // main alert method    
    alert(alert: Alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;  
        this.subject.next(alert);
    }

    // clear alerts
    clear() {
        this.subject.next(new Alert());
    }
}