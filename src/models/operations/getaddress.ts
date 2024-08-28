/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetAddressGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetAddressRequest = {
    /**
     * Object ID of the address
     */
    addressId: string;
};

/** @internal */
export const GetAddressGlobals$inboundSchema: z.ZodType<GetAddressGlobals, z.ZodTypeDef, unknown> =
    z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "SHIPPO-API-VERSION": "shippoApiVersion",
            });
        });

/** @internal */
export type GetAddressGlobals$Outbound = {
    "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const GetAddressGlobals$outboundSchema: z.ZodType<
    GetAddressGlobals$Outbound,
    z.ZodTypeDef,
    GetAddressGlobals
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
export namespace GetAddressGlobals$ {
    /** @deprecated use `GetAddressGlobals$inboundSchema` instead. */
    export const inboundSchema = GetAddressGlobals$inboundSchema;
    /** @deprecated use `GetAddressGlobals$outboundSchema` instead. */
    export const outboundSchema = GetAddressGlobals$outboundSchema;
    /** @deprecated use `GetAddressGlobals$Outbound` instead. */
    export type Outbound = GetAddressGlobals$Outbound;
}

/** @internal */
export const GetAddressRequest$inboundSchema: z.ZodType<GetAddressRequest, z.ZodTypeDef, unknown> =
    z
        .object({
            AddressId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                AddressId: "addressId",
            });
        });

/** @internal */
export type GetAddressRequest$Outbound = {
    AddressId: string;
};

/** @internal */
export const GetAddressRequest$outboundSchema: z.ZodType<
    GetAddressRequest$Outbound,
    z.ZodTypeDef,
    GetAddressRequest
> = z
    .object({
        addressId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            addressId: "AddressId",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddressRequest$ {
    /** @deprecated use `GetAddressRequest$inboundSchema` instead. */
    export const inboundSchema = GetAddressRequest$inboundSchema;
    /** @deprecated use `GetAddressRequest$outboundSchema` instead. */
    export const outboundSchema = GetAddressRequest$outboundSchema;
    /** @deprecated use `GetAddressRequest$Outbound` instead. */
    export type Outbound = GetAddressRequest$Outbound;
}
