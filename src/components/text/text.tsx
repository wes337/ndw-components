import { Component, Prop, h, Host } from '@stencil/core';
import { NwccTextSize, NwccTextWeight, NwccTextComponents } from './text.types';

@Component({
  tag: 'ndwc-text',
  styleUrl: 'text.scss',
})
export class Text {
  @Prop({ reflect: true }) size: NwccTextSize = 'md';
  @Prop({ reflect: true }) weight: NwccTextWeight = 'regular';
  @Prop({ reflect: true }) header: boolean;
  @Prop() as: NwccTextComponents = 'p';

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
