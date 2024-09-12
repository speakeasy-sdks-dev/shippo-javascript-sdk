/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsCreate } from "../funcs/transactionsCreate.js";
import { transactionsGet } from "../funcs/transactionsGet.js";
import { transactionsList } from "../funcs/transactionsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Transactions extends ClientSDK {
  /**
   * List all shipping labels
   *
   * @remarks
   * Returns a list of all transaction objects.
   */
  async list(
    request: operations.ListTransactionsRequest,
    options?: RequestOptions,
  ): Promise<components.TransactionPaginatedList> {
    return unwrapAsync(transactionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a shipping label
   *
   * @remarks
   * Creates a new transaction object and purchases the shipping label using a rate object that has previously been created. <br> OR <br> Creates a new transaction object and purchases the shipping label instantly using shipment details, an existing carrier account, and an existing service level token.
   */
  async create(
    request: operations.CreateTransactionRequestBody,
    options?: RequestOptions,
  ): Promise<components.Transaction> {
    return unwrapAsync(transactionsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a shipping label
   *
   * @remarks
   * Returns an existing transaction using an object ID.
   */
  async get(
    transactionId: string,
    options?: RequestOptions,
  ): Promise<components.Transaction> {
    return unwrapAsync(transactionsGet(
      this,
      transactionId,
      options,
    ));
  }
}
