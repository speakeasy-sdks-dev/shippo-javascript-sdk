/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    CarrierAccountServiceLevel,
    CarrierAccountServiceLevel$inboundSchema,
    CarrierAccountServiceLevel$Outbound,
    CarrierAccountServiceLevel$outboundSchema,
} from "./carrieraccountservicelevel.js";
import {
    FedExConnectExistingOwnAccountParameters,
    FedExConnectExistingOwnAccountParameters$inboundSchema,
    FedExConnectExistingOwnAccountParameters$Outbound,
    FedExConnectExistingOwnAccountParameters$outboundSchema,
} from "./fedexconnectexistingownaccountparameters.js";
import {
    UPSConnectExistingOwnAccountParameters,
    UPSConnectExistingOwnAccountParameters$inboundSchema,
    UPSConnectExistingOwnAccountParameters$Outbound,
    UPSConnectExistingOwnAccountParameters$outboundSchema,
} from "./upsconnectexistingownaccountparameters.js";
import * as z from "zod";

export type ParametersT =
    | FedExConnectExistingOwnAccountParameters
    | UPSConnectExistingOwnAccountParameters
    | { [k: string]: any };

/**
 * Authentication method used by this account.
 */
export const CarrierAccountWithExtraInfoType = {
    Default: "default",
    Oauth: "oauth",
} as const;
/**
 * Authentication method used by this account.
 */
export type CarrierAccountWithExtraInfoType = ClosedEnum<typeof CarrierAccountWithExtraInfoType>;

/**
 * Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).
 */
export const CarrierAccountWithExtraInfoStatus = {
    Disconnected: "disconnected",
    Connected: "connected",
    AuthorizationPending: "authorization_pending",
} as const;
/**
 * Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).
 */
export type CarrierAccountWithExtraInfoStatus = ClosedEnum<
    typeof CarrierAccountWithExtraInfoStatus
>;

export type Authentication = {
    /**
     * Authentication method used by this account.
     */
    type?: CarrierAccountWithExtraInfoType | undefined;
    /**
     * Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).
     */
    status?: CarrierAccountWithExtraInfoStatus | undefined;
};

/**
 * Holds internal state relevant to users.
 */
export type ObjectInfo = {
    authentication?: Authentication | undefined;
};

export type CarrierAccountWithExtraInfo = {
    /**
     * Unique identifier of the account. Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a>
     *
     * @remarks
     * page for the `account_id` per carrier.<br>
     * To protect account information, this field will be masked in any API response.
     */
    accountId: string;
    /**
     * Determines whether the account is active. When creating a shipment, if no `carrier_accounts` are explicitly
     *
     * @remarks
     * passed Shippo will query all carrier accounts that have this field set. By default, this is set to True.
     */
    active?: boolean | undefined;
    /**
     * Carrier token, see <a href="#tag/Carriers">Carriers</a><br>
     *
     * @remarks
     * Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a> page for all supported carriers.
     */
    carrier: string;
    parameters?:
        | FedExConnectExistingOwnAccountParameters
        | UPSConnectExistingOwnAccountParameters
        | { [k: string]: any }
        | undefined;
    /**
     * Carrier name, see <a href="#tag/Carriers">Carriers</a><br>
     */
    carrierName?: any | undefined;
    isShippoAccount?: boolean | undefined;
    metadata?: string | undefined;
    /**
     * Unique identifier of the carrier account object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the carrier account object.
     */
    objectOwner?: string | undefined;
    serviceLevels?: Array<CarrierAccountServiceLevel> | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * Holds internal state relevant to users.
     */
    objectInfo?: ObjectInfo | undefined;
};

/** @internal */
export const ParametersT$inboundSchema: z.ZodType<ParametersT, z.ZodTypeDef, unknown> = z.union([
    FedExConnectExistingOwnAccountParameters$inboundSchema,
    UPSConnectExistingOwnAccountParameters$inboundSchema,
    z.record(z.any()),
]);

