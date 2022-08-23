import React, {useCallback, useEffect} from 'react';
import TruckForm from "../../features/truck/components/TruckForm";
import {
  fetchTrucks,
  useGetTruckByVinCompanyTruckGetTruckByVinGetQuery,
  useUpdateTruckCompanyTruckUpdateTruckPutMutation
} from "../../store/api";
import {keysToCamel, removeEmpty} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

function EditTruck() {
  const { vin } = useParams();
  // @ts-ignore
  const { data } = useGetTruckByVinCompanyTruckGetTruckByVinGetQuery({ vin });
  const [updateTruck, { isLoading, isSuccess }] = useUpdateTruckCompanyTruckUpdateTruckPutMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdateTruck = useCallback((values: any, files: any) => {
    let data = new FormData();
    Object.entries(files).forEach(([key, file]: any) => {
      console.log(file, file instanceof File);
      if (file instanceof File) {
        data.append(key, file);
      }
    });
    updateTruck({ ...keysToCamel(removeEmpty(values)), bodyUpdateTruckCompanyTruckUpdateTruckPut: data });
  }, [updateTruck]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTrucks() as any);
      navigate(-1);
    }
  }, [isSuccess]);

  if (!data) return null;
  return (
    <TruckForm isEditing={true} initialValues={data} initialFiles={data} isLoading={isLoading} title="Edit a truck" handleSave={handleUpdateTruck} />
  );
}

export default EditTruck;
