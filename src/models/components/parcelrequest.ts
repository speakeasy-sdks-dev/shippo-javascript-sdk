/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DistanceUnitEnum, DistanceUnitEnum$ } from "./distanceunitenum";
import { ParcelExtra, ParcelExtra$ } from "./parcelextra";
import { ParcelTemplateEnumSet, ParcelTemplateEnumSet$ } from "./parceltemplateenumset";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum";
import * as z from "zod";

export type ParcelRequest = {
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit: DistanceUnitEnum;
    /**
     * An object holding optional extra services to be requested for each parcel in a multi-piece shipment.
     *
     * @remarks
     * See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.
     */
    extra?: ParcelExtra | undefined;
    /**
     * Required if template is not specified. Height of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    height: string;
    /**
     * Required if template is not specified. Length of the Parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    length: string;
    /**
     * The unit used for weight.
     */
    massUnit: WeightUnitEnum;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * If template is passed, `length`, `width`, `height`, and `distance_unit` are not required
     */
    template?: ParcelTemplateEnumSet | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * Weight of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    weight: string;
    /**
     * Required if template is not specified. Width of the Parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    width: string;
};

/** @internal */
export namespace ParcelRequest$ {
    export const inboundSchema: z.ZodType<ParcelRequest, z.ZodTypeDef, unknown> = z
        .object({
            distance_unit: DistanceUnitEnum$,
            extra: ParcelExtra$.inboundSchema.optional(),
            height: z.string(),
            length: z.string(),
            mass_unit: WeightUnitEnum$,
            metadata: z.string().optional(),
            template: ParcelTemplateEnumSet$.inboundSchema.optional(),
            test: z.boolean().optional(),
            weight: z.string(),
            width: z.string(),
        })
        .transform((v) => {
            return {
                distanceUnit: v.distance_unit,
                ...(v.extra === undefined ? null : { extra: v.extra }),
                height: v.height,
                length: v.length,
                massUnit: v.mass_unit,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.template === undefined ? null : { template: v.template }),
                ...(v.test === undefined ? null : { test: v.test }),
                weight: v.weight,
                width: v.width,
            };
        });

    export type Outbound = {
        distance_unit: DistanceUnitEnum;
        extra?: ParcelExtra$.Outbound | undefined;
        height: string;
        length: string;
        mass_unit: WeightUnitEnum;
        metadata?: string | undefined;
        template?: ParcelTemplateEnumSet$.Outbound | undefined;
        test?: boolean | undefined;
        weight: string;
        width: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParcelRequest> = z
        .object({
            distanceUnit: DistanceUnitEnum$,
            extra: ParcelExtra$.outboundSchema.optional(),
            height: z.string(),
            length: z.string(),
            massUnit: WeightUnitEnum$,
            metadata: z.string().optional(),
            template: ParcelTemplateEnumSet$.outboundSchema.optional(),
            test: z.boolean().optional(),
            weight: z.string(),
            width: z.string(),
        })
        .transform((v) => {
            return {
                distance_unit: v.distanceUnit,
                ...(v.extra === undefined ? null : { extra: v.extra }),
                height: v.height,
                length: v.length,
                mass_unit: v.massUnit,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.template === undefined ? null : { template: v.template }),
                ...(v.test === undefined ? null : { test: v.test }),
                weight: v.weight,
                width: v.width,
            };
        });
}
