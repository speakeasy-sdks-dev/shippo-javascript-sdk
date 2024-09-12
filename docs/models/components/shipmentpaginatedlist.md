# ShipmentPaginatedList

## Example Usage

```typescript
import { ShipmentPaginatedList } from "shippo/models/components";

let value: ShipmentPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=3&results=10                                    |
| `previous`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=1&results=10                                    |
| `results`                                                    | [components.Shipment](../../models/components/shipment.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |