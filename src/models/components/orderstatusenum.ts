/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Current state of the order. See the <a href="https://docs.goshippo.com/docs/orders/orders/">orders tutorial</a>
 *
 * @remarks
 * for the logic of how the status is handled.
 */
export const OrderStatusEnum = {
  Unknown: "UNKNOWN",
  Awaitpay: "AWAITPAY",
  Paid: "PAID",
  Refunded: "REFUNDED",
  Cancelled: "CANCELLED",
  PartiallyFulfilled: "PARTIALLY_FULFILLED",
  Shipped: "SHIPPED",
} as const;
/**
 * Current state of the order. See the <a href="https://docs.goshippo.com/docs/orders/orders/">orders tutorial</a>
 *
 * @remarks
 * for the logic of how the status is handled.
 */
export type OrderStatusEnum = ClosedEnum<typeof OrderStatusEnum>;

/** @internal */
export const OrderStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof OrderStatusEnum
> = z.nativeEnum(OrderStatusEnum);

/** @internal */
export const OrderStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof OrderStatusEnum
> = OrderStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderStatusEnum$ {
  /** @deprecated use `OrderStatusEnum$inboundSchema` instead. */
  export const inboundSchema = OrderStatusEnum$inboundSchema;
  /** @deprecated use `OrderStatusEnum$outboundSchema` instead. */
  export const outboundSchema = OrderStatusEnum$outboundSchema;
}
