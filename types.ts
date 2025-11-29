export interface LegislativeProject {
  id: string;
  title: string;
  submissionDate: string; // ISO Date string YYYY-MM-DD
  category: string;
  description: string;
  status: 'frozen' | 'processing' | 'rejected' | 'signed';
  iconName: 'shield' | 'health' | 'scale' | 'money' | 'file' | 'plane' | 'users' | 'sprout' | 'zap' | 'flag' | 'cpu' | 'shield-alert' | 'user-check' | 'anchor' | 'coins' | 'plug' | 'car' | 'stethoscope';
  url: string;
  longDescription?: string;
  impact?: string;
}

export interface TimeDuration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}