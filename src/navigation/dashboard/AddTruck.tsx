import React, {useCallback, useEffect} from 'react';
import TruckForm from "../../features/truck/components/TruckForm";
import { fetchTrucks, useCreateNewTruckCompanyTruckCreateNewTruckPostMutation } from "../../store/api";
import {keysToCamel, removeEmpty} from "../../utils";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

function AddTruck() {
  const [addTruck, { isLoading, isSuccess }] = useCreateNewTruckCompanyTruckCreateNewTruckPostMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddTruck = useCallback((values: any, files: any) => {
    let data = new FormData();
    Object.entries(files).forEach(([key, file]: any) => {
      if (file) {
        data.append(key, file);
      }
    });
    addTruck({ ...keysToCamel(removeEmpty(values)), bodyCreateNewTruckCompanyTruckCreateNewTruckPost: data });
  }, [addTruck]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTrucks() as any);
      navigate(-1);
    }
  }, [isSuccess]);

  return (
    <TruckForm vinIsRequired isLoading={isLoading} title="Adding a truck" handleSave={handleAddTruck} />
  );
}

export default AddTruck;
