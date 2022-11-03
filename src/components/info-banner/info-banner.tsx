import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ndwc-info-banner',
  styleUrl: 'info-banner.scss',
})
export class InfoBanner {
  @Prop() label: string;
  @Prop() action: string;

  render() {
    return (
      <Host>
        <ndwc-icon icon="additional-info" size="md"></ndwc-icon>
        <div>
          {this.label?.length > 0 && <span>{this.label}</span>}
          <slot></slot>
          {this.action?.length > 0 && (
            <ndwc-button variant="tertiary" compact>
              {this.action}
            </ndwc-button>
          )}
        </div>
      </Host>
    );
  }
}
