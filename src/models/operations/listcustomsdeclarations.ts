/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListCustomsDeclarationsRequest = {
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100, default 5)
     */
    results?: number | undefined;
};

/** @internal */
export namespace ListCustomsDeclarationsRequest$ {
    export const inboundSchema: z.ZodType<ListCustomsDeclarationsRequest, z.ZodTypeDef, unknown> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(5),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
            };
        });

    export type Outbound = {
        page: number;
        results: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCustomsDeclarationsRequest> =
        z
            .object({
                page: z.number().int().default(1),
                results: z.number().int().default(5),
            })
            .transform((v) => {
                return {
                    page: v.page,
                    results: v.results,
                };
            });
}
