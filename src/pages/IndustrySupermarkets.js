import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustrySupermarkets() {
  return <IndustryPage data={INDUSTRIES.supermarkets} />;
}
