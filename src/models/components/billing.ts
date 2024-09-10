/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Party to be billed. (Leave blank for DHL Germany.)
 */
export const Type = {
  Sender: "SENDER",
  Recipient: "RECIPIENT",
  ThirdParty: "THIRD_PARTY",
  ThirdPartyConsignee: "THIRD_PARTY_CONSIGNEE",
  Collect: "COLLECT",
} as const;
/**
 * Party to be billed. (Leave blank for DHL Germany.)
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * Specify billing details (UPS, FedEx, and DHL Germany only).
 */
export type Billing = {
  /**
   * Account number to be billed. (For DHL Germany, leave this field blank.)
   */
  account?: string | undefined;
  /**
   * Country iso2 code of account number to be billed (required for UPS third party billing only).
   */
  country?: string | undefined;
  /**
   * 2 digit code used to override your default participation code associated with your DHL Germany account.
   */
  participationCode?: string | undefined;
  /**
   * Party to be billed. (Leave blank for DHL Germany.)
   */
  type?: Type | undefined;
  /**
   * ZIP code of account number to be billed (required for UPS if there is a zip on the billing account).
   */
  zip?: string | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const Billing$inboundSchema: z.ZodType<Billing, z.ZodTypeDef, unknown> =
  z.object({
    account: z.string().optional(),
    country: z.string().optional(),
    participation_code: z.string().optional(),
    type: Type$inboundSchema.optional(),
    zip: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "participation_code": "participationCode",
    });
  });

/** @internal */
export type Billing$Outbound = {
  account?: string | undefined;
  country?: string | undefined;
  participation_code?: string | undefined;
  type?: string | undefined;
  zip?: string | undefined;
};

/** @internal */
export const Billing$outboundSchema: z.ZodType<
  Billing$Outbound,
  z.ZodTypeDef,
  Billing
> = z.object({
  account: z.string().optional(),
  country: z.string().optional(),
  participationCode: z.string().optional(),
  type: Type$outboundSchema.optional(),
  zip: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    participationCode: "participation_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Billing$ {
  /** @deprecated use `Billing$inboundSchema` instead. */
  export const inboundSchema = Billing$inboundSchema;
  /** @deprecated use `Billing$outboundSchema` instead. */
  export const outboundSchema = Billing$outboundSchema;
  /** @deprecated use `Billing$Outbound` instead. */
  export type Outbound = Billing$Outbound;
}
