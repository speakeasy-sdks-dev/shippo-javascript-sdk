/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * Contains details regarding the service level for the carrier account.
 */
export type CarrierAccountServiceLevel = {
    /**
     * Service level name, e.g. `Priority Mail` or `FedEx Ground®`.
     *
     * @remarks
     * A service level commonly defines the transit time of a Shipment (e.g., Express vs. Standard), along with other properties.
     * These names vary depending on the provider.<br>
     * See <a href="#tag/Service-Levels">Service Levels</a>.
     */
    name?: string | undefined;
    /**
     * Service level token, e.g. `usps_priority` or `fedex_ground`.<br>
     *
     * @remarks
     * See <a href="#tag/Service-Levels">Service Levels</a>.
     */
    token?: string | undefined;
    /**
     * Whether or not the service level supports return labels.
     */
    supportsReturnLabels?: boolean | undefined;
};

/** @internal */
export const CarrierAccountServiceLevel$inboundSchema: z.ZodType<
    CarrierAccountServiceLevel,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string().optional(),
        token: z.string().optional(),
        supports_return_labels: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            supports_return_labels: "supportsReturnLabels",
        });
    });

/** @internal */
export type CarrierAccountServiceLevel$Outbound = {
    name?: string | undefined;
    token?: string | undefined;
    supports_return_labels?: boolean | undefined;
};

/** @internal */
export const CarrierAccountServiceLevel$outboundSchema: z.ZodType<
    CarrierAccountServiceLevel$Outbound,
    z.ZodTypeDef,
    CarrierAccountServiceLevel
> = z
    .object({
        name: z.string().optional(),
        token: z.string().optional(),
        supportsReturnLabels: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            supportsReturnLabels: "supports_return_labels",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountServiceLevel$ {
    /** @deprecated use `CarrierAccountServiceLevel$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountServiceLevel$inboundSchema;
    /** @deprecated use `CarrierAccountServiceLevel$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountServiceLevel$outboundSchema;
    /** @deprecated use `CarrierAccountServiceLevel$Outbound` instead. */
    export type Outbound = CarrierAccountServiceLevel$Outbound;
}
