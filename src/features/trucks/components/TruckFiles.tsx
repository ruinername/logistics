import React, {useMemo} from 'react';
import { apiEndpoint, Truck } from "../../../store/api";
import {DocumentsBlue, Download, IconWithBackground} from "../../../assets/icons";
import { DateTime } from 'luxon';
import { Container } from "react-bootstrap";

export interface TruckFilesProps {
  truck: Truck;
}

export const truckFiles = {
  'truck_registration_file': {
    name: 'Truck registration',
    expiration: null,
  },
  'truck_inspection_file': {
    name: 'Truck inspection',
    expiration: 'truck_inspection_expiration',
  },
  'phycisal_damage_file': {
    name: 'Physical damage',
    expiration: 'physical_damage_expiration',
  },
  'NY_file': {
    name: 'NY',
    expiration: 'NY',
  },
  'KY_file': {
    name: 'KY',
    expiration: 'KY',
  },
  'NM_file': {
    name: 'NM',
    expiration: 'NM',
  },
  'OR_file': {
    name: 'OR',
    expiration: 'OR',
  },
  'leaser_and_borrower_file': {
    name: 'Leaser and borrower',
    expiration: null,
  },
  'driver_and_company_file': {
    name: 'Driver and company',
    expiration: null,
  },
  'random_drug_test_exparation_file': {
    name: 'Drug test',
    expiration: 'random_drug_test_exparation',
  }
};

interface Tab {key: string, name: string, files: Partial<keyof typeof truckFiles>[]}

const tabs: Tab[] = [
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
  const [activeTab, setActiveTab] = React.useState<string>('truck');

  const activeTabFiles = useMemo(() => (tabs.find(tab => tab.key === activeTab) as Tab).files.filter(file => truck[file]), [activeTab, truck]);

  return (
    <>
      <div className="files card-padding-h overflow-scroll d-flex flex-row">
        {tabs.map(({ key, name, files }) => (
          <div onClick={() => setActiveTab(key)} key={key} className={`file-tab ${activeTab === key ? 'active' : ''}`}>
            <h5 className="label">
              {name} {files.reduce((acc, value) => truck[value] ? acc + 1 : acc, 0)}/{files.length}
            </h5>
          </div>
        ))}
      </div>
      <div className="files-preview card-padding-h">
        {activeTabFiles.length ? activeTabFiles.map((file, idx, arr) => {
          return (
            <div key={file} className={`file ${idx !== arr.length - 1 ? 'mb40px' : ''}`}>
              <div className="d-flex flex-row">
                <IconWithBackground>
                  <DocumentsBlue />
                </IconWithBackground>
                <Container className="cont--fluid">
                  <p className="mb-0 ml16px body-l">
                    {truckFiles[file].name}
                  </p>
                  <p className="mb-0 ml16px body-m text-muted">
                    {/* @ts-ignore */}
                    {(truckFiles[file].expiration !== null && truck[truckFiles[file].expiration]) ? DateTime.fromISO(truck[file] as string).toFormat('MM / dd / yyyy') : null}
                  </p>
                </Container>
                <a target="_blank" href={`${apiEndpoint}company_truck/get_truck_file/?vin=${truck.vin}&filename=${file}`}>
                  <Download />
                </a>
              </div>
              {file === 'truck_registration_file' && (
                <div className="mt18px d-flex flex-row">
                  <div className="d-flex flex-row mr32px">
                    <p className="mb-0 body-m mr4px text-muted">
                      VIN
                    </p>
                    <p className="mb-0 body-m">
                      {truck.vin}
                    </p>
                  </div>
                  <div className="d-flex flex-row mr32px">
                    <p className="mb-0 body-m mr4px text-muted">
                      Number
                    </p>
                    <p className="mb-0 body-m">
                      {truck.truck_number}
                    </p>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="mb-0 body-m mr4px">
                      {truck.year}
                    </p>
                    <p className="mb-0 body-m text-muted">
                      Year
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        }
        ) : <p className="mb-0 body-l text-neutral">No documents found</p>}
      </div>
    </>
  );
}

export default TruckFiles;