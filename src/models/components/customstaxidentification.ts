/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Type of tax identification.
 *
 * @remarks
 * * `EIN` - Employer Identification Number, also known as a Federal Tax Identification Number.
 * * `VAT` - Value Added Tax identification number.
 * * `IOSS` - Import One-Stop Shop
 * * `ARN` - Australian Taxation Office Reference Number
 */
export const CustomsTaxIdentificationType = {
  Ein: "EIN",
  Vat: "VAT",
  Ioss: "IOSS",
  Arn: "ARN",
} as const;
/**
 * Type of tax identification.
 *
 * @remarks
 * * `EIN` - Employer Identification Number, also known as a Federal Tax Identification Number.
 * * `VAT` - Value Added Tax identification number.
 * * `IOSS` - Import One-Stop Shop
 * * `ARN` - Australian Taxation Office Reference Number
 */
export type CustomsTaxIdentificationType = ClosedEnum<
  typeof CustomsTaxIdentificationType
>;

/**
 * Tax identification that may be required to ship in certain countries. Typically used to assess duties on
 *
 * @remarks
 * goods that are crossing a border.
 */
export type CustomsTaxIdentification = {
  /**
   * Tax identification number.
   */
  number?: string | undefined;
  /**
   * Type of tax identification.
   *
   * @remarks
   * * `EIN` - Employer Identification Number, also known as a Federal Tax Identification Number.
   * * `VAT` - Value Added Tax identification number.
   * * `IOSS` - Import One-Stop Shop
   * * `ARN` - Australian Taxation Office Reference Number
   */
  type?: CustomsTaxIdentificationType | undefined;
};

/** @internal */
export const CustomsTaxIdentificationType$inboundSchema: z.ZodNativeEnum<
  typeof CustomsTaxIdentificationType
> = z.nativeEnum(CustomsTaxIdentificationType);

/** @internal */
export const CustomsTaxIdentificationType$outboundSchema: z.ZodNativeEnum<
  typeof CustomsTaxIdentificationType
> = CustomsTaxIdentificationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomsTaxIdentificationType$ {
  /** @deprecated use `CustomsTaxIdentificationType$inboundSchema` instead. */
  export const inboundSchema = CustomsTaxIdentificationType$inboundSchema;
  /** @deprecated use `CustomsTaxIdentificationType$outboundSchema` instead. */
  export const outboundSchema = CustomsTaxIdentificationType$outboundSchema;
}

/** @internal */
export const CustomsTaxIdentification$inboundSchema: z.ZodType<
  CustomsTaxIdentification,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.string().optional(),
  type: CustomsTaxIdentificationType$inboundSchema.optional(),
});

/** @internal */
export type CustomsTaxIdentification$Outbound = {
  number?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const CustomsTaxIdentification$outboundSchema: z.ZodType<
  CustomsTaxIdentification$Outbound,
  z.ZodTypeDef,
  CustomsTaxIdentification
> = z.object({
  number: z.string().optional(),
  type: CustomsTaxIdentificationType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomsTaxIdentification$ {
  /** @deprecated use `CustomsTaxIdentification$inboundSchema` instead. */
  export const inboundSchema = CustomsTaxIdentification$inboundSchema;
  /** @deprecated use `CustomsTaxIdentification$outboundSchema` instead. */
  export const outboundSchema = CustomsTaxIdentification$outboundSchema;
  /** @deprecated use `CustomsTaxIdentification$Outbound` instead. */
  export type Outbound = CustomsTaxIdentification$Outbound;
}
