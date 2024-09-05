/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    CoreRate,
    CoreRate$inboundSchema,
    CoreRate$Outbound,
    CoreRate$outboundSchema,
} from "./corerate.js";
import {
    LabelFileTypeEnum,
    LabelFileTypeEnum$inboundSchema,
    LabelFileTypeEnum$outboundSchema,
} from "./labelfiletypeenum.js";
import {
    ObjectStateEnum,
    ObjectStateEnum$inboundSchema,
    ObjectStateEnum$outboundSchema,
} from "./objectstateenum.js";
import {
    ResponseMessage,
    ResponseMessage$inboundSchema,
    ResponseMessage$Outbound,
    ResponseMessage$outboundSchema,
} from "./responsemessage.js";
import {
    TrackingStatusEnum,
    TrackingStatusEnum$inboundSchema,
    TrackingStatusEnum$outboundSchema,
} from "./trackingstatusenum.js";
import {
    TransactionStatusEnum,
    TransactionStatusEnum$inboundSchema,
    TransactionStatusEnum$outboundSchema,
} from "./transactionstatusenum.js";
import * as z from "zod";

/**
 * An object with details about the user who created the Transaction (purchased the label).
 *
 * @remarks
 * A value will be returned only for Transactions that can be associated with a specific user, e.g. when a logged-in
 * user purchases a label via the Shippo Web application; but not for Transactions purchased e.g. via the API using a ShippoToken,
 * which is associated with the account but not any specific user.
 */
export type CreatedBy = {
    firstName?: string | undefined;
    lastName?: string | undefined;
    username?: string | undefined;
};

/**
 * ID of the Rate object for which a Label has to be obtained.
 *
 * @remarks
 * If you purchase a label by calling the transaction endpoint without a rate (instalabel),
 * this field will be a simplified Rate object in the Transaction model returned from the POST request.
 * </br>Note, only rates less than 7 days old can be purchased to ensure up-to-date pricing.
 */
export type TransactionRate = CoreRate | string;

export type Transaction = {
    /**
     * A URL pointing to the commercial invoice as a 8.5x11 inch PDF file.
     *
     * @remarks
     * A value will only be returned if the Transactions has been processed successfully and if the shipment is international.
     */
    commercialInvoiceUrl?: string | undefined;
    createdBy?: CreatedBy | null | undefined;
    /**
     * The estimated time of arrival according to the carrier.
     */
    eta?: string | undefined;
    /**
     * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
     *
     * @remarks
     * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
     */
    labelFileType?: LabelFileTypeEnum | undefined;
    /**
     * A URL pointing directly to the label in the format you've set in your settings.
     *
     * @remarks
     * A value will only be returned if the Transactions has been processed successfully.
     */
    labelUrl?: string | undefined;
    messages?: Array<ResponseMessage> | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to
     *
     * @remarks
     * attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Date and time of Transaction creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given Transaction object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the Transaction object.
     */
    objectOwner?: string | undefined;
    /**
     * Indicates the validity of the enclosing object
     */
    objectState?: ObjectStateEnum | undefined;
    /**
     * Date and time of last Transaction update.
     */
    objectUpdated?: Date | undefined;
    /**
     * Object ID of the Parcel object that is being shipped.
     */
    parcel?: string | undefined;
    /**
     * A URL pointing directly to the QR code in PNG format.
     *
     * @remarks
     * A value will only be returned if requested using qr_code_requested flag and the carrier provides such an option.
     */
    qrCodeUrl?: string | undefined;
    /**
     * ID of the Rate object for which a Label has to be obtained.
     *
     * @remarks
     * If you purchase a label by calling the transaction endpoint without a rate (instalabel),
     * this field will be a simplified Rate object in the Transaction model returned from the POST request.
     * </br>Note, only rates less than 7 days old can be purchased to ensure up-to-date pricing.
     */
    rate?: CoreRate | string | undefined;
    /**
     * Indicates the status of the Transaction.
     */
    status?: TransactionStatusEnum | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * The carrier-specific tracking number that can be used to track the Shipment.
     *
     * @remarks
     * A value will only be returned if the Rate is for a trackable Shipment and if the Transactions has been processed successfully.
     */
    trackingNumber?: string | undefined;
    /**
     * Indicates the high level status of the shipment.
     */
    trackingStatus?: TrackingStatusEnum | undefined;
    /**
     * A link to track this item on the carrier-provided tracking website.
     *
     * @remarks
     * A value will only be returned if tracking is available and the carrier provides such a service.
     */
    trackingUrlProvider?: string | undefined;
};

/** @internal */
export const CreatedBy$inboundSchema: z.ZodType<CreatedBy, z.ZodTypeDef, unknown> = z
    .object({
        first_name: z.string().optional(),
        last_name: z.string().optional(),
        username: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            first_name: "firstName",
            last_name: "lastName",
        });
    });

/** @internal */
export type CreatedBy$Outbound = {
    first_name?: string | undefined;
    last_name?: string | undefined;
    username?: string | undefined;
};

/** @internal */
export const CreatedBy$outboundSchema: z.ZodType<CreatedBy$Outbound, z.ZodTypeDef, CreatedBy> = z
    .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        username: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            firstName: "first_name",
            lastName: "last_name",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatedBy$ {
    /** @deprecated use `CreatedBy$inboundSchema` instead. */
    export const inboundSchema = CreatedBy$inboundSchema;
    /** @deprecated use `CreatedBy$outboundSchema` instead. */
    export const outboundSchema = CreatedBy$outboundSchema;
    /** @deprecated use `CreatedBy$Outbound` instead. */
    export type Outbound = CreatedBy$Outbound;
}

