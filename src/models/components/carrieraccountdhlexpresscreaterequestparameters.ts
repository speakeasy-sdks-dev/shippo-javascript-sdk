/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CarrierAccountDHLExpressCreateRequestParameters = {
    /**
     * Whether or not the user agrees to the DHL Express Terms and Conditions. If passed in as false, request will fail with error 400
     */
    userAcceptedTermsAndConditions: boolean;
};

/** @internal */
export const CarrierAccountDHLExpressCreateRequestParameters$inboundSchema: z.ZodType<
    CarrierAccountDHLExpressCreateRequestParameters,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        user_accepted_terms_and_conditions: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            user_accepted_terms_and_conditions: "userAcceptedTermsAndConditions",
        });
    });

/** @internal */
export type CarrierAccountDHLExpressCreateRequestParameters$Outbound = {
    user_accepted_terms_and_conditions: boolean;
};

/** @internal */
export const CarrierAccountDHLExpressCreateRequestParameters$outboundSchema: z.ZodType<
    CarrierAccountDHLExpressCreateRequestParameters$Outbound,
    z.ZodTypeDef,
    CarrierAccountDHLExpressCreateRequestParameters
> = z
    .object({
        userAcceptedTermsAndConditions: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            userAcceptedTermsAndConditions: "user_accepted_terms_and_conditions",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountDHLExpressCreateRequestParameters$ {
    /** @deprecated use `CarrierAccountDHLExpressCreateRequestParameters$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountDHLExpressCreateRequestParameters$inboundSchema;
    /** @deprecated use `CarrierAccountDHLExpressCreateRequestParameters$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountDHLExpressCreateRequestParameters$outboundSchema;
    /** @deprecated use `CarrierAccountDHLExpressCreateRequestParameters$Outbound` instead. */
    export type Outbound = CarrierAccountDHLExpressCreateRequestParameters$Outbound;
}
