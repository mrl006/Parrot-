
import { ReactNode } from 'react';

export interface Partner {
  name: string;
  category: string;
  categoryTR?: string;
  icon: ReactNode;
  url: string;
}
