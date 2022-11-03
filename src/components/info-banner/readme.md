# ndwc-info-banner



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `action` | `action`  |             | `string`  | `undefined` |
| `label`  | `label`   |             | `string`  | `undefined` |
| `soft`   | `soft`    |             | `boolean` | `undefined` |


## Events

| Event           | Description | Type                      |
| --------------- | ----------- | ------------------------- |
| `actionClicked` |             | `CustomEvent<MouseEvent>` |


## Dependencies

### Depends on

- [ndwc-icon](../icon)
- [ndwc-button](../button)

### Graph
```mermaid
graph TD;
  ndwc-info-banner --> ndwc-icon
  ndwc-info-banner --> ndwc-button
  ndwc-button --> ndwc-icon
  style ndwc-info-banner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
