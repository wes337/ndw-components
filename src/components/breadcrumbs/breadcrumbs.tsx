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
        <nav class={{ dark: !!this.dark }}>
          <ol>
            {this.breadcrumbs.map((breadcrumb, index) => {
              const isLastBreadcrumb = index === this.breadcrumbs.length - 1;
              return (
                <li>
                  {isLastBreadcrumb ? (
                    <ndwc-text size="md" aria-current="page">
                      {breadcrumb.title}
                    </ndwc-text>
                  ) : (
                    <div>
                      <a href={breadcrumb.href} onClick={this.breadcrumbClicked.emit}>
                        {breadcrumb.title}
                      </a>
                      <ndwc-icon icon="chevron-right" size="sm"></ndwc-icon>
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
