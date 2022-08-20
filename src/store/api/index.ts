import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiEndpoint = 'http://0.0.0.0:8000/';

export const injectedRtkApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiEndpoint,
    credentials: 'include',
  }),
  tagTypes: ['Trucks'],
      endpoints: (build) => ({
        signUpCompanySignUpPost: build.mutation<
          SignUpCompanySignUpPostApiResponse,
          SignUpCompanySignUpPostApiArg
          >({
          query: (queryArg) => ({
            url: `/company/sign-up/`,
            method: "POST",
            body: queryArg.bodySignUpCompanySignUpPost,
            params: {
              email: queryArg.email,
              username: queryArg.username,
              role: queryArg.role,
              password: queryArg.password,
              captcha: queryArg.captcha,
            },
          }),
        }),
        signInCompanySignInPost: build.mutation<
          SignInCompanySignInPostApiResponse,
          SignInCompanySignInPostApiArg
          >({
          query: (queryArg) => ({
            url: `/company/sign-in/`,
            method: "POST",
            params: { mail: queryArg.mail, password: queryArg.password },
          }),
        }),
        getUserCompanyUserGet: build.query<
          GetUserCompanyUserGetApiResponse,
          GetUserCompanyUserGetApiArg
          >({
          query: () => ({ url: `/company/user/` }),
        }),
        updateCompanyCompanyUpdateCompanyPut: build.mutation<
          UpdateCompanyCompanyUpdateCompanyPutApiResponse,
          UpdateCompanyCompanyUpdateCompanyPutApiArg
          >({
          query: (queryArg) => ({
            url: `/company/update_company/`,
            method: "PUT",
            body: queryArg.bodyUpdateCompanyCompanyUpdateCompanyPut,
            params: {
              company_insurance_file: queryArg.companyInsuranceFile,
              commercial_general_liability: queryArg.commercialGeneralLiability,
              automobile_liability: queryArg.automobileLiability,
              workers_compensation: queryArg.workersCompensation,
              comp_collision: queryArg.compCollision,
              cargo: queryArg.cargo,
            },
          }),
        }),
        logOutCompanyLogOutDelete: build.mutation<
          LogOutCompanyLogOutDeleteApiResponse,
          LogOutCompanyLogOutDeleteApiArg
          >({
          query: () => ({ url: `/company/log-out/`, method: "DELETE" }),
        }),
        createNewTruckCompanyTruckCreateNewTruckPost: build.mutation<
          CreateNewTruckCompanyTruckCreateNewTruckPostApiResponse,
          CreateNewTruckCompanyTruckCreateNewTruckPostApiArg
          >({
          query: (queryArg) => ({
            url: `/company_truck/create_new_truck/`,
            method: "POST",
            body: queryArg.bodyCreateNewTruckCompanyTruckCreateNewTruckPost,
            params: {
              company_email: queryArg.companyEmail,
              truck_number: queryArg.truckNumber,
              truck_registration_file: queryArg.truckRegistrationFile,
              vin: queryArg.vin,
              license_expiration: queryArg.licenseExpiration,
              year: queryArg.year,
              truck_inspection_file: queryArg.truckInspectionFile,
              truck_inspection_expiration: queryArg.truckInspectionExpiration,
              phycisal_damage_file: queryArg.phycisalDamageFile,
              physical_damage_expiration: queryArg.physicalDamageExpiration,
              NY: queryArg.ny,
              NY_file: queryArg.nyFile,
              KY: queryArg.ky,
              KY_file: queryArg.kyFile,
              NM: queryArg.nm,
              NM_file: queryArg.nmFile,
              OR: queryArg.or,
              OR_file: queryArg.orFile,
              leaser_and_borrower_file: queryArg.leaserAndBorrowerFile,
              driver_and_company_file: queryArg.driverAndCompanyFile,
              random_drug_test_exparation: queryArg.randomDrugTestExparation,
              random_drug_test_exparation_file:
              queryArg.randomDrugTestExparationFile,
              driver_password: queryArg.driverPassword,
              driver_name: queryArg.driverName,
            },
          }),
          invalidatesTags: (result, error, arg) => [{ type: 'Trucks', id: 'LIST' }],
        }),
        updateTruckCompanyTruckUpdateTruckPut: build.mutation<
          UpdateTruckCompanyTruckUpdateTruckPutApiResponse,
          UpdateTruckCompanyTruckUpdateTruckPutApiArg
          >({
          query: (queryArg) => ({
            url: `/company_truck/update_truck/`,
            method: "PUT",
            body: queryArg.bodyUpdateTruckCompanyTruckUpdateTruckPut,
            params: {
              company_email: queryArg.companyEmail,
              truck_number: queryArg.truckNumber,
              truck_registration_file: queryArg.truckRegistrationFile,
              vin: queryArg.vin,
              license_expiration: queryArg.licenseExpiration,
              year: queryArg.year,
              truck_inspection_file: queryArg.truckInspectionFile,
              truck_inspection_expiration: queryArg.truckInspectionExpiration,
              phycisal_damage_file: queryArg.phycisalDamageFile,
              physical_damage_expiration: queryArg.physicalDamageExpiration,
              NY: queryArg.ny,
              NY_file: queryArg.nyFile,
              KY: queryArg.ky,
              KY_file: queryArg.kyFile,
              NM: queryArg.nm,
              NM_file: queryArg.nmFile,
              OR: queryArg.or,
              OR_file: queryArg.orFile,
              leaser_and_borrower_file: queryArg.leaserAndBorrowerFile,
              driver_and_company_file: queryArg.driverAndCompanyFile,
              random_drug_test_exparation: queryArg.randomDrugTestExparation,
              random_drug_test_exparation_file:
              queryArg.randomDrugTestExparationFile,
              driver_password: queryArg.driverPassword,
              driver_name: queryArg.driverName,
            },
          }),
          invalidatesTags: (result, error, arg) => [{ type: 'Trucks', id: 1 }],
        }),
        deleteTruckByVinCompanyTruckDeleteTruckByVinDelete: build.mutation<
          DeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteApiResponse,
          DeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteApiArg
          >({
          query: (queryArg) => ({
            url: `/company_truck/delete_truck_by_vin/`,
            method: "DELETE",
            params: { vin: queryArg.vin },
          }),
          invalidatesTags: (result, error, arg) => [{ type: 'Trucks', id: 'LIST' }],
        }),
        getTrucksCompanyTruckGetTrucksGet: build.query<
          GetTrucksCompanyTruckGetTrucksGetApiResponse,
          GetTrucksCompanyTruckGetTrucksGetApiArg
          >({
          query: (queryArg) => ({
            url: `/company_truck/get_trucks/`,
            params: { left: queryArg.left, right: queryArg.right },
          }),
          providesTags: (result, error, arg) => [{ type: 'Trucks', id: 'LIST' }],
        }),
        getTruckByVinCompanyTruckGetTruckByVinGet: build.query<
          GetTruckByVinCompanyTruckGetTruckByVinGetApiResponse,
          GetTruckByVinCompanyTruckGetTruckByVinGetApiArg
          >({
          query: (queryArg) => ({
            url: `/company_truck/get_truck_by_vin/`,
            params: { vin: queryArg.vin },
          }),
        }),
        getTruckFileCompanyTruckGetTruckFileGet: build.query<
          GetTruckFileCompanyTruckGetTruckFileGetApiResponse,
          GetTruckFileCompanyTruckGetTruckFileGetApiArg
          >({
          query: (queryArg) => ({
            url: `/company_truck/get_truck_file/`,
            params: { vin: queryArg.vin, filename: queryArg.filename },
          }),
        }),
        driverLoginDriverDriverLoginPost: build.mutation<
          DriverLoginDriverDriverLoginPostApiResponse,
          DriverLoginDriverDriverLoginPostApiArg
          >({
          query: (queryArg) => ({
            url: `/driver/driver-login/`,
            method: "POST",
            body: queryArg.oAuth2PasswordRequestForm,
          }),
        }),
        getCurrentDrivDriverGetCurrentDriverGet: build.query<
          GetCurrentDrivDriverGetCurrentDriverGetApiResponse,
          GetCurrentDrivDriverGetCurrentDriverGetApiArg
          >({
          query: () => ({ url: `/driver/get_current_driver/` }),
        }),
        getCurrentTruckDriverGetCurrentTruckGet: build.query<
          GetCurrentTruckDriverGetCurrentTruckGetApiResponse,
          GetCurrentTruckDriverGetCurrentTruckGetApiArg
          >({
          query: () => ({ url: `/driver/get_current_truck/` }),
        }),
        getTruckFileDriverGetTruckFileGet: build.query<
          GetTruckFileDriverGetTruckFileGetApiResponse,
          GetTruckFileDriverGetTruckFileGetApiArg
          >({
          query: (queryArg) => ({
            url: `/driver/get_truck_file/`,
            params: { filename: queryArg.filename },
          }),
        }),
        driverLogoutDriverDriverLogoutDelete: build.mutation<
          DriverLogoutDriverDriverLogoutDeleteApiResponse,
          DriverLogoutDriverDriverLogoutDeleteApiArg
          >({
          query: () => ({ url: `/driver/driver_logout/`, method: "DELETE" }),
        }),
      }),
    });
    export { injectedRtkApi as api };
    export type SignUpCompanySignUpPostApiResponse =
    /** status 201 Successful Response */ any;
    export type SignUpCompanySignUpPostApiArg = {
      email: string;
      username: string;
      role: string;
      password: string;
      captcha?: string;
      bodySignUpCompanySignUpPost: BodySignUpCompanySignUpPost;
    };
    export type SignInCompanySignInPostApiResponse =
    /** status 200 Successful Response */ SessionToken;
    export type SignInCompanySignInPostApiArg = {
      mail: string;
      password: string;
    };
    export type GetUserCompanyUserGetApiResponse =
    /** status 200 Successful Response */ User;
    export type GetUserCompanyUserGetApiArg = void;
    export type UpdateCompanyCompanyUpdateCompanyPutApiResponse =
    /** status 200 Successful Response */ any;
    export type UpdateCompanyCompanyUpdateCompanyPutApiArg = {
      companyInsuranceFile?: string;
      commercialGeneralLiability?: string;
      automobileLiability?: string;
      workersCompensation?: string;
      compCollision?: string;
      cargo?: string;
      bodyUpdateCompanyCompanyUpdateCompanyPut: BodyUpdateCompanyCompanyUpdateCompanyPut;
    };
    export type LogOutCompanyLogOutDeleteApiResponse =
    /** status 200 Successful Response */ any;
    export type LogOutCompanyLogOutDeleteApiArg = void;
    export type CreateNewTruckCompanyTruckCreateNewTruckPostApiResponse =
    /** status 200 Successful Response */ any;
    export type CreateNewTruckCompanyTruckCreateNewTruckPostApiArg = {
      companyEmail?: string;
      truckNumber?: string;
      truckRegistrationFile?: string;
      vin?: string;
      licenseExpiration?: string;
      year?: string;
      truckInspectionFile?: string;
      truckInspectionExpiration?: string;
      phycisalDamageFile?: string;
      physicalDamageExpiration?: string;
      ny?: string;
      nyFile?: string;
      ky?: string;
      kyFile?: string;
      nm?: string;
      nmFile?: string;
      or?: string;
      orFile?: string;
      leaserAndBorrowerFile?: string;
      driverAndCompanyFile?: string;
      randomDrugTestExparation?: string;
      randomDrugTestExparationFile?: string;
      driverPassword?: string;
      driverName?: string;
      bodyCreateNewTruckCompanyTruckCreateNewTruckPost: BodyCreateNewTruckCompanyTruckCreateNewTruckPost;
    };
    export type UpdateTruckCompanyTruckUpdateTruckPutApiResponse =
    /** status 200 Successful Response */ any;
    export type UpdateTruckCompanyTruckUpdateTruckPutApiArg = {
      companyEmail?: string;
      truckNumber?: string;
      truckRegistrationFile?: string;
      vin?: string;
      licenseExpiration?: string;
      year?: string;
      truckInspectionFile?: string;
      truckInspectionExpiration?: string;
      phycisalDamageFile?: string;
      physicalDamageExpiration?: string;
      ny?: string;
      nyFile?: string;
      ky?: string;
      kyFile?: string;
      nm?: string;
      nmFile?: string;
      or?: string;
      orFile?: string;
      leaserAndBorrowerFile?: string;
      driverAndCompanyFile?: string;
      randomDrugTestExparation?: string;
      randomDrugTestExparationFile?: string;
      driverPassword?: string;
      driverName?: string;
      bodyUpdateTruckCompanyTruckUpdateTruckPut: BodyUpdateTruckCompanyTruckUpdateTruckPut;
    };
    export type DeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteApiResponse =
    /** status 200 Successful Response */ any;
    export type DeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteApiArg = {
      vin: string;
    };
    export type GetTrucksCompanyTruckGetTrucksGetApiResponse =
    /** status 200 Successful Response */ TruckSeries;
    export type GetTrucksCompanyTruckGetTrucksGetApiArg = {
      left: number;
      right: number;
    };
    export type GetTruckByVinCompanyTruckGetTruckByVinGetApiResponse =
    /** status 200 Successful Response */ any;
    export type GetTruckByVinCompanyTruckGetTruckByVinGetApiArg = {
      vin: string;
    };
    export type GetTruckFileCompanyTruckGetTruckFileGetApiResponse =
    /** status 200 Successful Response */ any;
    export type GetTruckFileCompanyTruckGetTruckFileGetApiArg = {
      vin: string;
      filename: FileName;
    };
    export type DriverLoginDriverDriverLoginPostApiResponse =
    /** status 200 Successful Response */ SessionToken2;
    export type DriverLoginDriverDriverLoginPostApiArg = {
      oAuth2PasswordRequestForm: OAuth2PasswordRequestForm;
    };
    export type GetCurrentDrivDriverGetCurrentDriverGetApiResponse =
    /** status 200 Successful Response */ Driver;
    export type GetCurrentDrivDriverGetCurrentDriverGetApiArg = void;
    export type GetCurrentTruckDriverGetCurrentTruckGetApiResponse =
    /** status 200 Successful Response */ Truck;
    export type GetCurrentTruckDriverGetCurrentTruckGetApiArg = void;
    export type GetTruckFileDriverGetTruckFileGetApiResponse =
    /** status 200 Successful Response */ any;
    export type GetTruckFileDriverGetTruckFileGetApiArg = {
      filename: FileName;
    };
    export type DriverLogoutDriverDriverLogoutDeleteApiResponse =
    /** status 200 Successful Response */ any;
    export type DriverLogoutDriverDriverLogoutDeleteApiArg = void;
    export type ValidationError = {
      loc: string[];
      msg: string;
      type: string;
    };
    export type HttpValidationError = {
      detail?: ValidationError[];
    };
    export type BodySignUpCompanySignUpPost = {
      company_insurance_file?: Blob;
    };
    export type SessionToken = {
      access_token: string;
      token_type?: string;
    };
    export type User = {
      email: string;
      username: string;
      role?: string;
      id: number;
      oauth2?: boolean;
      verified?: boolean;
      company_insurance_file?: string;
      commercial_general_liabilit?: string;
      automobile_liability?: string;
      workers_compensation?: string;
      comp_collision?: string;
      cargo?: string;
    };
    export type BodyUpdateCompanyCompanyUpdateCompanyPut = {
      company_insurance_file?: Blob;
    };
    export type BodyCreateNewTruckCompanyTruckCreateNewTruckPost = {
      truck_registration_file?: Blob;
      truck_inspection_file?: Blob;
      phycisal_damage_file?: Blob;
      NY_file?: Blob;
      KY_file?: Blob;
      NM_file?: Blob;
      OR_file?: Blob;
      leaser_and_borrower_file?: Blob;
      driver_and_company_file?: Blob;
      random_drug_test_exparation_file?: Blob;
    };
    export type BodyUpdateTruckCompanyTruckUpdateTruckPut = {
      truck_registration_file?: Blob;
      truck_inspection_file?: Blob;
      phycisal_damage_file?: Blob;
      NY_file?: Blob;
      KY_file?: Blob;
      NM_file?: Blob;
      OR_file?: Blob;
      leaser_and_borrower_file?: Blob;
      driver_and_company_file?: Blob;
      random_drug_test_exparation_file?: Blob;
    };
    export type Truck = {
      company_email?: string;
      truck_number?: string;
      truck_registration_file?: string;
      vin?: string;
      license_expiration?: string;
      year?: string;
      truck_inspection_file?: string;
      truck_inspection_expiration?: string;
      phycisal_damage_file?: string;
      physical_damage_expiration?: string;
      NY?: string;
      NY_file?: string;
      KY?: string;
      KY_file?: string;
      NM?: string;
      NM_file?: string;
      OR?: string;
      OR_file?: string;
      leaser_and_borrower_file?: string;
      driver_and_company_file?: string;
      random_drug_test_exparation?: string;
      random_drug_test_exparation_file?: string;
      driver_password?: string;
      driver_name?: string;
    };
    export type TruckSeries = {
      number_of_trucks?: number;
      series?: Truck[];
    };
    export type FileName =
  | "truck_registration_file"
  | "truck_inspection_file"
  | "phycisal_damage_file"
  | "NY_file"
  | "KY_file"
  | "NM_file"
  | "OR_file"
  | "leaser_and_borrower_file"
  | "driver_and_company_file"
  | "random_drug_test_exparation_file";
