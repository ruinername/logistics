import React, {FunctionComponent, useCallback, useEffect} from 'react';
import {
  User,
} from "../../assets/icons";
import {useNavigate} from 'react-router-dom';
import {
  fetchTrucks, fetchUser,
  useGetUserCompanyUserGetQuery,
  useUpdateCompanyCompanyUpdateCompanyPutMutation,
} from "../../store/api";
import {keysToCamel, removeEmpty} from "../../utils";
import TruckForm from "../../features/truck/components/TruckForm";
import {useDispatch} from "react-redux";

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
      stepId: 'general',
      title: 'General',
      icon: User,
      fields: [
        [
          {
            name: 'Company insurance',
            type: 'file',
            placeholder: 'Add company insurance',
            value: '',
            required: true,
            key: 'company_insurance_file',
          },
        ],
        [
          {
            name: 'Commercial general liability',
            type: 'datetime-local',
            placeholder: 'Enter general liability',
            value: '',
            required: true,
            key: 'commercial_general_liability',
          },
          {
            name: 'Automobile liability',
            type: 'datetime-local',
            placeholder: 'Enter automobile liability',
            value: '',
            required: true,
            key: 'automobile_liability',
          },
        ],
        [
          {
            name: 'Workers compensation',
            type: 'datetime-local',
            placeholder: 'Enter workers compensation',
            value: '',
            required: true,
            key: 'workers_compensation',
          },
          {
            name: 'Comp/Collision',
            type: 'datetime-local',
            placeholder: 'Enter comp/collision',
            value: '',
            required: true,
            key: 'comp_collision',
          },
        ],
        [
          {
            name: 'Cargo',
            type: 'datetime-local',
            placeholder: 'Enter cargo',
            value: '',
            required: true,
            key: 'cargo',
          },
          null,
        ],
      ],
    },
  ]
}

const CompanySettings: React.FC = () => {
  const { data } = useGetUserCompanyUserGetQuery();
  const [updateCompany, { isSuccess, isLoading }] = useUpdateCompanyCompanyUpdateCompanyPutMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdateCompany = useCallback((values: any, files: any) => {
    let data = new FormData();
    Object.entries(files).forEach(([key, file]: any) => {
      if (file instanceof File) {
        data.append(key, file);
      }
    });
    updateCompany({ ...keysToCamel(removeEmpty(values)), bodyCreateNewTruckCompanyTruckCreateNewTruckPost: data });
  }, [updateCompany]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchUser() as any);
      navigate('/dashboard');
    }
  }, [isSuccess]);

  if (!data) return null;

  return (
    <TruckForm
      withoutSteps
      activeStep='general'
      customForm={formConstructor}
      isEditing
      isLoading={isLoading}
      handleSave={handleUpdateCompany}
      title="Edit company information"
      initialFiles={data}
      initialValues={data}
    />
  );
}

export default CompanySettings;