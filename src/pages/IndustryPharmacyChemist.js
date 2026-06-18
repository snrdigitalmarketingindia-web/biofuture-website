import React from 'react';
import IndustryPage from './IndustryPage';
import { INDUSTRIES } from '../data/industryData';

export default function IndustryPharmacyChemist() {
  return <IndustryPage data={INDUSTRIES.pharmacyChemist} />;
}
