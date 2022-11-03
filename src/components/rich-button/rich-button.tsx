import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ndwc-rich-button',
  styleUrl: 'rich-button.scss',
})
export class RichButton {
  @Prop({ reflect: true }) disabled = false;
  @Prop() label: string;
  @Prop({ reflect: true }) labelFirst: boolean;
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <button type="button" disabled={this.disabled}>
          {this.icon?.length > 0 && <ndwc-icon icon={this.icon} size="md"></ndwc-icon>}
          <div>
            <slot />
            {this.label?.length > 0 && <span>{this.label}</span>}
          </div>
        </button>
      </Host>
    );
  }
}
