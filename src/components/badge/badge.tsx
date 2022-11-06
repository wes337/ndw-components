import { Component, Prop, h, Host, Element } from '@stencil/core';
import { isNumberString } from '../../utils/utils';
import { NdwcBadgeVariant } from './badge.types';

@Component({
  tag: 'ndwc-badge',
  styleUrl: 'badge.scss',
})
export class Badge {
  @Element() badge: HTMLElement;
  @Prop({ reflect: true }) variant: NdwcBadgeVariant = 'warn';
  @Prop({ reflect: true }) muted: boolean;

  round: boolean;
  numeric: boolean;
  single: boolean;

  componentWillLoad(): void {
    const content = this.badge.textContent;

    this.round = content?.length === 0;
    this.single = content?.length === 1;
    this.numeric = isNumberString(content);
  }

  render() {
    return (
      <Host>
        <div class={{ round: this.round, single: this.single, numeric: this.numeric }}>
          <slot />
        </div>
      </Host>
    );
  }
}
