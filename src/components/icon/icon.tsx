import { Component, Prop, h, Host } from '@stencil/core';
import SVGInject from '@iconfu/svg-inject';
import { S3_BUCKET_URL } from '../../constants';
import { NdwcIcon, NdwcIconSize, ICON_SIZE } from './icon.types';

@Component({
  tag: 'ndwc-icon',
  styleUrl: 'icon.scss',
})
export class Icon {
  @Prop() icon!: NdwcIcon | string;
  @Prop({ reflect: true }) size: NdwcIconSize = 'md';
  @Prop() color: string;

  private imgToSvg(event: Event) {
    SVGInject(event.target, {
      beforeInject: (_, svg: SVGElement) => {
        const offset = 4;
        svg.setAttribute('viewBox', `${offset} ${offset} 24 24`);
        return svg;
      },
    });
  }

  render() {
    return (
      <Host style={{ color: this.color }} aria-hidden="true">
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
