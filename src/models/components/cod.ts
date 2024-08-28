/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Secured funds include money orders, certified cheques and others (see
 *
 * @remarks
 * <a href="https://www.ups.com/content/us/en/shipping/time/service/value_added/cod.html">UPS</a> for details).
 * If no payment_method inputted the value defaults to "ANY".)
 */
export const PaymentMethod = {
    SecuredFunds: "SECURED_FUNDS",
    Cash: "CASH",
    Any: "ANY",
} as const;
/**
 * Secured funds include money orders, certified cheques and others (see
 *
 * @remarks
 * <a href="https://www.ups.com/content/us/en/shipping/time/service/value_added/cod.html">UPS</a> for details).
 * If no payment_method inputted the value defaults to "ANY".)
 */
export type PaymentMethod = ClosedEnum<typeof PaymentMethod>;

/**
 * Specify collection on delivery details (UPS only).
 */
export type Cod = {
    /**
     * Amount to be collected.
     */
    amount?: string | undefined;
    /**
     * Currency for the amount to be collected. Currently only USD is supported for UPS.
     */
    currency?: string | undefined;
    /**
     * Secured funds include money orders, certified cheques and others (see
     *
     * @remarks
     * <a href="https://www.ups.com/content/us/en/shipping/time/service/value_added/cod.html">UPS</a> for details).
     * If no payment_method inputted the value defaults to "ANY".)
     */
    paymentMethod?: PaymentMethod | undefined;
};

/** @internal */
export const PaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PaymentMethod> =
    z.nativeEnum(PaymentMethod);

/** @internal */
export const PaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PaymentMethod> =
    PaymentMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethod$ {
    /** @deprecated use `PaymentMethod$inboundSchema` instead. */
    export const inboundSchema = PaymentMethod$inboundSchema;
    /** @deprecated use `PaymentMethod$outboundSchema` instead. */
    export const outboundSchema = PaymentMethod$outboundSchema;
}

/** @internal */
export const Cod$inboundSchema: z.ZodType<Cod, z.ZodTypeDef, unknown> = z
    .object({
        amount: z.string().optional(),
        currency: z.string().optional(),
        payment_method: PaymentMethod$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            payment_method: "paymentMethod",
        });
    });

/** @internal */
export type Cod$Outbound = {
    amount?: string | undefined;
    currency?: string | undefined;
    payment_method?: string | undefined;
};

/** @internal */
export const Cod$outboundSchema: z.ZodType<Cod$Outbound, z.ZodTypeDef, Cod> = z
    .object({
        amount: z.string().optional(),
        currency: z.string().optional(),
        paymentMethod: PaymentMethod$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            paymentMethod: "payment_method",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Cod$ {
    /** @deprecated use `Cod$inboundSchema` instead. */
    export const inboundSchema = Cod$inboundSchema;
    /** @deprecated use `Cod$outboundSchema` instead. */
    export const outboundSchema = Cod$outboundSchema;
    /** @deprecated use `Cod$Outbound` instead. */
    export type Outbound = Cod$Outbound;
}
