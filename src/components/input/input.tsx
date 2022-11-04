import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ndwc-input',
  styleUrl: 'input.scss',
})
export class Input {
  @Element() input: HTMLElement;
  @Prop() label: string;
  @Prop() hint: string;
  @Prop({ reflect: true }) type = 'text';
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) readonly: boolean;
  @Prop({ reflect: true }) error: string;
  @Prop({ mutable: true }) value: string;
  @Prop() inputmode = 'text';
  @Prop() icon: string;

  constructor() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  private handleChange(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.input.dispatchEvent(event);
  }

  private handleInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.input.dispatchEvent(event);
  }

  private handleFocus(event: FocusEvent): void {
    this.input.dispatchEvent(event);
  }

  private handleBlur(event: FocusEvent): void {
    this.input.dispatchEvent(event);
  }

  render() {
    return (
      <Host>
        <label>
          {this.label?.length > 0 && <span>{this.label}</span>}
          <div class="input">
            {this.icon?.length > 0 && <ndwc-icon icon={this.icon} size="sm"></ndwc-icon>}
            <input
              class={this.icon?.length > 0 && 'icon'}
              type={this.type}
              disabled={this.disabled}
              readonly={this.readonly}
              value={this.value}
              inputmode={this.inputmode}
              aria-invalid={this.error?.length > 0}
              onInput={this.handleInput}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>
          {this.error?.length > 0 && (
            <div class="error">
              <ndwc-icon icon="exclamation" size="sm"></ndwc-icon>
              <span>{this.error}</span>
            </div>
          )}
          {this.hint?.length > 0 && <span>{this.hint}</span>}
        </label>
      </Host>
    );
  }
}
