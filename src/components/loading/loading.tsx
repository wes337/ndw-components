import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ndwc-loading',
  styleUrl: 'loading.scss',
})
export class Loading {
  @Prop({ reflect: true }) small: boolean;

  render() {
    return (
      <Host>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Host>
    );
  }
}
