import React, {FunctionComponent, useCallback, useMemo} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {
  Employee,
  Truck,
  Checkmark,
  Ticket,
  Pill,
  Back,
  User,
  IconWithBackground, Cancel,
} from "../../../assets/icons";
import {Dropzone} from "../../dropzone/Dropzone";
import DocumentsBlue from "../../../assets/icons/documents-blue.svg";
import { useNavigate } from 'react-router-dom';
import {useWhiteBackground} from "../../../utils";

export type StepFields = ({
  name: string,
  value: any,
  type: string,
  placeholder?: string,
  required?: boolean,
  key: string,
  fields?: StepFields,
} | null)[][];


export interface FormConstructor {
  steps: {
    stepId: string,
    title: string,
    icon: FunctionComponent<any>,
    fields: StepFields,
  }[]
}

const formConstructor: FormConstructor = {
  steps: [
    {
      stepId: 'driver',
      title: 'Driver information',
      icon: User,
      fields: [
        [
          {
            name: 'Driver name',
            type: 'text',
            placeholder: 'Enter driver name',
            value: '',
            required: true,
            key: 'driver_name',
          },
          {
            name: 'Driver password',
            type: 'password',
            placeholder: 'Enter driver password',
            value: '',
            required: true,
            key: 'driver_password',
          },
        ],
      ],
    },
    {
      stepId: 'truck',
      title: 'Truck',
      icon: Truck,
      fields: [
        [
          {
            name: 'Truck registration',
            type: 'file',
            placeholder: 'Add a truck registration',
            value: '',
            required: false,
            key: 'truck_registration_file',
            fields: [
              [
                {
                  name: 'License expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'license_expiration',
                },
                {
                  name: 'VIN',
                  type: 'text',
                  placeholder: 'Enter VIN',
                  value: '',
                  required: true,
                  key: 'vin',
                },
              ],
              [
                {
                  name: 'Year',
                  type: 'string',
                  placeholder: 'Enter year',
                  value: '',
                  required: true,
                  key: 'year',
                },
                {
                  name: 'Number',
                  type: 'string',
                  placeholder: 'Enter number',
                  value: '',
                  required: true,
                  key: 'truck_number',
                },
              ]
            ]
          },
        ],
        [
          {
            name: 'Truck inspection',
            type: 'file',
            placeholder: 'Add truck inspection',
            value: '',
            required: false,
            key: 'truck_inspection_file',
            fields: [
              [
                {
                  name: 'Truck inspection expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'truck_inspection_expiration',
                },
                null,
              ],
            ]
          },
        ],
      ],
    },
    {
      stepId: 'insurance',
      title: 'Insurance',
      icon: Employee,
      fields: [
        [
          {
            name: 'Physical damage',
            type: 'file',
            placeholder: 'Add physical damage',
            value: '',
            required: false,
            key: 'phycisal_damage_file',
            fields: [
              [
                {
                  name: 'Physical damage expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'physical_damage_expiration',
                },
                null,
              ],
            ]
          },
        ],
      ],
    },
    {
      stepId: 'permit',
      title: 'Permit',
      icon: Ticket,
      fields: [
        [
          {
            name: 'NY',
            type: 'file',
            placeholder: 'Add NY permit',
            value: '',
            required: false,
            key: 'NY_file',
            fields: [
              [
                {
                  name: 'Expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'NY',
                },
                null,
              ],
            ]
          },
        ],
        [
          {
            name: 'KY',
            type: 'file',
            placeholder: 'Add KY permit',
            value: '',
            required: false,
            key: 'KY_file',
            fields: [
              [
                {
                  name: 'Expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'KY',
                },
                null,
              ],
            ]
          },
        ],
        [
          {
            name: 'NM',
            type: 'file',
            placeholder: 'Add NM permit',
            value: '',
            required: false,
            key: 'NM_file',
            fields: [
              [
                {
                  name: 'Expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'NM',
                },
                null,
              ],
            ]
          },
        ],
        [
          {
            name: 'OR',
            type: 'file',
            placeholder: 'Add OR permit',
            value: '',
            required: false,
            key: 'OR_file',
            fields: [
              [
                {
                  name: 'Expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'OR',
                },
                null,
              ],
            ]
          },
        ],
      ],
    },
    {
      stepId: 'agreements',
      title: 'Agreements',
      icon: Checkmark,
      fields: [
        [
          {
            name: 'Leaser and borrower',
            type: 'file',
            placeholder: 'Add a leaser and borrower agreement',
            value: '',
            required: false,
            key: 'leaser_and_borrower_file',
          },
        ],
        [
          {
            name: 'Driver and company',
            type: 'file',
            placeholder: 'Add a driver and company agreement',
            value: '',
            required: false,
            key: 'driver_and_company_file',
          },
        ],
      ],
    },
    {
      stepId: 'drug_test_status',
      title: 'Drug test status',
      icon: Pill,
      fields: [
        [
          {
            name: 'Drug test',
            type: 'file',
            placeholder: 'Add drug test',
            value: '',
            required: false,
            key: 'random_drug_test_exparation_file',
            fields: [
              [
                {
                  name: 'Drug Test Expiration',
                  type: 'datetime-local',
                  placeholder: 'Date',
                  value: '',
                  required: true,
                  key: 'random_drug_test_exparation',
                },
                null,
              ],
            ]
          },
        ],
      ],
    }
  ]
}

