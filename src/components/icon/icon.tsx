import { Component, Prop, h, Host, getAssetPath } from '@stencil/core';
import SVGInject from '@iconfu/svg-inject';
import { NwccIcon, NwccIconSize } from './icon.types';

@Component({
  tag: 'ndwc-icon',
  styleUrl: 'icon.scss',
})
export class Icon {
  @Prop() icon: NwccIcon | string = '';
  @Prop() size: NwccIconSize = 'medium';
  @Prop() color = '';

  private getIconDimensions(): number {
    switch (this.size) {
      case 'small':
        return 16;
      case 'medium':
        return 24;
      case 'large':
        return 32;
      default:
        return 24;
    }
  }

  private imgToSvg(event: Event) {
    SVGInject(event.target);
  }

  render() {
    if (this.icon.length === 0) {
      return null;
    }

    return (
      <Host style={{ color: this.color }}>
        <img
          src={getAssetPath(`../assets/icons/${this.icon}.svg`)}
          alt=""
          width={this.getIconDimensions()}
          height={this.getIconDimensions()}
          onLoad={this.imgToSvg}
        />
      </Host>
    );
  }
}
