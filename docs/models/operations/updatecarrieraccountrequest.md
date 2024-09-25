# UpdateCarrierAccountRequest

## Example Usage

```typescript
import { UpdateCarrierAccountRequest } from "shippo/models/operations";

let value: UpdateCarrierAccountRequest = {
  carrierAccountId: "<value>",
  carrierAccountBase: {
    accountId: "****",
    carrier: "usps",
    parameters: {
      accountNumber: "94567e",
      aiaCountryIso2: "US",
      billingAddressCity: "San Francisco",
      billingAddressCountryIso2: "US",
      billingAddressState: "CA",
      billingAddressStreet1: "731 Market St",
      billingAddressStreet2: "STE 200",
      billingAddressZip: "94103",
      collecCountryIso2: "US",
      collecZip: "94103",
      company: "Shippo",
      currencyCode: "USD",
      email: "hippo@shippo.com",
      fullName: "Shippo Meister",
      hasInvoice: false,
      invoiceControlid: "1234",
      invoiceDate: "20210529",
      invoiceNumber: "1112234",
      invoiceValue: "11.23",
      phone: "1112223333",
      title: "Manager",
      upsAgreements: false,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `carrierAccountId`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | Object ID of the carrier account                                               |
| `carrierAccountBase`                                                           | [components.CarrierAccountBase](../../models/components/carrieraccountbase.md) | :heavy_minus_sign:                                                             | Examples.                                                                      |