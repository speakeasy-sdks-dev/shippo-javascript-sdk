# Parcels

## Example Usage

```typescript
import { Parcels } from "shippo/models/components";

let value: Parcels = {
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
  template: "USPS_LargeFlatRateBox",
};
```

## Supported Types

### `components.ParcelCreateRequest`

```typescript
const value: components.ParcelCreateRequest = /* values here */
```

### `components.ParcelCreateFromTemplateRequest`

```typescript
const value: components.ParcelCreateFromTemplateRequest = /* values here */
```

### `string`

```typescript
const value: string = /* values here */
```

