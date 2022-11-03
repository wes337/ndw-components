# ndwc-input



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `disabled`  | `disabled`  |             | `boolean` | `undefined` |
| `error`     | `error`     |             | `string`  | `undefined` |
| `hint`      | `hint`      |             | `string`  | `undefined` |
| `inputmode` | `inputmode` |             | `string`  | `'text'`    |
| `label`     | `label`     |             | `string`  | `undefined` |
| `readonly`  | `readonly`  |             | `boolean` | `undefined` |
| `type`      | `type`      |             | `string`  | `'text'`    |
| `value`     | `value`     |             | `string`  | `undefined` |


## Events

| Event          | Description | Type                         |
| -------------- | ----------- | ---------------------------- |
| `inputBlur`    |             | `CustomEvent<FocusEvent>`    |
| `inputChange`  |             | `CustomEvent<InputEvent>`    |
| `inputFocus`   |             | `CustomEvent<FocusEvent>`    |
| `inputKeyDown` |             | `CustomEvent<KeyboardEvent>` |


## Dependencies

### Depends on

- [ndwc-icon](../icon)

### Graph
```mermaid
graph TD;
  ndwc-input --> ndwc-icon
  style ndwc-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*