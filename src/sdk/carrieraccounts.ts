/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { carrierAccountsCreate } from "../funcs/carrierAccountsCreate.js";
import { carrierAccountsGet } from "../funcs/carrierAccountsGet.js";
import { carrierAccountsGetRegistrationStatus } from "../funcs/carrierAccountsGetRegistrationStatus.js";
import { carrierAccountsInitiateOauth2Signin } from "../funcs/carrierAccountsInitiateOauth2Signin.js";
import { carrierAccountsList } from "../funcs/carrierAccountsList.js";
import { carrierAccountsRegister } from "../funcs/carrierAccountsRegister.js";
import { carrierAccountsUpdate } from "../funcs/carrierAccountsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class CarrierAccounts extends ClientSDK {
    /**
     * List all carrier accounts
     *
     * @remarks
     * Returns a list of all carrier accounts connected to your Shippo account. These carrier accounts include both Shippo carrier accounts and your own carrier accounts that you have connected to your Shippo account.
     *
     * Additionally, you can get information about the service levels associated with each carrier account by passing in the `?service_levels=true` query parameter. <br>
     * Using it appends the property `service_levels` to each carrier account. <br>
     * By default, if the query parameter is omitted, the `service_levels` property will not be included in the response.
     */
    async list(
        request: operations.ListCarrierAccountsRequest,
        options?: RequestOptions
    ): Promise<components.CarrierAccountPaginatedList> {
        return unwrapAsync(carrierAccountsList(this, request, options));
    }

    /**
     * Create a new carrier account
     *
     * @remarks
     * Creates a new carrier account or connects an existing carrier account to the Shippo account.
     */
    async create(
        request: components.ConnectExistingOwnAccountRequest,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        return unwrapAsync(carrierAccountsCreate(this, request, options));
    }

    /**
     * Retrieve a carrier account
     *
     * @remarks
     * Returns an existing carrier account using an object ID.
     */
    async get(
        carrierAccountId: string,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        return unwrapAsync(carrierAccountsGet(this, carrierAccountId, options));
    }

    /**
     * Update a carrier account
     *
     * @remarks
     * Updates an existing carrier account object. The account_id and carrier can't be updated. This is because they form the unique identifier together.
     */
    async update(
        carrierAccountId: string,
        carrierAccountBase?: components.CarrierAccountBase | undefined,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        return unwrapAsync(
            carrierAccountsUpdate(this, carrierAccountId, carrierAccountBase, options)
        );
    }

    /**
     * Connect an existing carrier account using OAuth 2.0
     *
     * @remarks
     * Used by client applications to setup or reconnect an existing carrier account with carriers that support OAuth 2.0
     */
    async initiateOauth2Signin(
        carrierAccountObjectId: string,
        redirectUri: string,
        state?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.InitiateOauth2SigninResponse | undefined> {
        return unwrapAsync(
            carrierAccountsInitiateOauth2Signin(
                this,
                carrierAccountObjectId,
                redirectUri,
                state,
                options
            )
        );
    }

    /**
     * Add a Shippo carrier account
     *
     * @remarks
     * Adds a Shippo carrier account
     */
    async register(
        request: operations.RegisterCarrierAccountRequestBody,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        return unwrapAsync(carrierAccountsRegister(this, request, options));
    }

    /**
     * Get Carrier Registration status
     *
     * @remarks
     * Returns the registration status for the given account for the given carrier
     */
    async getRegistrationStatus(
        carrier: operations.Carrier,
        options?: RequestOptions
    ): Promise<components.CarrierAccountRegistrationStatus> {
        return unwrapAsync(carrierAccountsGetRegistrationStatus(this, carrier, options));
    }
}
