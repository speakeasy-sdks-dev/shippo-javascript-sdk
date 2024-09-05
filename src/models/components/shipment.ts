/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    Address,
    Address$inboundSchema,
    Address$Outbound,
    Address$outboundSchema,
} from "./address.js";
import {
    CustomsDeclaration,
    CustomsDeclaration$inboundSchema,
    CustomsDeclaration$Outbound,
    CustomsDeclaration$outboundSchema,
} from "./customsdeclaration.js";
import { Parcel, Parcel$inboundSchema, Parcel$Outbound, Parcel$outboundSchema } from "./parcel.js";
import { Rate, Rate$inboundSchema, Rate$Outbound, Rate$outboundSchema } from "./rate.js";
import {
    ResponseMessage,
    ResponseMessage$inboundSchema,
    ResponseMessage$Outbound,
    ResponseMessage$outboundSchema,
} from "./responsemessage.js";
import {
    ShipmentExtra,
    ShipmentExtra$inboundSchema,
    ShipmentExtra$Outbound,
    ShipmentExtra$outboundSchema,
} from "./shipmentextra.js";
import * as z from "zod";

/**
 * `Waiting` shipments have been successfully submitted but not yet been processed.
 *
 * @remarks
 * `Queued` shipments are currently being processed.
 * `Success` shipments have been processed successfully, meaning that rate generation has concluded.
 * `Error` does not occur currently and is reserved for future use.
 */
export const ShipmentStatus = {
    Error: "ERROR",
    Queued: "QUEUED",
    Success: "SUCCESS",
    Waiting: "WAITING",
} as const;
/**
 * `Waiting` shipments have been successfully submitted but not yet been processed.
 *
 * @remarks
 * `Queued` shipments are currently being processed.
 * `Success` shipments have been processed successfully, meaning that rate generation has concluded.
 * `Error` does not occur currently and is reserved for future use.
 */
export type ShipmentStatus = ClosedEnum<typeof ShipmentStatus>;

/**
 * Shipment represents the parcel as retrieved from the database
 */
export type Shipment = {
    /**
     * An object holding optional extra services to be requested.
     */
    extra?: ShipmentExtra | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata: string;
    /**
     * Date the shipment will be tendered to the carrier. Must be in the format `2014-01-18T00:35:03.463Z`.
     *
     * @remarks
     * Defaults to current date and time if no value is provided. Please note that some carriers require this value to
     * be in the future, on a working day, or similar.
     */
    shipmentDate?: string | undefined;
    /**
     * <a href="#tag/Addresses">Address</a> object of the sender / seller. Will be returned expanded by default.
     */
    addressFrom: Address;
    /**
     * ID of the Address object where the shipment will be sent back to if it is not delivered
     *
     * @remarks
     * (Only available for UPS, USPS, and Fedex shipments). <br/>
     * If this field is not set, your shipments will be returned to the address_from.
     */
    addressReturn?: Address | undefined;
    /**
     * <a href="#tag/Addresses">Address</a> object of the recipient / buyer. Will be returned expanded by default.
     */
    addressTo: Address;
    /**
     * An array of object_ids of the carrier account objects to be used for getting shipping rates for this shipment.
     *
     * @remarks
     * If no carrier account object_ids are set in this field, Shippo will attempt to generate rates using all the
     * carrier accounts that have the `active` field set.
     */
    carrierAccounts: Array<string>;
    customsDeclaration?: CustomsDeclaration | undefined;
    messages: Array<ResponseMessage>;
    /**
     * Date and time of Shipment creation.
     */
    objectCreated: Date;
    /**
     * Unique identifier of the given Shipment object.
     */
    objectId: string;
    /**
     * Username of the user who created the Shipment object.
     */
    objectOwner: string;
    /**
     * Date and time of last Shipment update.
     */
    objectUpdated: Date;
    /**
     * List of Parcel objects to be shipped.
     */
    parcels: Array<Parcel>;
    /**
     * An array with all available rates. If <code>async</code> has been set to <code>false</code> in the request,
     *
     * @remarks
     * this will be populated with all available rates in the response. Otherwise rates will be created
     * asynchronously and this array will initially be empty.
     */
    rates: Array<Rate>;
    /**
     * `Waiting` shipments have been successfully submitted but not yet been processed.
     *
     * @remarks
     * `Queued` shipments are currently being processed.
     * `Success` shipments have been processed successfully, meaning that rate generation has concluded.
     * `Error` does not occur currently and is reserved for future use.
     */
    status: ShipmentStatus;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
};

