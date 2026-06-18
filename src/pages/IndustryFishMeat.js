import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustryFishMeat() {
  return <IndustryPage data={INDUSTRIES.fishMeat} />;
}
