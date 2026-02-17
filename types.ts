import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export type LanguageOption = 'English (EFL)' | 'German' | 'French' | 'Spanish' | 'Mandarin';
export type StudentGroup = 'Teens' | 'Adults' | 'Both';