/** @internal */
export const ShipmentStatus$inboundSchema: z.ZodNativeEnum<typeof ShipmentStatus> =
    z.nativeEnum(ShipmentStatus);

/** @internal */
export const ShipmentStatus$outboundSchema: z.ZodNativeEnum<typeof ShipmentStatus> =
    ShipmentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShipmentStatus$ {
    /** @deprecated use `ShipmentStatus$inboundSchema` instead. */
    export const inboundSchema = ShipmentStatus$inboundSchema;
    /** @deprecated use `ShipmentStatus$outboundSchema` instead. */
    export const outboundSchema = ShipmentStatus$outboundSchema;
}

/** @internal */
export const Shipment$inboundSchema: z.ZodType<Shipment, z.ZodTypeDef, unknown> = z
    .object({
        extra: ShipmentExtra$inboundSchema.optional(),
        metadata: z.string(),
        shipment_date: z.string().optional(),
        address_from: Address$inboundSchema,
        address_return: Address$inboundSchema.optional(),
        address_to: Address$inboundSchema,
        carrier_accounts: z.array(z.string()),
        customs_declaration: CustomsDeclaration$inboundSchema.optional(),
        messages: z.array(ResponseMessage$inboundSchema),
        object_created: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        object_id: z.string(),
        object_owner: z.string(),
        object_updated: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        parcels: z.array(Parcel$inboundSchema),
        rates: z.array(Rate$inboundSchema),
        status: ShipmentStatus$inboundSchema,
        test: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            shipment_date: "shipmentDate",
            address_from: "addressFrom",
            address_return: "addressReturn",
            address_to: "addressTo",
            carrier_accounts: "carrierAccounts",
            customs_declaration: "customsDeclaration",
            object_created: "objectCreated",
            object_id: "objectId",
            object_owner: "objectOwner",
            object_updated: "objectUpdated",
        });
    });

/** @internal */
export type Shipment$Outbound = {
    extra?: ShipmentExtra$Outbound | undefined;
    metadata: string;
    shipment_date?: string | undefined;
    address_from: Address$Outbound;
    address_return?: Address$Outbound | undefined;
    address_to: Address$Outbound;
    carrier_accounts: Array<string>;
    customs_declaration?: CustomsDeclaration$Outbound | undefined;
    messages: Array<ResponseMessage$Outbound>;
    object_created: string;
    object_id: string;
    object_owner: string;
    object_updated: string;
    parcels: Array<Parcel$Outbound>;
    rates: Array<Rate$Outbound>;
    status: string;
    test?: boolean | undefined;
};

/** @internal */
export const Shipment$outboundSchema: z.ZodType<Shipment$Outbound, z.ZodTypeDef, Shipment> = z
    .object({
        extra: ShipmentExtra$outboundSchema.optional(),
        metadata: z.string(),
        shipmentDate: z.string().optional(),
        addressFrom: Address$outboundSchema,
        addressReturn: Address$outboundSchema.optional(),
        addressTo: Address$outboundSchema,
        carrierAccounts: z.array(z.string()),
        customsDeclaration: CustomsDeclaration$outboundSchema.optional(),
        messages: z.array(ResponseMessage$outboundSchema),
        objectCreated: z.date().transform((v) => v.toISOString()),
        objectId: z.string(),
        objectOwner: z.string(),
        objectUpdated: z.date().transform((v) => v.toISOString()),
        parcels: z.array(Parcel$outboundSchema),
        rates: z.array(Rate$outboundSchema),
        status: ShipmentStatus$outboundSchema,
        test: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            shipmentDate: "shipment_date",
            addressFrom: "address_from",
            addressReturn: "address_return",
            addressTo: "address_to",
            carrierAccounts: "carrier_accounts",
            customsDeclaration: "customs_declaration",
            objectCreated: "object_created",
            objectId: "object_id",
            objectOwner: "object_owner",
            objectUpdated: "object_updated",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Shipment$ {
    /** @deprecated use `Shipment$inboundSchema` instead. */
    export const inboundSchema = Shipment$inboundSchema;
    /** @deprecated use `Shipment$outboundSchema` instead. */
    export const outboundSchema = Shipment$outboundSchema;
    /** @deprecated use `Shipment$Outbound` instead. */
    export type Outbound = Shipment$Outbound;
}
