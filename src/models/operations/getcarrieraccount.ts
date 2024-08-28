/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetCarrierAccountGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetCarrierAccountRequest = {
    /**
     * Object ID of the carrier account
     */
    carrierAccountId: string;
};

/** @internal */
export const GetCarrierAccountGlobals$inboundSchema: z.ZodType<
    GetCarrierAccountGlobals,
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
export type GetCarrierAccountGlobals$Outbound = {
    "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const GetCarrierAccountGlobals$outboundSchema: z.ZodType<
    GetCarrierAccountGlobals$Outbound,
    z.ZodTypeDef,
    GetCarrierAccountGlobals
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
export namespace GetCarrierAccountGlobals$ {
    /** @deprecated use `GetCarrierAccountGlobals$inboundSchema` instead. */
    export const inboundSchema = GetCarrierAccountGlobals$inboundSchema;
    /** @deprecated use `GetCarrierAccountGlobals$outboundSchema` instead. */
    export const outboundSchema = GetCarrierAccountGlobals$outboundSchema;
    /** @deprecated use `GetCarrierAccountGlobals$Outbound` instead. */
    export type Outbound = GetCarrierAccountGlobals$Outbound;
}

/** @internal */
export const GetCarrierAccountRequest$inboundSchema: z.ZodType<
    GetCarrierAccountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CarrierAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CarrierAccountId: "carrierAccountId",
        });
    });

/** @internal */
export type GetCarrierAccountRequest$Outbound = {
    CarrierAccountId: string;
};

/** @internal */
export const GetCarrierAccountRequest$outboundSchema: z.ZodType<
    GetCarrierAccountRequest$Outbound,
    z.ZodTypeDef,
    GetCarrierAccountRequest
> = z
    .object({
        carrierAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            carrierAccountId: "CarrierAccountId",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCarrierAccountRequest$ {
    /** @deprecated use `GetCarrierAccountRequest$inboundSchema` instead. */
    export const inboundSchema = GetCarrierAccountRequest$inboundSchema;
    /** @deprecated use `GetCarrierAccountRequest$outboundSchema` instead. */
    export const outboundSchema = GetCarrierAccountRequest$outboundSchema;
    /** @deprecated use `GetCarrierAccountRequest$Outbound` instead. */
    export type Outbound = GetCarrierAccountRequest$Outbound;
}
