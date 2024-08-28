# Transactions
(*transactions*)

## Overview

A transaction is the purchase of a shipping label from a shipping provider for a specific service. You can print purchased labels and used them to ship a parcel with a carrier, such as USPS or FedEx.
<SchemaDefinition schemaRef="#/components/schemas/Transaction"/>

### Available Operations

* [list](#list) - List all shipping labels
* [create](#create) - Create a shipping label
* [get](#get) - Retrieve a shipping label

## list

Returns a list of all transaction objects.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.transactions.list({
    objectStatus: "SUCCESS",
    trackingStatus: "DELIVERED",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { transactionsList } from "shippo/funcs/transactionsList.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await transactionsList(shippo, {
    objectStatus: "SUCCESS",
    trackingStatus: "DELIVERED",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TransactionPaginatedList](../../models/components/transactionpaginatedlist.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## create

Creates a new transaction object and purchases the shipping label using a rate object that has previously been created. <br> OR <br> Creates a new transaction object and purchases the shipping label instantly using shipment details, an existing carrier account, and an existing service level token.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.transactions.create({
    async: false,
    labelFileType: "PDF_4x6",
    metadata: "Order ID #12345",
    rate: "ec9f0d3adc9441449c85d315f0997fd5",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { transactionsCreate } from "shippo/funcs/transactionsCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await transactionsCreate(shippo, {
    async: false,
    carrierAccount: "b741b99f95e841639b54272834bc478c",
    labelFileType: "PDF",
    metadata: "Order ID #12345",
    servicelevelToken: "usps_priority",
    shipment: {
      extra: {
        accountsReceivableCustomerAccount: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        appropriationNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        billOfLadingNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        cod: {
          amount: "5.5",
          currency: "USD",
          paymentMethod: "CASH",
        },
        codNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        customerReference: {
          refSort: 1,
        },
        dealerOrderNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        deptNumber: {
          refSort: 3,
        },
        fdaProductCode: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        insurance: {
          amount: "5.5",
          currency: "USD",
        },
        invoiceNumber: {
          refSort: 2,
        },
        manifestNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        modelNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        partNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        poNumber: {
          refSort: 2,
        },
        productionCode: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        purchaseRequestNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        rmaNumber: {
          refSort: 1,
        },
        salespersonNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        serialNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        storeNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
        transactionReferenceNumber: {
          prefix: "ABC",
          value: "value",
          refSort: 1,
        },
      },
      metadata: "Customer ID 123456",
      shipmentDate: "2021-03-22T12:00:00Z",
      addressFrom: "d799c2679e644279b59fe661ac8fa488",
      addressReturn: {
        name: "Shwan Ippotle",
        company: "Shippo",
        street1: "215 Clayton St.",
        street3: "",
        streetNo: "",
        city: "San Francisco",
        state: "CA",
        zip: "94117",
        country: "US",
        phone: "+1 555 341 9393",
        email: "shippotle@shippo.com",
        isResidential: true,
        metadata: "Customer ID 123456",
        validate: true,
      },
      addressTo: {
        name: "Shwan Ippotle",
        company: "Shippo",
        street1: "215 Clayton St.",
        street3: "",
        streetNo: "",
        city: "San Francisco",
        state: "CA",
        zip: "94117",
        country: "US",
        phone: "+1 555 341 9393",
        email: "shippotle@shippo.com",
        isResidential: true,
        metadata: "Customer ID 123456",
        validate: true,
      },
      customsDeclaration: {
        b13aFilingOption: "FILED_ELECTRONICALLY",
        certify: true,
        certifySigner: "Shawn Ippotle",
        contentsExplanation: "T-Shirt purchase",
        exporterIdentification: {
          eoriNumber: "PL123456790ABCDE",
          taxId: {
            number: "123456789",
            type: "EIN",
          },
        },
        invoice: "#123123",
        metadata: "Order ID #123123",
        addressImporter: {
          name: "Shwan Ippotle",
          company: "Shippo",
          street1: "Blumenstraße",
          street3: "",
          streetNo: "22",
          city: "München",
          state: "CA",
          zip: "80331",
          country: "DE",
          phone: "80331",
          email: "shippotle@shippo.com",
          isResidential: true,
        },
        contentsType: "MERCHANDISE",
        eelPfc: "NOEEI_30_37_a",
        incoterm: "DDP",
        items: [
          {
            description: "T-Shirt",
            massUnit: "lb",
            metadata: "Order ID \"123454\"",
            netWeight: "5",
            originCountry: "<value>",
            quantity: 20,
            skuCode: "HM-123",
            hsCode: "0901.21",
            valueAmount: "200",
            valueCurrency: "USD",
          },
        ],
        nonDeliveryOption: "RETURN",
        test: true,
      },
      carrierAccounts: [
        "065a4a8c10d24a34ab932163a1b87f52",
        "73f706f4bdb94b54a337563840ce52b0",
      ],
      parcels: [
  
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransactionRequestBody](../../models/operations/createtransactionrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transaction](../../models/components/transaction.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## get

Returns an existing transaction using an object ID.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.transactions.get("<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { transactionsGet } from "shippo/funcs/transactionsGet.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await transactionsGet(shippo, "<value>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the transaction to update                                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Transaction](../../models/components/transaction.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
