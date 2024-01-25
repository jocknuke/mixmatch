import { Profile } from "./profile";

export interface Activity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date | null;
    city: string;
    venue: string;
    hostUsername?: string;
    isCancelled?: boolean;
    isGoing?: boolean;
    isHost?: boolean
    attendees: Profile[]
    host?: Profile;
    price:number;
    maxAttendees:number;

}

export class ActivityFormValues
  {
    id?: string = undefined;
    title: string = '';
    category: string = '';
    description: string = '';
    date: Date | null = null;
    city: string = '';
    venue: string = '';
    price: number =0;
    maxAttendees:number =0;

	  constructor(activity?: ActivityFormValues) {
      if (activity) {
        this.id = activity.id;
        this.title = activity.title;
        this.category = activity.category;
        this.description = activity.description;
        this.date = activity.date;
        this.venue = activity.venue;
        this.city = activity.city;
        this.price=activity.price;
        this.maxAttendees=activity.maxAttendees;
      }
    }

  }

  export class CreateCheckoutSessionRequest
  
  {
  priceId : string ='';
		
  successUrl : string='';
  
  failureUrl : string='';

}

export class CreateCheckoutSessionResult
  
{
priceId : string ='';
  
session_Url : string='';

}

  export class Activity implements Activity {
    constructor(init?: ActivityFormValues) {
      Object.assign(this, init);
    }
  }
