/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * filter by specific carrier
 */
export enum Carrier {
    Ups = "ups",
    Usps = "usps",
    CanadaPost = "canada_post",
}

export type GetCarrierRegistrationStatusRequest = {
    /**
     * filter by specific carrier
     */
    carrier: Carrier;
};

/** @internal */
export const Carrier$: z.ZodNativeEnum<typeof Carrier> = z.nativeEnum(Carrier);

/** @internal */
export namespace GetCarrierRegistrationStatusRequest$ {
    export const inboundSchema: z.ZodType<
        GetCarrierRegistrationStatusRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            carrier: Carrier$,
        })
        .transform((v) => {
            return {
                carrier: v.carrier,
            };
        });

    export type Outbound = {
        carrier: Carrier;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCarrierRegistrationStatusRequest
    > = z
        .object({
            carrier: Carrier$,
        })
        .transform((v) => {
            return {
                carrier: v.carrier,
            };
        });
}
