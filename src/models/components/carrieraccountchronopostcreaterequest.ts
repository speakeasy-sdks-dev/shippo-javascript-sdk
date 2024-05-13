/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountChronopostCreateRequestParameters = {};

export type CarrierAccountChronopostCreateRequest = {
    carrier: string;
    parameters: CarrierAccountChronopostCreateRequestParameters;
};

/** @internal */
export namespace CarrierAccountChronopostCreateRequestParameters$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountChronopostCreateRequestParameters,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountChronopostCreateRequestParameters
    > = z.object({});
}

/** @internal */
export namespace CarrierAccountChronopostCreateRequest$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountChronopostCreateRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            carrier: z.string(),
            parameters: z.lazy(
                () => CarrierAccountChronopostCreateRequestParameters$.inboundSchema
            ),
        })
        .transform((v) => {
            return {
                carrier: v.carrier,
                parameters: v.parameters,
            };
        });

    export type Outbound = {
        carrier: string;
        parameters: CarrierAccountChronopostCreateRequestParameters$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountChronopostCreateRequest
    > = z
        .object({
            carrier: z.string(),
            parameters: z.lazy(
                () => CarrierAccountChronopostCreateRequestParameters$.outboundSchema
            ),
        })
        .transform((v) => {
            return {
                carrier: v.carrier,
                parameters: v.parameters,
            };
        });
}
