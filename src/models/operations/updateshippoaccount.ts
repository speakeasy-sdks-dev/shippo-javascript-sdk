/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateShippoAccountGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type UpdateShippoAccountRequest = {
    /**
     * Object ID of the ShippoAccount
     */
    shippoAccountId: string;
    shippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest | undefined;
};

/** @internal */
export const UpdateShippoAccountGlobals$inboundSchema: z.ZodType<
    UpdateShippoAccountGlobals,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "SHIPPO-API-VERSION": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "SHIPPO-API-VERSION": "shippoApiVersion",
        });
    });

/** @internal */
export type UpdateShippoAccountGlobals$Outbound = {
    "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const UpdateShippoAccountGlobals$outboundSchema: z.ZodType<
    UpdateShippoAccountGlobals$Outbound,
    z.ZodTypeDef,
    UpdateShippoAccountGlobals
> = z
    .object({
        shippoApiVersion: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            shippoApiVersion: "SHIPPO-API-VERSION",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateShippoAccountGlobals$ {
    /** @deprecated use `UpdateShippoAccountGlobals$inboundSchema` instead. */
    export const inboundSchema = UpdateShippoAccountGlobals$inboundSchema;
    /** @deprecated use `UpdateShippoAccountGlobals$outboundSchema` instead. */
    export const outboundSchema = UpdateShippoAccountGlobals$outboundSchema;
    /** @deprecated use `UpdateShippoAccountGlobals$Outbound` instead. */
    export type Outbound = UpdateShippoAccountGlobals$Outbound;
}

/** @internal */
export const UpdateShippoAccountRequest$inboundSchema: z.ZodType<
    UpdateShippoAccountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ShippoAccountId: z.string(),
        ShippoAccountUpdateRequest: components.ShippoAccountUpdateRequest$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ShippoAccountId: "shippoAccountId",
            ShippoAccountUpdateRequest: "shippoAccountUpdateRequest",
        });
    });

/** @internal */
export type UpdateShippoAccountRequest$Outbound = {
    ShippoAccountId: string;
    ShippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest$Outbound | undefined;
};

/** @internal */
export const UpdateShippoAccountRequest$outboundSchema: z.ZodType<
    UpdateShippoAccountRequest$Outbound,
    z.ZodTypeDef,
    UpdateShippoAccountRequest
> = z
    .object({
        shippoAccountId: z.string(),
        shippoAccountUpdateRequest: components.ShippoAccountUpdateRequest$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            shippoAccountId: "ShippoAccountId",
            shippoAccountUpdateRequest: "ShippoAccountUpdateRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateShippoAccountRequest$ {
    /** @deprecated use `UpdateShippoAccountRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateShippoAccountRequest$inboundSchema;
    /** @deprecated use `UpdateShippoAccountRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateShippoAccountRequest$outboundSchema;
    /** @deprecated use `UpdateShippoAccountRequest$Outbound` instead. */
    export type Outbound = UpdateShippoAccountRequest$Outbound;
}
