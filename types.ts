import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon?: LucideIcon;
  image?: string; // For Dev mode large cards
  date?: string;
  publication?: string;
}

export interface SkillElement {
  symbol: string;
  name: string;
  number: number;
  category: string; // Used for color coding
  color: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: LucideIcon;
  hash?: string; // For git commit style
  tag?: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'physical' | 'digital';
}