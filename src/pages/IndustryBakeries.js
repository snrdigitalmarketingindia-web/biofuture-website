import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustryBakeries() {
  return <IndustryPage data={INDUSTRIES.bakeries} />;
}
