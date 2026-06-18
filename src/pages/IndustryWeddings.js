import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustryWeddings() {
  return <IndustryPage data={INDUSTRIES.weddings} />;
}