export interface TruckFormProps {
  handleSave: (values: any, files: any) => void;
  title?: string;
  isLoading?: boolean;
  initialValues?: any;
  isEditing?: boolean;
  initialFiles?: any;
  customForm?: FormConstructor;
  activeStep?: string;
  withoutSteps?: boolean;
}

const TruckForm: React.FC<TruckFormProps> = (props) => {
  useWhiteBackground();
  const [activeStep, setActiveStep] = React.useState(props.activeStep || 'driver');
  const [values, setValues] = React.useState<any>(props.initialValues || { }); // TODO: typing
  const [files, setFiles] = React.useState<any>(props.initialFiles || { }); // TODO: typing

  const form = useMemo(() => props.customForm || formConstructor, [props.customForm]);

  const navigate = useNavigate();

  const handleSetActiveStep = useCallback((stepId: string) => () => setActiveStep(stepId), [setActiveStep]);

  // @ts-ignore
  const activeStepFields = useMemo<StepFields>(() => form.steps.find(step => step.stepId === activeStep)?.fields, [activeStep]);
  const nextActiveField = useMemo(() => form.steps.findIndex(step => step.stepId === activeStep) + 1, [activeStep]);

  function renderField(field: any) {
    if (!field) return <Col />

    if (field.type === 'file' && files[field.key]) {
      const file: File = files[field.key];
      return (
        <>
          <Col style={{ marginBottom: 16 }} xl key={field.key} className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <IconWithBackground size={64}>
                <img
                  src={DocumentsBlue}
                  style={{ height: 32, width: 32 }}
                  alt="Documents"
                />
              </IconWithBackground>
              <p style={{ marginLeft: 16 }} className="mb-0 body-l">{file.name || field.name}</p>
            </div>
            <div onClick={() => setFiles({ ...files, [field.key]: undefined })} className="pointer">
              <IconWithBackground size={52}>
                <Cancel />
              </IconWithBackground>
            </div>
          </Col>
          {field.fields?.map((fields: any, idx: any) => (
            <Form.Group key={idx} className="mb-3">
              <Row>
                {fields.map((field: any) => renderField(field))}
              </Row>
            </Form.Group>
          ))}
        </>
      )
    }

    if (field.type === 'file') {
      return (
        <Col xl key={field.key}>
          <Dropzone placeholder={field.placeholder} onDrop={([file]) => setFiles({ ...files, [field.key]: file })} />
        </Col>
      )
    }

    return (
      <Col xl key={field.key}>
        <Form.Label>{field.name}</Form.Label>
        <Form.Control onChange={e => setValues({ ...values, [field.key]: e.target.value })} value={values[field.key] || ''} type={field.type} placeholder={field.placeholder} />
      </Col>
    )
  }

  return (
    <div>
      <Container className="d-flex pt-4 flex-row justify-content-between align-items-center mb40px">
        <span onClick={() => navigate(-1)} className="d-flex flex-row align-items-center pointer">
          <Back className="mr8px" />
          <h2 className="mb-0">{props.title}</h2>
        </span>
        {!props.withoutSteps && <p className="mb-0 body-l">Step {form.steps.findIndex((step) => step.stepId === activeStep) + 1}/{form.steps.length}</p>}
      </Container>
      <Container className="d-flex truck-form-container">
        {!props.withoutSteps && (
          <div className="steps">
            {form.steps.map(step => (
              <div onClick={handleSetActiveStep(step.stepId)} key={step.stepId} className={`step ${activeStep === step.stepId ? 'active' : ''}`}>
                <div className="step-icon">
                  <step.icon />
                </div>
                <div className="step-title">{step.title}</div>
              </div>
            ))}
          </div>
          )}
        <Container>
          {activeStepFields.map((fields, idx) => (
              <Form.Group key={idx} className="mb-3">
                <Row>
                  {fields.map((field) => renderField(field))}
                </Row>
              </Form.Group>
            ))}
            {nextActiveField !== form.steps.length ? (
              <Button className="btn-medium float-end" variant="primary" onClick={() => setActiveStep(form.steps[nextActiveField].stepId)}>Next</Button>
            ) : (
              <Button disabled={props.isLoading} className="btn-medium float-end" variant="primary" onClick={() => props.handleSave(values, files)}>Save</Button>
            )}
        </Container>
      </Container>
    </div>
  );
}

export default TruckForm;