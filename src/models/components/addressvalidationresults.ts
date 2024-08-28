/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    AddressValidationResultsMessage,
    AddressValidationResultsMessage$inboundSchema,
    AddressValidationResultsMessage$Outbound,
    AddressValidationResultsMessage$outboundSchema,
} from "./addressvalidationresultsmessage.js";
import * as z from "zod";

/**
 * Object that contains information regarding if an address had been validated or not. Also contains any messages
 *
 * @remarks
 * generated during validation. Children keys are <code>is_valid</code>(boolean) and <code>messages</code>(array).
 */
export type AddressValidationResults = {
    isValid?: boolean | undefined;
    messages?: Array<AddressValidationResultsMessage> | undefined;
};

/** @internal */
export const AddressValidationResults$inboundSchema: z.ZodType<
    AddressValidationResults,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        is_valid: z.boolean().optional(),
        messages: z.array(AddressValidationResultsMessage$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            is_valid: "isValid",
        });
    });

/** @internal */
export type AddressValidationResults$Outbound = {
    is_valid?: boolean | undefined;
    messages?: Array<AddressValidationResultsMessage$Outbound> | undefined;
};

/** @internal */
export const AddressValidationResults$outboundSchema: z.ZodType<
    AddressValidationResults$Outbound,
    z.ZodTypeDef,
    AddressValidationResults
> = z
    .object({
        isValid: z.boolean().optional(),
        messages: z.array(AddressValidationResultsMessage$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            isValid: "is_valid",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressValidationResults$ {
    /** @deprecated use `AddressValidationResults$inboundSchema` instead. */
    export const inboundSchema = AddressValidationResults$inboundSchema;
    /** @deprecated use `AddressValidationResults$outboundSchema` instead. */
    export const outboundSchema = AddressValidationResults$outboundSchema;
    /** @deprecated use `AddressValidationResults$Outbound` instead. */
    export type Outbound = AddressValidationResults$Outbound;
}
