/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Webhook = {
  /**
   * Type of event that triggers the webhook.
   */
  event: string;
  /**
   * URL webhook events are sent to.
   */
  url: string;
  /**
   * Determines whether the webhook is active or not.
   */
  active?: boolean | undefined;
  /**
   * Determines whether the webhook is a test webhook or not.
   */
  isTest?: boolean | undefined;
  /**
   * Timestamp of the creation of the webhook.
   */
  objectCreated?: Date | undefined;
  /**
   * Unique identifier of the webhook. This can be used to retrieve or delete the webhook.
   */
  objectId?: string | undefined;
  /**
   * Timestamp of the last update of the webhook.
   */
  objectUpdated?: Date | undefined;
  /**
   * Username of the user who created the webhook.
   */
  objectOwner?: string | undefined;
};

/** @internal */
export const Webhook$inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown> =
  z.object({
    event: z.string(),
    url: z.string(),
    active: z.boolean().optional(),
    is_test: z.boolean().optional(),
    object_created: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    object_id: z.string().optional(),
    object_updated: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    object_owner: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "is_test": "isTest",
      "object_created": "objectCreated",
      "object_id": "objectId",
      "object_updated": "objectUpdated",
      "object_owner": "objectOwner",
    });
  });

/** @internal */
export type Webhook$Outbound = {
  event: string;
  url: string;
  active?: boolean | undefined;
  is_test?: boolean | undefined;
  object_created?: string | undefined;
  object_id?: string | undefined;
  object_updated?: string | undefined;
  object_owner?: string | undefined;
};

/** @internal */
export const Webhook$outboundSchema: z.ZodType<
  Webhook$Outbound,
  z.ZodTypeDef,
  Webhook
> = z.object({
  event: z.string(),
  url: z.string(),
  active: z.boolean().optional(),
  isTest: z.boolean().optional(),
  objectCreated: z.date().transform(v => v.toISOString()).optional(),
  objectId: z.string().optional(),
  objectUpdated: z.date().transform(v => v.toISOString()).optional(),
  objectOwner: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    isTest: "is_test",
    objectCreated: "object_created",
    objectId: "object_id",
    objectUpdated: "object_updated",
    objectOwner: "object_owner",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Webhook$ {
  /** @deprecated use `Webhook$inboundSchema` instead. */
  export const inboundSchema = Webhook$inboundSchema;
  /** @deprecated use `Webhook$outboundSchema` instead. */
  export const outboundSchema = Webhook$outboundSchema;
  /** @deprecated use `Webhook$Outbound` instead. */
  export type Outbound = Webhook$Outbound;
}