export type SessionToken2 = {
  access_token: string;
  token_type?: string;
};
export type OAuth2PasswordRequestForm = {
  mail: string;
  password: string;
};
export type Driver = {
  email: string;
  username: string;
  role?: string;
  id?: number;
  oauth2?: boolean;
  verified?: boolean;
};
export const {
  useSignUpCompanySignUpPostMutation,
  useSignInCompanySignInPostMutation,
  useGetUserCompanyUserGetQuery,
  useUpdateCompanyCompanyUpdateCompanyPutMutation,
  useLogOutCompanyLogOutDeleteMutation,
  useCreateNewTruckCompanyTruckCreateNewTruckPostMutation,
  useUpdateTruckCompanyTruckUpdateTruckPutMutation,
  useDeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteMutation,
  useGetTrucksCompanyTruckGetTrucksGetQuery,
  useGetTruckByVinCompanyTruckGetTruckByVinGetQuery,
  useGetTruckFileCompanyTruckGetTruckFileGetQuery,
  useDriverLoginDriverDriverLoginPostMutation,
  useGetCurrentDrivDriverGetCurrentDriverGetQuery,
  useGetCurrentTruckDriverGetCurrentTruckGetQuery,
  useGetTruckFileDriverGetTruckFileGetQuery,
  useDriverLogoutDriverDriverLogoutDeleteMutation,
} = injectedRtkApi;

export const fetchTrucks = () => injectedRtkApi.endpoints.getTrucksCompanyTruckGetTrucksGet.initiate({ left: 0, right: 100 });