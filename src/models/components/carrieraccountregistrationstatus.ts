/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CarrierAccountRegistrationStatus = {
    carrierAccount?: string | undefined;
    objectCreated?: Date | undefined;
    objectOwner?: string | undefined;
    objectUpdated?: Date | undefined;
    status?: string | undefined;
};

/** @internal */
export const CarrierAccountRegistrationStatus$inboundSchema: z.ZodType<
    CarrierAccountRegistrationStatus,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        carrier_account: z.string().optional(),
        object_created: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        object_owner: z.string().optional(),
        object_updated: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        status: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            carrier_account: "carrierAccount",
            object_created: "objectCreated",
            object_owner: "objectOwner",
            object_updated: "objectUpdated",
        });
    });

/** @internal */
export type CarrierAccountRegistrationStatus$Outbound = {
    carrier_account?: string | undefined;
    object_created?: string | undefined;
    object_owner?: string | undefined;
    object_updated?: string | undefined;
    status?: string | undefined;
};

/** @internal */
export const CarrierAccountRegistrationStatus$outboundSchema: z.ZodType<
    CarrierAccountRegistrationStatus$Outbound,
    z.ZodTypeDef,
    CarrierAccountRegistrationStatus
> = z
    .object({
        carrierAccount: z.string().optional(),
        objectCreated: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        objectOwner: z.string().optional(),
        objectUpdated: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        status: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            carrierAccount: "carrier_account",
            objectCreated: "object_created",
            objectOwner: "object_owner",
            objectUpdated: "object_updated",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountRegistrationStatus$ {
    /** @deprecated use `CarrierAccountRegistrationStatus$inboundSchema` instead. */
    export const inboundSchema = CarrierAccountRegistrationStatus$inboundSchema;
    /** @deprecated use `CarrierAccountRegistrationStatus$outboundSchema` instead. */
    export const outboundSchema = CarrierAccountRegistrationStatus$outboundSchema;
    /** @deprecated use `CarrierAccountRegistrationStatus$Outbound` instead. */
    export type Outbound = CarrierAccountRegistrationStatus$Outbound;
}
