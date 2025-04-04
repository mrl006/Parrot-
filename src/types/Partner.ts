
import { ReactNode } from 'react';

export interface Partner {
  name: string;
  category: string;
  categoryTR?: string;
  icon?: ReactNode; // Made optional since we're not using icons anymore
  url: string;
}
