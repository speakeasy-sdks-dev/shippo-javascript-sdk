/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Webhook,
  Webhook$inboundSchema,
  Webhook$Outbound,
  Webhook$outboundSchema,
} from "./webhook.js";

export type WebhookPaginatedList = {
  next?: string | undefined;
  previous?: string | undefined;
  count?: number | undefined;
  results?: Array<Webhook> | undefined;
};

/** @internal */
export const WebhookPaginatedList$inboundSchema: z.ZodType<
  WebhookPaginatedList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  count: z.number().int().optional(),
  results: z.array(Webhook$inboundSchema).optional(),
});

/** @internal */
export type WebhookPaginatedList$Outbound = {
  next?: string | undefined;
  previous?: string | undefined;
  count?: number | undefined;
  results?: Array<Webhook$Outbound> | undefined;
};

/** @internal */
export const WebhookPaginatedList$outboundSchema: z.ZodType<
  WebhookPaginatedList$Outbound,
  z.ZodTypeDef,
  WebhookPaginatedList
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  count: z.number().int().optional(),
  results: z.array(Webhook$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookPaginatedList$ {
  /** @deprecated use `WebhookPaginatedList$inboundSchema` instead. */
  export const inboundSchema = WebhookPaginatedList$inboundSchema;
  /** @deprecated use `WebhookPaginatedList$outboundSchema` instead. */
  export const outboundSchema = WebhookPaginatedList$outboundSchema;
  /** @deprecated use `WebhookPaginatedList$Outbound` instead. */
  export type Outbound = WebhookPaginatedList$Outbound;
}
