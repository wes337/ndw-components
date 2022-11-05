import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

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
  @Prop({ mutable: true }) value = '';
  @Prop() inputmode = 'text';
  @Prop() icon: string;
  @Prop() clearable: boolean;

  @Event() clear: EventEmitter;

  constructor() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  private handleChange(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  private handleInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  private handleFocus(event: FocusEvent): void {
    const focusEvent = new FocusEvent('focus', event);
    Object.defineProperty(focusEvent, 'target', { writable: false, value: event.target });
    this.input.dispatchEvent(focusEvent);
  }

  private handleBlur(event: FocusEvent): void {
    const focusEvent = new FocusEvent('blur', event);
    Object.defineProperty(focusEvent, 'target', { writable: false, value: event.target });
    this.input.dispatchEvent(focusEvent);
  }

  private handleClear(): void {
    this.clear.emit();
    this.value = '';
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.handleClear();
    }
  }

  render() {
    return (
      <Host>
        <label>
          {this.label?.length > 0 && <span>{this.label}</span>}
          <div class="input">
            {this.icon?.length > 0 && <ndwc-icon icon={this.icon} size="sm"></ndwc-icon>}
            <input
              class={{
                icon: this.icon?.length > 0,
                clearable: this.value?.length > 0 && this.clearable,
              }}
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
              onKeyDown={this.handleKeydown}
            />
            {this.value?.length > 0 && this.clearable && (
              <button onClick={this.handleClear}>
                <ndwc-icon icon="dismiss-filled" size="sm"></ndwc-icon>
              </button>
            )}
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
