# LiveRateCreateRequestAddressFrom

The sender address, which includes your name, company name, street address, city, state, zip code, 
country, phone number, and email address (strings). Special characters should not be included in 
any address element, especially name, company, and email.

## Example Usage

```typescript
import { LiveRateCreateRequestAddressFrom } from "shippo/models/components";

let value: LiveRateCreateRequestAddressFrom = {
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
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `components.AddressCompleteCreateRequest`

```typescript
const value: components.AddressCompleteCreateRequest = /* values here */
```

