import type { ReactNode } from 'react';

export type Branch = 'Riyadh' | 'Jeddah';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  branch: Branch;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  doctorIds: string[];
}

// Fix: Add MessageSender to define the sender of a message.
export enum MessageSender {
  Bot = 'bot',
  User = 'user',
}

// Fix: Add Message interface to define the structure of a chat message.
export interface Message {
  sender: MessageSender;
  text?: string;
  component?: ReactNode;
}

// Fix: Add Option interface to define the structure of a selectable option.
export interface Option {
  text: string;
  payload: string;
}