/** @internal */
export type ParametersT$Outbound =
    | FedExConnectExistingOwnAccountParameters$Outbound
    | UPSConnectExistingOwnAccountParameters$Outbound
    | { [k: string]: any };

/** @internal */
export const ParametersT$outboundSchema: z.ZodType<
    ParametersT$Outbound,
    z.ZodTypeDef,
    ParametersT
> = z.union([
    FedExConnectExistingOwnAccountParameters$outboundSchema,
    UPSConnectExistingOwnAccountParameters$outboundSchema,
    z.record(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParametersT$ {
    /** @deprecated use `ParametersT$inboundSchema` instead. */
    export const inboundSchema = ParametersT$inboundSchema;
    /** @deprecated use `ParametersT$outboundSchema` instead. */
    export const outboundSchema = ParametersT$outboundSchema;
    /** @deprecated use `ParametersT$Outbound` instead. */
    export type Outbound = ParametersT$Outbound;
}

/** @internal */
export const CarrierAccountWithExtraInfoType$inboundSchema: z.ZodNativeEnum<
    typeof CarrierAccountWithExtraInfoType
> = z.nativeEnum(CarrierAccountWithExtraInfoType);

/** @internal */
export const CarrierAccountWithExtraInfoType$outboundSchema: z.ZodNativeEnum<
    typeof CarrierAccountWithExtraInfoType
> = CarrierAccountWithExtraInfoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountWithExtraInfoType$ {
    /** @deprecated use `CarrierAccountWithExtraInfoType$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountWithExtraInfoType$inboundSchema;
    /** @deprecated use `CarrierAccountWithExtraInfoType$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountWithExtraInfoType$outboundSchema;
}

/** @internal */
export const CarrierAccountWithExtraInfoStatus$inboundSchema: z.ZodNativeEnum<
    typeof CarrierAccountWithExtraInfoStatus
> = z.nativeEnum(CarrierAccountWithExtraInfoStatus);

/** @internal */
export const CarrierAccountWithExtraInfoStatus$outboundSchema: z.ZodNativeEnum<
    typeof CarrierAccountWithExtraInfoStatus
> = CarrierAccountWithExtraInfoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountWithExtraInfoStatus$ {
    /** @deprecated use `CarrierAccountWithExtraInfoStatus$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountWithExtraInfoStatus$inboundSchema;
    /** @deprecated use `CarrierAccountWithExtraInfoStatus$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountWithExtraInfoStatus$outboundSchema;
}

/** @internal */
export const Authentication$inboundSchema: z.ZodType<Authentication, z.ZodTypeDef, unknown> =
    z.object({
        type: CarrierAccountWithExtraInfoType$inboundSchema.optional(),
        status: CarrierAccountWithExtraInfoStatus$inboundSchema.optional(),
    });

/** @internal */
export type Authentication$Outbound = {
    type?: string | undefined;
    status?: string | undefined;
};

/** @internal */
export const Authentication$outboundSchema: z.ZodType<
    Authentication$Outbound,
    z.ZodTypeDef,
    Authentication
> = z.object({
    type: CarrierAccountWithExtraInfoType$outboundSchema.optional(),
    status: CarrierAccountWithExtraInfoStatus$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Authentication$ {
    /** @deprecated use `Authentication$inboundSchema` instead. */
    export const inboundSchema = Authentication$inboundSchema;
    /** @deprecated use `Authentication$outboundSchema` instead. */
    export const outboundSchema = Authentication$outboundSchema;
    /** @deprecated use `Authentication$Outbound` instead. */
    export type Outbound = Authentication$Outbound;
}

/** @internal */
export const ObjectInfo$inboundSchema: z.ZodType<ObjectInfo, z.ZodTypeDef, unknown> = z.object({
    authentication: z.lazy(() => Authentication$inboundSchema).optional(),
});

/** @internal */
export type ObjectInfo$Outbound = {
    authentication?: Authentication$Outbound | undefined;
};

/** @internal */
export const ObjectInfo$outboundSchema: z.ZodType<ObjectInfo$Outbound, z.ZodTypeDef, ObjectInfo> =
    z.object({
        authentication: z.lazy(() => Authentication$outboundSchema).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ObjectInfo$ {
    /** @deprecated use `ObjectInfo$inboundSchema` instead. */
    export const inboundSchema = ObjectInfo$inboundSchema;
    /** @deprecated use `ObjectInfo$outboundSchema` instead. */
    export const outboundSchema = ObjectInfo$outboundSchema;
    /** @deprecated use `ObjectInfo$Outbound` instead. */
    export type Outbound = ObjectInfo$Outbound;
}

/** @internal */
export const CarrierAccountWithExtraInfo$inboundSchema: z.ZodType<
    CarrierAccountWithExtraInfo,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        account_id: z.string(),
        active: z.boolean().optional(),
        carrier: z.string(),
        parameters: z
            .union([
                FedExConnectExistingOwnAccountParameters$inboundSchema,
                UPSConnectExistingOwnAccountParameters$inboundSchema,
                z.record(z.any()),
            ])
            .optional(),
        carrier_name: z.any().optional(),
        is_shippo_account: z.boolean().optional(),
        metadata: z.string().optional(),
        object_id: z.string().optional(),
        object_owner: z.string().optional(),
        service_levels: z.array(CarrierAccountServiceLevel$inboundSchema).optional(),
        test: z.boolean().optional(),
        object_info: z.lazy(() => ObjectInfo$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            account_id: "accountId",
            carrier_name: "carrierName",
            is_shippo_account: "isShippoAccount",
            object_id: "objectId",
            object_owner: "objectOwner",
            service_levels: "serviceLevels",
            object_info: "objectInfo",
        });
    });

/** @internal */
export type CarrierAccountWithExtraInfo$Outbound = {
    account_id: string;
    active?: boolean | undefined;
    carrier: string;
    parameters?:
        | FedExConnectExistingOwnAccountParameters$Outbound
        | UPSConnectExistingOwnAccountParameters$Outbound
        | { [k: string]: any }
        | undefined;
    carrier_name?: any | undefined;
    is_shippo_account?: boolean | undefined;
    metadata?: string | undefined;
    object_id?: string | undefined;
    object_owner?: string | undefined;
    service_levels?: Array<CarrierAccountServiceLevel$Outbound> | undefined;
    test?: boolean | undefined;
    object_info?: ObjectInfo$Outbound | undefined;
};

/** @internal */
export const CarrierAccountWithExtraInfo$outboundSchema: z.ZodType<
    CarrierAccountWithExtraInfo$Outbound,
    z.ZodTypeDef,
    CarrierAccountWithExtraInfo
> = z
    .object({
        accountId: z.string(),
        active: z.boolean().optional(),
        carrier: z.string(),
        parameters: z
            .union([
                FedExConnectExistingOwnAccountParameters$outboundSchema,
                UPSConnectExistingOwnAccountParameters$outboundSchema,
                z.record(z.any()),
            ])
            .optional(),
        carrierName: z.any().optional(),
        isShippoAccount: z.boolean().optional(),
        metadata: z.string().optional(),
        objectId: z.string().optional(),
        objectOwner: z.string().optional(),
        serviceLevels: z.array(CarrierAccountServiceLevel$outboundSchema).optional(),
        test: z.boolean().optional(),
        objectInfo: z.lazy(() => ObjectInfo$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            accountId: "account_id",
            carrierName: "carrier_name",
            isShippoAccount: "is_shippo_account",
            objectId: "object_id",
            objectOwner: "object_owner",
            serviceLevels: "service_levels",
            objectInfo: "object_info",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountWithExtraInfo$ {
    /** @deprecated use `CarrierAccountWithExtraInfo$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountWithExtraInfo$inboundSchema;
    /** @deprecated use `CarrierAccountWithExtraInfo$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountWithExtraInfo$outboundSchema;
    /** @deprecated use `CarrierAccountWithExtraInfo$Outbound` instead. */
    export type Outbound = CarrierAccountWithExtraInfo$Outbound;
}
