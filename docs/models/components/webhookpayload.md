# WebhookPayload

## Example Usage

```typescript
import { WebhookPayload } from "shippo/models/components";

let value: WebhookPayload = {
  data: {
    createdBy: {
      firstName: "Shwan",
      lastName: "Ippotle",
      username: "shippotle@shippo.com",
    },
    labelFileType: "PDF_4x6",
    labelUrl:
      "https://shippo-delivery.s3.amazonaws.com/70ae8117ee1749e393f249d5b77c45e0.pdf?Signature=vDw1ltcyGveVR1OQoUDdzC43BY8%3D&Expires=1437093830&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
    messages: [
      {
        source: "UPS",
        code: "carrier_timeout",
        text: "UPS API did not respond. Please try again in a few minutes.",
      },
    ],
    objectId: "915d94940ea54c3a80cbfa328722f5a1",
    objectOwner: "shippotle@shippo.com",
    parcel: "e94c7fdfdc7b495dbb390a28d929d90a",
    qrCodeUrl:
      "https://shippo-delivery.s3.amazonaws.com/96_qr_code.pdf?Signature=PEdWrp0mFWAGwJp7FW3b%2FeA2eyY%3D&Expires=1385930652&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
    rate: "ec9f0d3adc9441449c85d315f0997fd5",
    status: "SUCCESS",
    trackingNumber: "9499907123456123456781",
    trackingStatus: "DELIVERED",
    trackingUrlProvider:
      "https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=9499907123456123456781",
  },
};
```

## Supported Types

### `components.WebhookPayloadTrack`

```typescript
const value: components.WebhookPayloadTrack = /* values here */
```

### `components.WebhookPayloadBatch`

```typescript
const value: components.WebhookPayloadBatch = /* values here */
```

### `components.WebhookPayloadBatch`

```typescript
const value: components.WebhookPayloadBatch = /* values here */
```

### `components.WebhookPayloadTransaction`

```typescript
const value: components.WebhookPayloadTransaction = /* values here */
```

### `components.WebhookPayloadTransaction`

```typescript
const value: components.WebhookPayloadTransaction = /* values here */
```

