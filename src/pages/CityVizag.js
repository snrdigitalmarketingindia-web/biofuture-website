import React from 'react';
import CityPage from './CityPage';
import { CITIES } from '../data/cityData';

export default function CityVizag() {
  return <CityPage data={CITIES.vizag} />;
}
