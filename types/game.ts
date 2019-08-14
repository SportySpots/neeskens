import { DateTime, UUID } from './utils';
import { User } from './user';
import { Sport } from './sport';
import { Spot } from './spot';

export interface Game {
  uuid: UUID;
  attendees: any[];
  capacity: number;
  chatkit_room_id: number;
  created_at: DateTime;
  deleted_at: DateTime;
  description: string;
  end_time: DateTime;
  end_timezone: string;
  id: number;
  invite_mode: string;
  is_featured: boolean;
  is_listed: boolean;
  is_shareable: boolean;
  modified_at: DateTime;
  name: string
  organizer: User;
  rsvp_close_time: DateTime;
  rsvp_closed: boolean;
  rsvp_open_time: DateTime;
  share_link: string;
  show_remaining: boolean;
  sport: Sport;
  spot: Spot;
  start_time: DateTime;
  start_timezone: string;
  status: string;
}