/** @internal */
export const TransactionRate$inboundSchema: z.ZodType<TransactionRate, z.ZodTypeDef, unknown> =
    z.union([CoreRate$inboundSchema, z.string()]);

/** @internal */
export type TransactionRate$Outbound = CoreRate$Outbound | string;

/** @internal */
export const TransactionRate$outboundSchema: z.ZodType<
    TransactionRate$Outbound,
    z.ZodTypeDef,
    TransactionRate
> = z.union([CoreRate$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionRate$ {
    /** @deprecated use `TransactionRate$inboundSchema` instead. */
    export const inboundSchema = TransactionRate$inboundSchema;
    /** @deprecated use `TransactionRate$outboundSchema` instead. */
    export const outboundSchema = TransactionRate$outboundSchema;
    /** @deprecated use `TransactionRate$Outbound` instead. */
    export type Outbound = TransactionRate$Outbound;
}

/** @internal */
export const Transaction$inboundSchema: z.ZodType<Transaction, z.ZodTypeDef, unknown> = z
    .object({
        commercial_invoice_url: z.string().optional(),
        created_by: z.nullable(z.lazy(() => CreatedBy$inboundSchema)).optional(),
        eta: z.string().optional(),
        label_file_type: LabelFileTypeEnum$inboundSchema.optional(),
        label_url: z.string().optional(),
        messages: z.array(ResponseMessage$inboundSchema).optional(),
        metadata: z.string().optional(),
        object_created: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        object_id: z.string().optional(),
        object_owner: z.string().optional(),
        object_state: ObjectStateEnum$inboundSchema.optional(),
        object_updated: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        parcel: z.string().optional(),
        qr_code_url: z.string().optional(),
        rate: z.union([CoreRate$inboundSchema, z.string()]).optional(),
        status: TransactionStatusEnum$inboundSchema.optional(),
        test: z.boolean().optional(),
        tracking_number: z.string().optional(),
        tracking_status: TrackingStatusEnum$inboundSchema.optional(),
        tracking_url_provider: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            commercial_invoice_url: "commercialInvoiceUrl",
            created_by: "createdBy",
            label_file_type: "labelFileType",
            label_url: "labelUrl",
            object_created: "objectCreated",
            object_id: "objectId",
            object_owner: "objectOwner",
            object_state: "objectState",
            object_updated: "objectUpdated",
            qr_code_url: "qrCodeUrl",
            tracking_number: "trackingNumber",
            tracking_status: "trackingStatus",
            tracking_url_provider: "trackingUrlProvider",
        });
    });

/** @internal */
export type Transaction$Outbound = {
    commercial_invoice_url?: string | undefined;
    created_by?: CreatedBy$Outbound | null | undefined;
    eta?: string | undefined;
    label_file_type?: string | undefined;
    label_url?: string | undefined;
    messages?: Array<ResponseMessage$Outbound> | undefined;
    metadata?: string | undefined;
    object_created?: string | undefined;
    object_id?: string | undefined;
    object_owner?: string | undefined;
    object_state?: string | undefined;
    object_updated?: string | undefined;
    parcel?: string | undefined;
    qr_code_url?: string | undefined;
    rate?: CoreRate$Outbound | string | undefined;
    status?: string | undefined;
    test?: boolean | undefined;
    tracking_number?: string | undefined;
    tracking_status?: string | undefined;
    tracking_url_provider?: string | undefined;
};

/** @internal */
export const Transaction$outboundSchema: z.ZodType<
    Transaction$Outbound,
    z.ZodTypeDef,
    Transaction
> = z
    .object({
        commercialInvoiceUrl: z.string().optional(),
        createdBy: z.nullable(z.lazy(() => CreatedBy$outboundSchema)).optional(),
        eta: z.string().optional(),
        labelFileType: LabelFileTypeEnum$outboundSchema.optional(),
        labelUrl: z.string().optional(),
        messages: z.array(ResponseMessage$outboundSchema).optional(),
        metadata: z.string().optional(),
        objectCreated: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        objectId: z.string().optional(),
        objectOwner: z.string().optional(),
        objectState: ObjectStateEnum$outboundSchema.optional(),
        objectUpdated: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        parcel: z.string().optional(),
        qrCodeUrl: z.string().optional(),
        rate: z.union([CoreRate$outboundSchema, z.string()]).optional(),
        status: TransactionStatusEnum$outboundSchema.optional(),
        test: z.boolean().optional(),
        trackingNumber: z.string().optional(),
        trackingStatus: TrackingStatusEnum$outboundSchema.optional(),
        trackingUrlProvider: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            commercialInvoiceUrl: "commercial_invoice_url",
            createdBy: "created_by",
            labelFileType: "label_file_type",
            labelUrl: "label_url",
            objectCreated: "object_created",
            objectId: "object_id",
            objectOwner: "object_owner",
            objectState: "object_state",
            objectUpdated: "object_updated",
            qrCodeUrl: "qr_code_url",
            trackingNumber: "tracking_number",
            trackingStatus: "tracking_status",
            trackingUrlProvider: "tracking_url_provider",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Transaction$ {
    /** @deprecated use `Transaction$inboundSchema` instead. */
    export const inboundSchema = Transaction$inboundSchema;
    /** @deprecated use `Transaction$outboundSchema` instead. */
    export const outboundSchema = Transaction$outboundSchema;
    /** @deprecated use `Transaction$Outbound` instead. */
    export type Outbound = Transaction$Outbound;
}
