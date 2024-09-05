/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CreateShipmentGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateShipmentGlobals$inboundSchema: z.ZodType<
    CreateShipmentGlobals,
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
export type CreateShipmentGlobals$Outbound = {
    "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateShipmentGlobals$outboundSchema: z.ZodType<
    CreateShipmentGlobals$Outbound,
    z.ZodTypeDef,
    CreateShipmentGlobals
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
export namespace CreateShipmentGlobals$ {
    /** @deprecated use `CreateShipmentGlobals$inboundSchema` instead. */
    export const inboundSchema = CreateShipmentGlobals$inboundSchema;
    /** @deprecated use `CreateShipmentGlobals$outboundSchema` instead. */
    export const outboundSchema = CreateShipmentGlobals$outboundSchema;
    /** @deprecated use `CreateShipmentGlobals$Outbound` instead. */
    export type Outbound = CreateShipmentGlobals$Outbound;
}
