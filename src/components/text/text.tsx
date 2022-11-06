import { Component, Prop, h, Host } from '@stencil/core';
import { NdwcTextSize, NdwcTextWeight, NdwcTextComponents } from './text.types';

@Component({
  tag: 'ndwc-text',
  styleUrl: 'text.scss',
})
export class Text {
  @Prop({ reflect: true }) size: NdwcTextSize = 'md';
  @Prop({ reflect: true }) weight: NdwcTextWeight = 'regular';
  @Prop({ reflect: true }) header: boolean;
  @Prop() as: NdwcTextComponents = 'p';

  render() {
    const Component = this.as;

    return (
      <Host>
        <Component>
          <slot />
        </Component>
      </Host>
    );
  }
}
