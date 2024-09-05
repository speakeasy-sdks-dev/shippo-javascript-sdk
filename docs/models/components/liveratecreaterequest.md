# LiveRateCreateRequest

## Example Usage

```typescript
import { LiveRateCreateRequest } from "shippo/models/components";

let value: LiveRateCreateRequest = {
    addressFrom: "<value>",
    addressTo: "<value>",
    lineItems: [
        {
            currency: "USD",
            manufactureCountry: "US",
            maxDeliveryTime: new Date("2016-07-23T00:00:00Z"),
            maxShipTime: new Date("2016-07-23T00:00:00Z"),
            quantity: 20,
            sku: "HM-123",
            title: "Hippo Magazines",
            totalPrice: "12.1",
            variantTitle: "June Edition",
            weight: "0.4",
            weightUnit: "lb",
            objectId: "abf7d5675d744b6ea9fdb6f796b28f28",
        },
    ],
    parcel: {
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
        objectCreated: new Date("2014-07-09T02:19:13.174Z"),
        objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
        objectOwner: "shippotle@shippo.com",
        objectState: "VALID",
        objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
    },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addressFrom`                                                                                                                                                                                                                                                                 | *components.LiveRateCreateRequestAddressFrom*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                            | The sender address, which includes your name, company name, street address, city, state, zip code, <br/>country, phone number, and email address (strings). Special characters should not be included in <br/>any address element, especially name, company, and email.       |                                                                                                                                                                                                                                                                               |
| `addressTo`                                                                                                                                                                                                                                                                   | *components.LiveRateCreateRequestAddressTo*                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                            | The recipient address, which includes the recipient's name, company name, street address, city, state, zip code, <br/>country, phone number, and email address (strings). Special characters should not be included in <br/>any address element, especially name, company, and email. |                                                                                                                                                                                                                                                                               |
| `lineItems`                                                                                                                                                                                                                                                                   | [components.LineItem](../../models/components/lineitem.md)[]                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                            | Array of Line Item objects                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                               |
| `parcel`                                                                                                                                                                                                                                                                      | *components.LiveRateCreateRequestParcel*                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                            | Object ID for an existing User Parcel Template OR a fully formed Parcel object.                                                                                                                                                                                               | 5df144dca289442cv7a06                                                                                                                                                                                                                                                         |