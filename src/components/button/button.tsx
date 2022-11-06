import { Component, Prop, h, Host } from '@stencil/core';
import { NdwcButtonVariant, NdwcButtonVariants } from './button.types';

@Component({
  tag: 'ndwc-button',
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() variant: NdwcButtonVariant = 'primary';
  @Prop({ reflect: true }) disabled = false;
  @Prop() type = 'button';
  @Prop() compact = false;
  @Prop() dark = false;
  @Prop() icon: string;

  render() {
    const variant = NdwcButtonVariants.includes(this.variant) ? this.variant : 'primary';

    return (
      <Host>
        <button
          class={{
            [variant]: true,
            dark: !!this.dark,
            compact: !!this.compact,
          }}
          type={this.type}
          disabled={this.disabled}
        >
          {this.icon?.length > 0 && <ndwc-icon icon={this.icon}></ndwc-icon>}
          <slot />
        </button>
      </Host>
    );
  }
}
