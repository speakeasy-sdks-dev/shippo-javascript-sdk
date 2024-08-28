/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { manifestsCreate } from "../funcs/manifestsCreate.js";
import { manifestsGet } from "../funcs/manifestsGet.js";
import { manifestsList } from "../funcs/manifestsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Manifests extends ClientSDK {
    /**
     * List all manifests
     *
     * @remarks
     * Returns a list of all manifest objects.
     */
    async list(
        page?: number | undefined,
        results?: number | undefined,
        options?: RequestOptions
    ): Promise<components.ManifestPaginatedList> {
        return unwrapAsync(manifestsList(this, page, results, options));
    }

    /**
     * Create a new manifest
     *
     * @remarks
     * Creates a new manifest object.
     */
    async create(
        request: components.ManifestCreateRequest,
        options?: RequestOptions
    ): Promise<components.Manifest> {
        return unwrapAsync(manifestsCreate(this, request, options));
    }

    /**
     * Retrieve a manifest
     *
     * @remarks
     * Returns an existing manifest using an object ID.
     */
    async get(manifestId: string, options?: RequestOptions): Promise<components.Manifest> {
        return unwrapAsync(manifestsGet(this, manifestId, options));
    }
}
