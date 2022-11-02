import { Component, Prop, h, Host } from '@stencil/core';
import { NwccLinkSize } from './link.types';

@Component({
  tag: 'ndwc-link',
  styleUrl: 'link.scss',
})
export class Link {
  @Prop() href: string;
  @Prop() external: boolean;
  @Prop() icon: string;
  @Prop({ reflect: true }) size: NwccLinkSize = 'md';

  render() {
    const iconSize = this.size === 'lg' ? 'md' : 'sm';

    return (
      <Host>
        <a href={this.href} target={this.external ? '_blank' : '_self'}>
          {this.icon && <ndwc-icon icon={this.icon} size={iconSize}></ndwc-icon>}
          <slot />
          {this.external && <ndwc-icon icon="outer-link" size={iconSize}></ndwc-icon>}
        </a>
      </Host>
    );
  }
}
