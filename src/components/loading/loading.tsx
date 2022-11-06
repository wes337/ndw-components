import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ndwc-loading',
  styleUrl: 'loading.scss',
})
export class Loading {
  @Prop({ reflect: true }) small: boolean;
  @Prop() label: string;

  render() {
    return (
      <Host aria-role="status" aria-live="polite" aria-label={this.label || 'Loading'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Host>
    );
  }
}
