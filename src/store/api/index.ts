import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const injectedRtkApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://0.0.0.0:8000/',
    credentials: 'include',
  }),
  endpoints: (build) => ({
    signUpAuthSignUpPost: build.mutation<
      SignUpAuthSignUpPostApiResponse,
      SignUpAuthSignUpPostApiArg
      >({
      query: (queryArg) => ({
        url: `/auth/sign-up/`,
        method: "POST",
        body: queryArg.userCreate,
      }),
    }),
    signInAuthSignInPost: build.mutation<
      SignInAuthSignInPostApiResponse,
      SignInAuthSignInPostApiArg
      >({
      query: (queryArg) => ({
        url: `/auth/sign-in/`,
        method: "POST",
        body: queryArg.oAuth2PasswordRequestForm,
      }),
    }),
    getUserAuthUserGet: build.query<
      GetUserAuthUserGetApiResponse,
      GetUserAuthUserGetApiArg
      >({
      query: () => ({ url: `/auth/user/` }),
    }),
    resetPasswordAuthResetPasswordPost: build.mutation<
      ResetPasswordAuthResetPasswordPostApiResponse,
      ResetPasswordAuthResetPasswordPostApiArg
      >({
      query: (queryArg) => ({
        url: `/auth/reset-password/`,
        method: "POST",
        params: { token: queryArg.token, new_password: queryArg.newPassword },
      }),
    }),
    changePasswordAuthChangePasswordPost: build.mutation<
      ChangePasswordAuthChangePasswordPostApiResponse,
      ChangePasswordAuthChangePasswordPostApiArg
      >({
      query: (queryArg) => ({
        url: `/auth/change-password/`,
        method: "POST",
        params: {
          old_password: queryArg.oldPassword,
          new_password: queryArg.newPassword,
        },
      }),
    }),
    changeNameAuthChangeNamePost: build.mutation<
      ChangeNameAuthChangeNamePostApiResponse,
      ChangeNameAuthChangeNamePostApiArg
      >({
      query: (queryArg) => ({
        url: `/auth/change-name/`,
        method: "POST",
        params: { new_name: queryArg.newName },
      }),
    }),
    logOutAuthLogOutPost: build.mutation<
      LogOutAuthLogOutPostApiResponse,
      LogOutAuthLogOutPostApiArg
      >({
      query: () => ({ url: `/auth/log-out/`, method: "POST" }),
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
        },
      }),
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
        },
      }),
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
    }),
    getTrucksCompanyTruckGetTrucksGet: build.query<
      GetTrucksCompanyTruckGetTrucksGetApiResponse,
      GetTrucksCompanyTruckGetTrucksGetApiArg
      >({
      query: (queryArg) => ({
        url: `/company_truck/get_trucks/`,
        params: { left: queryArg.left, right: queryArg.right },
      }),
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
  }),
});
export { injectedRtkApi as api };
export type SignUpAuthSignUpPostApiResponse =
/** status 201 Successful Response */ any;
export type SignUpAuthSignUpPostApiArg = {
  userCreate: UserCreate;
};
export type SignInAuthSignInPostApiResponse =
/** status 200 Successful Response */ SessionToken;
export type SignInAuthSignInPostApiArg = {
  oAuth2PasswordRequestForm: OAuth2PasswordRequestForm;
};
export type GetUserAuthUserGetApiResponse =
/** status 200 Successful Response */ User;
export type GetUserAuthUserGetApiArg = void;
export type ResetPasswordAuthResetPasswordPostApiResponse =
/** status 200 Successful Response */ any;
export type ResetPasswordAuthResetPasswordPostApiArg = {
  token: string;
  newPassword: string;
};
export type ChangePasswordAuthChangePasswordPostApiResponse =
/** status 200 Successful Response */ any;
export type ChangePasswordAuthChangePasswordPostApiArg = {
  oldPassword: string;
  newPassword: string;
};
export type ChangeNameAuthChangeNamePostApiResponse =
/** status 200 Successful Response */ any;
export type ChangeNameAuthChangeNamePostApiArg = {
  newName: string;
};
export type LogOutAuthLogOutPostApiResponse =
/** status 200 Successful Response */ any;
export type LogOutAuthLogOutPostApiArg = void;
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
export type ValidationError = {
  loc: string[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserCreate = {
  email: string;
  username: string;
  role: string;
  password: string;
  captcha?: string;
};
export type SessionToken = {
  access_token: string;
  token_type?: string;
};
export type OAuth2PasswordRequestForm = {
  mail: string;
  password: string;
};
export type User = {
  email: string;
  username: string;
  role: string;
  id: number;
  oauth2: boolean;
  verified: boolean;
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
export const {
  useSignUpAuthSignUpPostMutation,
  useSignInAuthSignInPostMutation,
  useGetUserAuthUserGetQuery,
  useResetPasswordAuthResetPasswordPostMutation,
  useChangePasswordAuthChangePasswordPostMutation,
  useChangeNameAuthChangeNamePostMutation,
  useLogOutAuthLogOutPostMutation,
  useCreateNewTruckCompanyTruckCreateNewTruckPostMutation,
  useUpdateTruckCompanyTruckUpdateTruckPutMutation,
  useDeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteMutation,
  useGetTrucksCompanyTruckGetTrucksGetQuery,
  useGetTruckByVinCompanyTruckGetTruckByVinGetQuery,
  useGetTruckFileCompanyTruckGetTruckFileGetQuery,
} = injectedRtkApi;
