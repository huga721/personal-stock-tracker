import React, { useState } from 'react';
import "./dashboard.css"
import "../common/types.ts"
import { ImportModal } from '../import/ImportModal.tsx';

export function Dashboard() {
  const tabs: AccountDashboardTypes[] = ['All', 'Normal', 'IKE', 'IKZE'];
  const [activeTab, setActiveTab] = useState<AccountDashboardTypes>('All');

  const rows: string[] = ['Company', 'Account', 'Shares', 'Avg price', 'Current', 'Profit / Loss']

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <p className="dashboard-header-text">Positions</p>
        <button className="dashboard-header-button" onClick={() => setModalOpen(true)}>
          Import files
        </button>
        {isModalOpen && (<ImportModal onClose={() => setModalOpen(false)}/>)}
      </div>
      <div className="dashboard-tabs">
        {tabs.map(tab => (
          <div
            className={`dashboard-tabs-element ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}>
            {tab}
          </div>
        ))}
      </div>
      <div>
        <table>
          <thead>
            <tr className="dashboard-table-row">
              {rows.map(row => (
                <th key={row}>{row.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}