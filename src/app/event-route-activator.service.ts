import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { EventService } from './shared/event.service';
import { CreateEventComponent } from './create-event.component';


@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService:EventService, private route:Router)
    {

    }
    canActivate(route:ActivatedRouteSnapshot)
    {
      const eventExists = !! this.eventService.getEvent(+route.params['id'])
      if (!eventExists) 
      {
          this.route.navigate(['/404'])
      }
      return eventExists
    }
}