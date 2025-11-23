export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export enum ViewState {
  HOME = 'HOME',
  HISTORY = 'HISTORY',
  STRATEGIC = 'STRATEGIC',
  HEROES = 'HEROES',
  GALLERY = 'GALLERY',
  MEMORIAL = 'MEMORIAL',
  GUIDE = 'GUIDE'
}