/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ListShipmentRatesByCurrencyCodeGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type ListShipmentRatesByCurrencyCodeRequest = {
    /**
     * Object ID of the shipment to update
     */
    shipmentId: string;
    /**
     * ISO currency code for the rates
     */
    currencyCode?: string | undefined;
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100)
     */
    results?: number | undefined;
};

/** @internal */
export const ListShipmentRatesByCurrencyCodeGlobals$inboundSchema: z.ZodType<
    ListShipmentRatesByCurrencyCodeGlobals,
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
export type ListShipmentRatesByCurrencyCodeGlobals$Outbound = {
    "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListShipmentRatesByCurrencyCodeGlobals$outboundSchema: z.ZodType<
    ListShipmentRatesByCurrencyCodeGlobals$Outbound,
    z.ZodTypeDef,
    ListShipmentRatesByCurrencyCodeGlobals
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
export namespace ListShipmentRatesByCurrencyCodeGlobals$ {
    /** @deprecated use `ListShipmentRatesByCurrencyCodeGlobals$inboundSchema` instead. */
    export const inboundSchema = ListShipmentRatesByCurrencyCodeGlobals$inboundSchema;
    /** @deprecated use `ListShipmentRatesByCurrencyCodeGlobals$outboundSchema` instead. */
    export const outboundSchema = ListShipmentRatesByCurrencyCodeGlobals$outboundSchema;
    /** @deprecated use `ListShipmentRatesByCurrencyCodeGlobals$Outbound` instead. */
    export type Outbound = ListShipmentRatesByCurrencyCodeGlobals$Outbound;
}

/** @internal */
export const ListShipmentRatesByCurrencyCodeRequest$inboundSchema: z.ZodType<
    ListShipmentRatesByCurrencyCodeRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ShipmentId: z.string(),
        CurrencyCode: z.string().default("USD"),
        page: z.number().int().default(1),
        results: z.number().int().default(25),
    })
    .transform((v) => {
        return remap$(v, {
            ShipmentId: "shipmentId",
            CurrencyCode: "currencyCode",
        });
    });

/** @internal */
export type ListShipmentRatesByCurrencyCodeRequest$Outbound = {
    ShipmentId: string;
    CurrencyCode: string;
    page: number;
    results: number;
};

/** @internal */
export const ListShipmentRatesByCurrencyCodeRequest$outboundSchema: z.ZodType<
    ListShipmentRatesByCurrencyCodeRequest$Outbound,
    z.ZodTypeDef,
    ListShipmentRatesByCurrencyCodeRequest
> = z
    .object({
        shipmentId: z.string(),
        currencyCode: z.string().default("USD"),
        page: z.number().int().default(1),
        results: z.number().int().default(25),
    })
    .transform((v) => {
        return remap$(v, {
            shipmentId: "ShipmentId",
            currencyCode: "CurrencyCode",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListShipmentRatesByCurrencyCodeRequest$ {
    /** @deprecated use `ListShipmentRatesByCurrencyCodeRequest$inboundSchema` instead. */
    export const inboundSchema = ListShipmentRatesByCurrencyCodeRequest$inboundSchema;
    /** @deprecated use `ListShipmentRatesByCurrencyCodeRequest$outboundSchema` instead. */
    export const outboundSchema = ListShipmentRatesByCurrencyCodeRequest$outboundSchema;
    /** @deprecated use `ListShipmentRatesByCurrencyCodeRequest$Outbound` instead. */
    export type Outbound = ListShipmentRatesByCurrencyCodeRequest$Outbound;
}
