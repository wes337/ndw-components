import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { Breadcrumb } from './breadcrumbs.types';

@Component({
  tag: 'ndwc-breadcrumbs',
  styleUrl: 'breadcrumbs.scss',
})
export class Breadcrumbs {
  @Prop() breadcrumbs: Breadcrumb[];
  @Prop({ reflect: true }) dark = false;

  @Event() breadcrumbClicked: EventEmitter<MouseEvent>;

  render() {
    return (
      <Host>
        <nav class={{ dark: !!this.dark }} aria-label="Breadcrumb">
          <ol>
            {this.breadcrumbs.map((breadcrumb, index) => {
              const isLastBreadcrumb = index === this.breadcrumbs.length - 1;
              return (
                <li>
                  {isLastBreadcrumb ? (
                    <span aria-current="page">{breadcrumb.title}</span>
                  ) : (
                    <div>
                      <a href={breadcrumb.href} onClick={this.breadcrumbClicked.emit}>
                        {breadcrumb.title}
                      </a>
                      <ndwc-icon icon="chevron-right" size="small"></ndwc-icon>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Host>
    );
  }
}
