/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetShippoAccountRequest = {
    /**
     * Object ID of the ShippoAccount
     */
    shippoAccountId: string;
};

/** @internal */
export namespace GetShippoAccountRequest$ {
    export const inboundSchema: z.ZodType<GetShippoAccountRequest, z.ZodTypeDef, unknown> = z
        .object({
            ShippoAccountId: z.string(),
        })
        .transform((v) => {
            return {
                shippoAccountId: v.ShippoAccountId,
            };
        });

    export type Outbound = {
        ShippoAccountId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShippoAccountRequest> = z
        .object({
            shippoAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ShippoAccountId: v.shippoAccountId,
            };
        });
}
