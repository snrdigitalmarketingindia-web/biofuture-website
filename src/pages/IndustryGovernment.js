import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustryGovernment() {
  return <IndustryPage data={INDUSTRIES.government} />;
}
