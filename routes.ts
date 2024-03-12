import { envResponse } from "./v1/env";
import { contactFormRequest } from "./v1/contact-form";
import { adminListUsersResponse } from "./v1/admin/list-users";
import { analyticsAssetViewsResponse, analyticsAssetViewsRequest } from "./v1/analytics/asset-views";
import { assetsAddResponse, assetsAddRequest } from "./v1/assets/add";
import { empty } from "./v1/common/empty_type";
import { assetsAllRequest, assetsAllResponse } from "./v1/assets/all";
import { assetsHistoryRequest, assetsHistoryResponse } from "./v1/assets/history";
import { assetsUpdateRequest } from "./v1/assets/update";
import { invitesAssetProcessRequest, invitesAssetProcessResponse } from "./v1/invites/asset/process";
import { invitesAssetSendRequest, invitesAssetSendResponse } from "./v1/invites/asset/send";
import { invitesAssetValidateRequest, invitesAssetValidateResponse } from "./v1/invites/asset/validate";
import { invitesUserOrgProcessRequest, invitesUserOrgProcessResponse } from "./v1/invites/user-org/process";
import { invitesUserOrgSendRequest } from "./v1/invites/user-org/send";
import { invitesUserOrgValidateRequest, invitesUserOrgValidateResponse } from "./v1/invites/user-org/validate";
import { orgsAddRequest, orgsAddResponse } from "./v1/orgs/add";
import { orgsHistoryRequest, orgsHistoryResponse } from "./v1/orgs/history";
import { orgsListResponse } from "./v1/orgs/list";
import { orgsUpdateRequest } from "./v1/orgs/update";
import { rightsAllRequest, rightsAllResponse } from "./v1/rights/all";
import { rightsAttestationRequest, rightsAttestationResponse } from "./v1/rights/attestation";
import { rightsHistoryRequest, rightsHistoryResponse } from "./v1/rights/history";
import { rightsUpdateRequest } from "./v1/rights/update";
import { usersPasswordResetProcessRequest, usersPasswordResetProcessResponse } from "./v1/users/password-reset/process";
import { usersPasswordResetSendRequest } from "./v1/users/password-reset/send";
import { usersPasswordResetValidateRequest } from "./v1/users/password-reset/validate";
import { usersLoginRequest, usersLoginResponse } from "./v1/users/login";
import { usersSwitchOrgRequest, usersSwitchOrgResponse } from "./v1/users/switch-org";
import { usersUpdateProfileRequest, usersUpdateProfileResponse } from "./v1/users/update-profile";
import { adminDecryptRequest, adminDecryptResponse } from "./v1/admin/decrypt";

export type ApiRoutes = {
  "/api/v1/admin/list-users": [typeof empty, typeof adminListUsersResponse];
  "/api/v1/admin/decrypt": [typeof adminDecryptRequest, typeof adminDecryptResponse];
  "/api/v1/admin/check-schema": [typeof empty, typeof empty];

  "/api/v1/analytics/asset-views": [typeof analyticsAssetViewsRequest, typeof analyticsAssetViewsResponse];

  "/api/v1/assets/add": [typeof assetsAddRequest, typeof assetsAddResponse];
  "/api/v1/assets/all": [typeof assetsAllRequest, typeof assetsAllResponse];
  "/api/v1/assets/history": [typeof assetsHistoryRequest, typeof assetsHistoryResponse];
  "/api/v1/assets/update": [typeof assetsUpdateRequest, typeof empty];

  "/api/v1/invites/asset/process": [typeof invitesAssetProcessRequest, typeof invitesAssetProcessResponse];
  "/api/v1/invites/asset/send": [typeof invitesAssetSendRequest, typeof invitesAssetSendResponse];
  "/api/v1/invites/asset/validate": [typeof invitesAssetValidateRequest, typeof invitesAssetValidateResponse];

  "/api/v1/invites/user-org/process": [typeof invitesUserOrgProcessRequest, typeof invitesUserOrgProcessResponse];
  "/api/v1/invites/user-org/send": [typeof invitesUserOrgSendRequest, typeof empty];
  "/api/v1/invites/user-org/validate": [typeof invitesUserOrgValidateRequest, typeof invitesUserOrgValidateResponse];

  "/api/v1/orgs/add": [typeof orgsAddRequest, typeof orgsAddResponse];
  "/api/v1/orgs/history": [typeof orgsHistoryRequest, typeof orgsHistoryResponse];
  "/api/v1/orgs/list": [typeof empty, typeof orgsListResponse];
  "/api/v1/orgs/update": [typeof orgsUpdateRequest, typeof empty];

  "/api/v1/rights/all": [typeof rightsAllRequest, typeof rightsAllResponse];
  "/api/v1/rights/attestation": [typeof rightsAttestationRequest, typeof rightsAttestationResponse];
  "/api/v1/rights/history": [typeof rightsHistoryRequest, typeof rightsHistoryResponse];
  "/api/v1/rights/update": [typeof rightsUpdateRequest, typeof empty];

  "/api/v1/users/password-reset/process": [
    typeof usersPasswordResetProcessRequest,
    typeof usersPasswordResetProcessResponse,
  ];
  "/api/v1/users/password-reset/send": [typeof usersPasswordResetSendRequest, typeof empty];
  "/api/v1/users/password-reset/validate": [typeof usersPasswordResetValidateRequest, typeof empty];

  "/api/v1/users/login": [typeof usersLoginRequest, typeof usersLoginResponse];
  "/api/v1/users/switch-org": [typeof usersSwitchOrgRequest, typeof usersSwitchOrgResponse];
  "/api/v1/users/update-profile": [typeof usersUpdateProfileRequest, typeof usersUpdateProfileResponse];

  "/api/v1/contact-form": [typeof contactFormRequest, typeof empty];

  "/api/v1/env": [typeof empty, typeof envResponse];
};

export const emailUrls = {
  invitesAsset: "${baseUrl}/view-snippet?code=${code}",
  invitesUserOrg: "${baseUrl}/org/invite?code=${code}",
  passwordReset: "${baseUrl}/user/password-reset?code=${code}",
};
