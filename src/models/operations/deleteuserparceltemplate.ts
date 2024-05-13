/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteUserParcelTemplateRequest = {
    /**
     * Object ID of the user parcel template
     */
    userParcelTemplateObjectId: string;
};

export type DeleteUserParcelTemplateResponse = {};

/** @internal */
export namespace DeleteUserParcelTemplateRequest$ {
    export const inboundSchema: z.ZodType<DeleteUserParcelTemplateRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                UserParcelTemplateObjectId: z.string(),
            })
            .transform((v) => {
                return {
                    userParcelTemplateObjectId: v.UserParcelTemplateObjectId,
                };
            });

    export type Outbound = {
        UserParcelTemplateObjectId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteUserParcelTemplateRequest
    > = z
        .object({
            userParcelTemplateObjectId: z.string(),
        })
        .transform((v) => {
            return {
                UserParcelTemplateObjectId: v.userParcelTemplateObjectId,
            };
        });
}

/** @internal */
export namespace DeleteUserParcelTemplateResponse$ {
    export const inboundSchema: z.ZodType<DeleteUserParcelTemplateResponse, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteUserParcelTemplateResponse
    > = z.object({});
}
