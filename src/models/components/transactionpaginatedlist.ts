/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Transaction, Transaction$ } from "./transaction";
import * as z from "zod";

export type TransactionPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Transaction> | undefined;
};

/** @internal */
export namespace TransactionPaginatedList$ {
    export const inboundSchema: z.ZodType<TransactionPaginatedList, z.ZodTypeDef, unknown> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Transaction$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Transaction$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionPaginatedList> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Transaction$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}
