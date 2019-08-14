import React from 'react';
import { User } from '../../types/user';

interface IProps {
  user: User;
}

const Attendee = ({ user }: IProps) => {
  return (
    <div className="flex flex-row items-center">
      <img
        className="rounded-full h-16 w-16 object-cover"
        src={user.profile.avatar}
        alt="avatar"
      />
      <p className="ml-4 text-lg font-medium">{user.name}</p>
    </div>
  );
};

export default Attendee;
