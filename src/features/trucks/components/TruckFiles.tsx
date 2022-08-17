import React from 'react';
import { Truck } from "../../../store/api";

export interface TruckFilesProps {
  truck: Truck;
}

const truckFiles = {
  'truck_registration_file': 'Truck registration',
  'truck_inspection_file': 'Truck inspection',
  'phycisal_damage_file': 'Physical damage',
  'NY_file': 'NY',
  'KY_file': 'KY',
  'NM_file': 'NM',
  'OR_file': 'OR',
  'leaser_and_borrower_file': 'Leaser and borrower',
  'driver_and_company_file': 'Driver and company',
  'random_drug_test_exparation_file': 'Drug test'
};

const tabs = [
  {
    key: 'truck',
    name: 'Truck',
    files: ['truck_registration_file', 'truck_inspection_file'],
  },
  {
    key: 'insurance',
    name: 'Insurance',
    files: ['phycisal_damage_file'],
  },
  {
    key: 'permit',
    name: 'Permit',
    files: ['NY_file', 'KY_file', 'NM_file', 'OR_file'],
  },
  {
    key: 'aggreems',
    name: 'Aggreems',
    files: ['leaser_and_borrower_file', 'driver_and_company_file'],
  },
  {
    key: 'drug',
    name: 'Drug test status',
    files: ['random_drug_test_exparation_file'],
  }
];

const TruckFiles: React.FC<TruckFilesProps> = ({ truck }) => {
  const [activeTab, setActiveTab] = React.useState('truck');

  return (
    <div className="files card-padding-h overflow-scroll d-flex flex-row">
      {tabs.map(({ key, name, files }) => (
        <div onClick={() => setActiveTab(key)} key={key} className={`file-tab ${activeTab === key ? 'active' : ''}`}>
          <h5 className="label">
            {name}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default TruckFiles;