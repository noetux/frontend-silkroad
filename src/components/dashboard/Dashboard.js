import React from 'react';
import { temporalDB } from '../../temporalData/teporalDB';
import Sales from '../Sales/Sales';

export default function Dashboard() {
  return (
    <>
      <h1 className="text-center my-2">New Offers</h1>
      <Sales salesProducts={temporalDB} />
    </>
  );
}