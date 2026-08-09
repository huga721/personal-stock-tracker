import React, { useState } from 'react';
import { Card } from '../components/Card.tsx';
import "./portfolio.css"
import { Dashboard } from '../components/dashboard/Dashboard.tsx';
import { ImportModal } from '../components/import/ImportModal.tsx';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="portfolio">
      {/*<div className="stock-cards">*/}
      {/*  <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>*/}
      {/*  <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>*/}
      {/*  <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>*/}
      {/*  <Card topText="Invested" middleText="110000" bottomText="PLN Deposited"></Card>*/}
      {/*</div>*/}
      {/*<Dashboard/>*/}

      <Dashboard/>
    </div>
  )
}