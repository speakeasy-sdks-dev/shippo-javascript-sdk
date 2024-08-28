/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountColissimoCreateRequestParameters = {};

export type CarrierAccountColissimoCreateRequest = {
    carrier: string;
    parameters: CarrierAccountColissimoCreateRequestParameters;
};

/** @internal */
export const CarrierAccountColissimoCreateRequestParameters$inboundSchema: z.ZodType<
    CarrierAccountColissimoCreateRequestParameters,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type CarrierAccountColissimoCreateRequestParameters$Outbound = {};

/** @internal */
export const CarrierAccountColissimoCreateRequestParameters$outboundSchema: z.ZodType<
    CarrierAccountColissimoCreateRequestParameters$Outbound,
    z.ZodTypeDef,
    CarrierAccountColissimoCreateRequestParameters
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountColissimoCreateRequestParameters$ {
    /** @deprecated use `CarrierAccountColissimoCreateRequestParameters$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountColissimoCreateRequestParameters$inboundSchema;
    /** @deprecated use `CarrierAccountColissimoCreateRequestParameters$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountColissimoCreateRequestParameters$outboundSchema;
    /** @deprecated use `CarrierAccountColissimoCreateRequestParameters$Outbound` instead. */
    export type Outbound = CarrierAccountColissimoCreateRequestParameters$Outbound;
}

/** @internal */
export const CarrierAccountColissimoCreateRequest$inboundSchema: z.ZodType<
    CarrierAccountColissimoCreateRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    carrier: z.string(),
    parameters: z.lazy(() => CarrierAccountColissimoCreateRequestParameters$inboundSchema),
});

/** @internal */
export type CarrierAccountColissimoCreateRequest$Outbound = {
    carrier: string;
    parameters: CarrierAccountColissimoCreateRequestParameters$Outbound;
};

/** @internal */
export const CarrierAccountColissimoCreateRequest$outboundSchema: z.ZodType<
    CarrierAccountColissimoCreateRequest$Outbound,
    z.ZodTypeDef,
    CarrierAccountColissimoCreateRequest
> = z.object({
    carrier: z.string(),
    parameters: z.lazy(() => CarrierAccountColissimoCreateRequestParameters$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountColissimoCreateRequest$ {
    /** @deprecated use `CarrierAccountColissimoCreateRequest$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountColissimoCreateRequest$inboundSchema;
    /** @deprecated use `CarrierAccountColissimoCreateRequest$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountColissimoCreateRequest$outboundSchema;
    /** @deprecated use `CarrierAccountColissimoCreateRequest$Outbound` instead. */
    export type Outbound = CarrierAccountColissimoCreateRequest$Outbound;
}
