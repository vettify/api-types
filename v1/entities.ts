export type UserId = number & { readonly tag: "userId" };

export type OrgId = number & { readonly tag: "orgId" };
export type OrgHistoryId = number & { readonly tag: "orgHistoryId" };

export type AssetId = number & { readonly tag: "assetId" };
export type AssetHistoryId = number & { readonly tag: "assetHistoryId" };

export type RightId = number & { readonly tag: "rightId" };
export type RightHistoryId = number & { readonly tag: "rightHistoryId" };
export type RightMessageId = number & { readonly tag: "rightMessageId" };

export type InvitesUserOrgId = number & { readonly tag: "inviteUserOrgId" };
export type InvitesAssetUserOrgId = number & { readonly tag: "inviteAssetUserOrgId" };
