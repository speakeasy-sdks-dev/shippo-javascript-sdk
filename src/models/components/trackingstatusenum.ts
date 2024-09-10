/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Indicates the high level status of the shipment.
 */
export const TrackingStatusEnum = {
  Unknown: "UNKNOWN",
  PreTransit: "PRE_TRANSIT",
  Transit: "TRANSIT",
  Delivered: "DELIVERED",
  Returned: "RETURNED",
  Failure: "FAILURE",
} as const;
/**
 * Indicates the high level status of the shipment.
 */
export type TrackingStatusEnum = ClosedEnum<typeof TrackingStatusEnum>;

/** @internal */
export const TrackingStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof TrackingStatusEnum
> = z.nativeEnum(TrackingStatusEnum);

/** @internal */
export const TrackingStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof TrackingStatusEnum
> = TrackingStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingStatusEnum$ {
  /** @deprecated use `TrackingStatusEnum$inboundSchema` instead. */
  export const inboundSchema = TrackingStatusEnum$inboundSchema;
  /** @deprecated use `TrackingStatusEnum$outboundSchema` instead. */
  export const outboundSchema = TrackingStatusEnum$outboundSchema;
}
