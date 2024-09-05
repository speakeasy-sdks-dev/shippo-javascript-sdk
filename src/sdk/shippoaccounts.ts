/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { shippoAccountsCreate } from "../funcs/shippoAccountsCreate.js";
import { shippoAccountsGet } from "../funcs/shippoAccountsGet.js";
import { shippoAccountsList } from "../funcs/shippoAccountsList.js";
import { shippoAccountsUpdate } from "../funcs/shippoAccountsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ShippoAccounts extends ClientSDK {
    /**
     * List all Shippo Accounts
     *
     * @remarks
     * Returns a list of Shippo Accounts objects
     */
    async list(
        page?: number | undefined,
        results?: number | undefined,
        options?: RequestOptions
    ): Promise<components.ShippoAccountPaginatedList> {
        return unwrapAsync(shippoAccountsList(this, page, results, options));
    }

    /**
     * Create a Shippo Account
     *
     * @remarks
     * Creates a Shippo Account object
     */
    async create(
        request: components.ShippoAccountUpdateRequest,
        options?: RequestOptions
    ): Promise<components.ShippoAccount> {
        return unwrapAsync(shippoAccountsCreate(this, request, options));
    }

    /**
     * Retrieve a Shippo Account
     *
     * @remarks
     * Returns a Shippo Account using an object ID
     */
    async get(
        shippoAccountId: string,
        options?: RequestOptions
    ): Promise<components.ShippoAccount> {
        return unwrapAsync(shippoAccountsGet(this, shippoAccountId, options));
    }

    /**
     * Update a Shippo Account
     *
     * @remarks
     * Updates a Shippo Account object
     */
    async update(
        shippoAccountId: string,
        shippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest | undefined,
        options?: RequestOptions
    ): Promise<components.ShippoAccount> {
        return unwrapAsync(
            shippoAccountsUpdate(this, shippoAccountId, shippoAccountUpdateRequest, options)
        );
    }
}
