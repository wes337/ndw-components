import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'ndwc-round-button',
  styleUrl: 'round-button.scss',
})
export class RoundButton {
  @Prop({ reflect: true }) disabled = false;
  @Prop() icon!: string;

  @Watch('disabled')
  warnIfDisabled(disabled: boolean): void {
    if (disabled) {
      console.warn('Avoid disabling round buttons. No disabled styles exist for round buttons.');
    }
  }

  render() {
    return (
      <Host>
        <button type="button" disabled={this.disabled}>
          <div>
            <ndwc-icon icon={this.icon} size="md"></ndwc-icon>
          </div>
          <slot />
        </button>
      </Host>
    );
  }
}
