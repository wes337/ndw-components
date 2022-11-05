import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ndwc-text-area',
  styleUrl: 'text-area.scss',
})
export class TextArea {
  @Element() textarea: HTMLElement;
  @Prop() label: string;
  @Prop() hint: string;
  @Prop() note: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) readonly: boolean;
  @Prop({ reflect: true }) error: string;
  @Prop({ mutable: true }) value = '';
  @Prop() maxlength: number;
  @Prop() rows: number;

  constructor() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  private handleChange(event: InputEvent): void {
    const input = event.target as HTMLTextAreaElement;
    this.value = input.value;
  }

  private handleInput(event: InputEvent): void {
    const input = event.target as HTMLTextAreaElement;
    this.value = input.value;
  }

  private handleFocus(event: FocusEvent): void {
    const focusEvent = new FocusEvent('focus', event);
    Object.defineProperty(focusEvent, 'target', { writable: false, value: event.target });
    this.textarea.dispatchEvent(focusEvent);
  }

  private handleBlur(event: FocusEvent): void {
    const focusEvent = new FocusEvent('blur', event);
    Object.defineProperty(focusEvent, 'target', { writable: false, value: event.target });
    this.textarea.dispatchEvent(focusEvent);
  }

  render() {
    return (
      <Host>
        <label>
          <div class="header">
            {this.label?.length > 0 && <span class="label">{this.label}</span>}
            {this.note?.length > 0 && <span class="note">{this.note}</span>}
          </div>
          <div class="textarea">
            <textarea
              rows={this.rows}
              maxlength={this.maxlength > 0 && this.maxlength}
              onInput={this.handleInput}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              disabled={this.disabled}
              readonly={this.readonly}
            />
          </div>
          {this.error?.length > 0 && (
            <div class="error">
              <ndwc-icon icon="exclamation" size="sm"></ndwc-icon>
              <span>{this.error}</span>
            </div>
          )}
          <div class="footer">
            {this.hint?.length > 0 && <span>{this.hint}</span>}
            {this.maxlength > 0 && (
              <span class="maxlength">
                {this.value.length}/{this.maxlength}
              </span>
            )}
          </div>
        </label>
      </Host>
    );
  }
}
