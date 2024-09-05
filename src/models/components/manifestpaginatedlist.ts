/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Manifest,
    Manifest$inboundSchema,
    Manifest$Outbound,
    Manifest$outboundSchema,
} from "./manifest.js";
import * as z from "zod";

export type ManifestPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Manifest> | undefined;
};

/** @internal */
export const ManifestPaginatedList$inboundSchema: z.ZodType<
    ManifestPaginatedList,
    z.ZodTypeDef,
    unknown
> = z.object({
    next: z.string().optional(),
    previous: z.string().optional(),
    results: z.array(Manifest$inboundSchema).optional(),
});

/** @internal */
export type ManifestPaginatedList$Outbound = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Manifest$Outbound> | undefined;
};

/** @internal */
export const ManifestPaginatedList$outboundSchema: z.ZodType<
    ManifestPaginatedList$Outbound,
    z.ZodTypeDef,
    ManifestPaginatedList
> = z.object({
    next: z.string().optional(),
    previous: z.string().optional(),
    results: z.array(Manifest$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ManifestPaginatedList$ {
    /** @deprecated use `ManifestPaginatedList$inboundSchema` instead. */
    export const inboundSchema = ManifestPaginatedList$inboundSchema;
    /** @deprecated use `ManifestPaginatedList$outboundSchema` instead. */
    export const outboundSchema = ManifestPaginatedList$outboundSchema;
    /** @deprecated use `ManifestPaginatedList$Outbound` instead. */
    export type Outbound = ManifestPaginatedList$Outbound;
}
