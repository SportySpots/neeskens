import { UUID } from './utils';

export interface UserProfile {
  id: string;
  uuid: UUID;
  avatar: string;
}

export interface User {
  id: string;
  uuid: UUID;
  name: string;
  profile: UserProfile;
}
