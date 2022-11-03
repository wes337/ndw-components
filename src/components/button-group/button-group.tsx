import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ndwc-button-group',
  styleUrl: 'button-group.scss',
})
export class ButtonGroup {
  @Prop({ reflect: true }) vertical: boolean;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
