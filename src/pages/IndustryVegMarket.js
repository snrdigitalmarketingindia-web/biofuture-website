import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustryVegMarket() {
  return <IndustryPage data={INDUSTRIES.vegMarket} />;
}
