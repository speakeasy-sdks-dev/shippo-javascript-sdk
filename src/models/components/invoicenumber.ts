/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Specify the invoice number field on the label (FedEx only).
 */
export type InvoiceNumber = {
    /**
     * Custom prefix for invoice number field (ZPL labels only). Up to 11 characters, including trailing
     *
     * @remarks
     * spaces. Empty string indicates removal of default prefix. To use the default prefix, do not include
     * this property.
     */
    prefix?: string | undefined;
    /**
     * Optional text to be printed on the shipping label for invoice number. Up to 40 characters. If
     *
     * @remarks
     * provided, this will be used on the label instead of shipment.customs_declaration.invoice.
     */
    value?: string | undefined;
};

/** @internal */
export namespace InvoiceNumber$ {
    export const inboundSchema: z.ZodType<InvoiceNumber, z.ZodTypeDef, unknown> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        prefix?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceNumber> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
