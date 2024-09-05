/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RefundRequestBody = {
    async?: boolean | undefined;
    transaction: string;
};

/** @internal */
export const RefundRequestBody$inboundSchema: z.ZodType<RefundRequestBody, z.ZodTypeDef, unknown> =
    z.object({
        async: z.boolean().optional(),
        transaction: z.string(),
    });

/** @internal */
export type RefundRequestBody$Outbound = {
    async?: boolean | undefined;
    transaction: string;
};

/** @internal */
export const RefundRequestBody$outboundSchema: z.ZodType<
    RefundRequestBody$Outbound,
    z.ZodTypeDef,
    RefundRequestBody
> = z.object({
    async: z.boolean().optional(),
    transaction: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefundRequestBody$ {
    /** @deprecated use `RefundRequestBody$inboundSchema` instead. */
    export const inboundSchema = RefundRequestBody$inboundSchema;
    /** @deprecated use `RefundRequestBody$outboundSchema` instead. */
    export const outboundSchema = RefundRequestBody$outboundSchema;
    /** @deprecated use `RefundRequestBody$Outbound` instead. */
    export type Outbound = RefundRequestBody$Outbound;
}
