import React from 'react';
import { Card } from '../components/Card.tsx';
import "./portfolio.css"

export default function Portfolio() {
  return (
    <>
      <h3>Stocks</h3>
      <div className="stock-cards">
        <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>
        <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>
        <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>
        <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>
      </div>
    </>
  )
}