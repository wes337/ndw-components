import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ndwc-checkbox',
  styleUrl: 'checkbox.scss',
})
export class Checkbox {
  @Prop() name: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) error = false;
  @Prop({ reflect: true, mutable: true }) indeterminate = false;
  @Prop({ reflect: true, mutable: true }) checked = false;

  @Event() ndwcCheckboxChange: EventEmitter<InputEvent>;
  @Event() ndwcCheckboxBlur: EventEmitter<FocusEvent>;

  constructor() {
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(event: InputEvent): void {
    this.checked = (event.target as HTMLInputElement).checked;
    this.ndwcCheckboxChange.emit(event);
  }

  private getAriaChecked(): string {
    if (this.checked) {
      return this.indeterminate ? 'mixed' : 'true';
    }

    return 'false';
  }

  render() {
    return (
      <Host>
        <label>
          <input
            type="checkbox"
            name={this.name}
            disabled={this.disabled}
            checked={this.checked}
            aria-checked={this.getAriaChecked()}
            onChange={this.handleChange}
            onBlur={this.ndwcCheckboxBlur.emit}
          />
          <span></span>
          <slot />
        </label>
      </Host>
    );
  }
}
