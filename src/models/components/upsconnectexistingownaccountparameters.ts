/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * An array of additional parameters for the account, such as e.g. password or token.
 *
 * @remarks
 * Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a> page for the parameters per carrier.<br>
 * To protect account information, this field will be masked in any API response.
 */
export type UPSConnectExistingOwnAccountParameters = {
    /**
     * The UPS account number
     */
    accountNumber: string;
    /**
     * Only required if has_invoice is true. Country associated with the account that issued the invoice
     */
    aiaCountryIso2?: string | undefined;
    billingAddressCity: string;
    billingAddressCountryIso2: string;
    billingAddressState: string;
    billingAddressStreet1: string;
    /**
     * Empty string acceptable for billing_address_street2
     */
    billingAddressStreet2?: string | undefined;
    billingAddressZip: string;
    collecCountryIso2: string;
    /**
     * Zip code of the collection/pickup address
     */
    collecZip: string;
    /**
     * Company name. Full name is acceptable in this field if the user has no company name
     */
    company: string;
    /**
     * Only required if has_invoice is true. 3-letter currency code associated with invoice_value
     */
    currencyCode?: string | undefined;
    email: string;
    fullName: string;
    /**
     * true if user has been issued a UPS invoice within the past 90 days for the US or Canada; and 45 days for any other countries. User can use data from any of the last 3 invoices
     */
    hasInvoice: boolean;
    /**
     * Only required if aia_country_iso2 is US and has_invoice is true.
     */
    invoiceControlid?: string | undefined;
    /**
     * Only required if has_invoice is true. Date the invoice was issued. yyyymmdd format
     */
    invoiceDate?: string | undefined;
    invoiceNumber?: string | undefined;
    /**
     * Only required if has_invoice is true. Max 16 digits before decimal and 2 digits after decimal
     */
    invoiceValue?: string | undefined;
    phone: string;
    /**
     * User's title, e.g. including but not limited to Manager, Doctor, Artist, Engineer, Mr, Ms, Mrs, Mx
     */
    title: string;
    /**
     * Whether the user agrees to the UPS terms and conditions or not. Error 400 will be returned if passed in as false
     */
    upsAgreements: boolean;
};

/** @internal */
export const UPSConnectExistingOwnAccountParameters$inboundSchema: z.ZodType<
    UPSConnectExistingOwnAccountParameters,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        account_number: z.string(),
        aia_country_iso2: z.string().optional(),
        billing_address_city: z.string(),
        billing_address_country_iso2: z.string(),
        billing_address_state: z.string(),
        billing_address_street1: z.string(),
        billing_address_street2: z.string().optional(),
        billing_address_zip: z.string(),
        collec_country_iso2: z.string(),
        collec_zip: z.string(),
        company: z.string(),
        currency_code: z.string().optional(),
        email: z.string(),
        full_name: z.string(),
        has_invoice: z.boolean(),
        invoice_controlid: z.string().optional(),
        invoice_date: z.string().optional(),
        invoice_number: z.string().optional(),
        invoice_value: z.string().optional(),
        phone: z.string(),
        title: z.string(),
        ups_agreements: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            account_number: "accountNumber",
            aia_country_iso2: "aiaCountryIso2",
            billing_address_city: "billingAddressCity",
            billing_address_country_iso2: "billingAddressCountryIso2",
            billing_address_state: "billingAddressState",
            billing_address_street1: "billingAddressStreet1",
            billing_address_street2: "billingAddressStreet2",
            billing_address_zip: "billingAddressZip",
            collec_country_iso2: "collecCountryIso2",
            collec_zip: "collecZip",
            currency_code: "currencyCode",
            full_name: "fullName",
            has_invoice: "hasInvoice",
            invoice_controlid: "invoiceControlid",
            invoice_date: "invoiceDate",
            invoice_number: "invoiceNumber",
            invoice_value: "invoiceValue",
            ups_agreements: "upsAgreements",
        });
    });

/** @internal */
export type UPSConnectExistingOwnAccountParameters$Outbound = {
    account_number: string;
    aia_country_iso2?: string | undefined;
    billing_address_city: string;
    billing_address_country_iso2: string;
    billing_address_state: string;
    billing_address_street1: string;
    billing_address_street2?: string | undefined;
    billing_address_zip: string;
    collec_country_iso2: string;
    collec_zip: string;
    company: string;
    currency_code?: string | undefined;
    email: string;
    full_name: string;
    has_invoice: boolean;
    invoice_controlid?: string | undefined;
    invoice_date?: string | undefined;
    invoice_number?: string | undefined;
    invoice_value?: string | undefined;
    phone: string;
    title: string;
    ups_agreements: boolean;
};

/** @internal */
export const UPSConnectExistingOwnAccountParameters$outboundSchema: z.ZodType<
    UPSConnectExistingOwnAccountParameters$Outbound,
    z.ZodTypeDef,
    UPSConnectExistingOwnAccountParameters
> = z
    .object({
        accountNumber: z.string(),
        aiaCountryIso2: z.string().optional(),
        billingAddressCity: z.string(),
        billingAddressCountryIso2: z.string(),
        billingAddressState: z.string(),
        billingAddressStreet1: z.string(),
        billingAddressStreet2: z.string().optional(),
        billingAddressZip: z.string(),
        collecCountryIso2: z.string(),
        collecZip: z.string(),
        company: z.string(),
        currencyCode: z.string().optional(),
        email: z.string(),
        fullName: z.string(),
        hasInvoice: z.boolean(),
        invoiceControlid: z.string().optional(),
        invoiceDate: z.string().optional(),
        invoiceNumber: z.string().optional(),
        invoiceValue: z.string().optional(),
        phone: z.string(),
        title: z.string(),
        upsAgreements: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            accountNumber: "account_number",
            aiaCountryIso2: "aia_country_iso2",
            billingAddressCity: "billing_address_city",
            billingAddressCountryIso2: "billing_address_country_iso2",
            billingAddressState: "billing_address_state",
            billingAddressStreet1: "billing_address_street1",
            billingAddressStreet2: "billing_address_street2",
            billingAddressZip: "billing_address_zip",
            collecCountryIso2: "collec_country_iso2",
            collecZip: "collec_zip",
            currencyCode: "currency_code",
            fullName: "full_name",
            hasInvoice: "has_invoice",
            invoiceControlid: "invoice_controlid",
            invoiceDate: "invoice_date",
            invoiceNumber: "invoice_number",
            invoiceValue: "invoice_value",
            upsAgreements: "ups_agreements",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UPSConnectExistingOwnAccountParameters$ {
    /** @deprecated use `UPSConnectExistingOwnAccountParameters$inboundSchema` instead. */
    export const inboundSchema = UPSConnectExistingOwnAccountParameters$inboundSchema;
    /** @deprecated use `UPSConnectExistingOwnAccountParameters$outboundSchema` instead. */
    export const outboundSchema = UPSConnectExistingOwnAccountParameters$outboundSchema;
    /** @deprecated use `UPSConnectExistingOwnAccountParameters$Outbound` instead. */
    export type Outbound = UPSConnectExistingOwnAccountParameters$Outbound;
}
