import { Component, Prop, h, Host } from '@stencil/core';
import SVGInject from '@iconfu/svg-inject';
import { S3_BUCKET_URL } from '../../constants';
import { NwccIcon, NwccIconSize, ICON_SIZE } from './icon.types';

@Component({
  tag: 'ndwc-icon',
  styleUrl: 'icon.scss',
})
export class Icon {
  @Prop() icon: NwccIcon | string = '';
  @Prop() size: NwccIconSize = 'md';
  @Prop() color = '';

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
          src={`${S3_BUCKET_URL}/icons/${this.icon}.svg`}
          alt=""
          width={ICON_SIZE[this.size]}
          height={ICON_SIZE[this.size]}
          onLoad={this.imgToSvg}
        />
      </Host>
    );
  }
}
