# BatchShipmentCreateRequest

## Example Usage

```typescript
import { BatchShipmentCreateRequest } from "shippo/models/components";

let value: BatchShipmentCreateRequest = {
  carrierAccount: "a4391cd4ab974f478f55dc08b5c8e3b3",
  metadata: "SHIPMENT #1",
  servicelevelToken: "fedex_ground",
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
    addressReturn: "d799c2679e644279b59fe661ac8fa488",
    addressTo: "d799c2679e644279b59fe661ac8fa489",
    customsDeclaration: {
      b13aFilingOption: "FILED_ELECTRONICALLY",
      certify: true,
      certifySigner: "Shawn Ippotle",
      contentsExplanation: "T-Shirt purchase",
      dutiesPayor: {
        account: "2323434543",
        type: "THIRD_PARTY",
        address: {
          name: "Patrick Kavanagh",
          zip: "80331",
          country: "DE",
        },
      },
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
      {
        extra: {
          cod: {
            amount: "5.5",
            currency: "USD",
            paymentMethod: "CASH",
          },
          insurance: {
            amount: "5.5",
            content: "Laptop",
            currency: "USD",
            provider: "UPS",
          },
        },
        metadata: "Customer ID 123456",
        massUnit: "lb",
        weight: "1",
        distanceUnit: "in",
        height: "1",
        length: "1",
        width: "1",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `carrierAccount`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                     | Object ID of the carrier account to be used for this shipment (will override batch default)                                                                                                                                            | a4391cd4ab974f478f55dc08b5c8e3b3                                                                                                                                                                                                       |
| `metadata`                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                     | A string of up to 100 characters that can be filled with any additional information you want <br/>to attach to the object.                                                                                                             | SHIPMENT #1                                                                                                                                                                                                                            |
| `servicelevelToken`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                     | A token that sets the shipping method for the batch, overriding the batch default. <br/>Servicelevel tokens can be found <a href="#tag/Service-Levels">in this list</a> <br/>or <a href="#operation/ListCarrierAccounts">at this endpoint</a>. | fedex_ground                                                                                                                                                                                                                           |
| `shipment`                                                                                                                                                                                                                             | [components.ShipmentCreateRequest](../../models/components/shipmentcreaterequest.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                        |