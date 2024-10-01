# UpdateCarrierAccountRequest

## Example Usage

```typescript
import { UpdateCarrierAccountRequest } from "shippo/models/operations";

let value: UpdateCarrierAccountRequest = {
  carrierAccountId: "<id>",
  carrierAccountBase: {
    accountId: "****",
    carrier: "usps",
    parameters: {
      firstName: "Scotty",
      lastName: "Stanton",
      phoneNumber: "(231) 944-6318 x1520",
      fromAddressSt: "<value>",
      fromAddressCity: "<value>",
      fromAddressState: "<value>",
      fromAddressZip: "<value>",
      fromAddressCountryIso2: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `carrierAccountId`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | Object ID of the carrier account                                               |
| `carrierAccountBase`                                                           | [components.CarrierAccountBase](../../models/components/carrieraccountbase.md) | :heavy_minus_sign:                                                             | Examples.                                                                      |