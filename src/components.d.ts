/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Breadcrumb } from "./components/breadcrumbs/breadcrumbs.types";
import { NwccButtonVariant } from "./components/button/button.types";
import { NwccIcon, NwccIconSize } from "./components/icon/icon.types";
import { NwccLinkSize } from "./components/link/link.types";
import { NwccTextComponents, NwccTextSize, NwccTextWeight } from "./components/text/text.types";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NdwcBreadcrumbs {
        "breadcrumbs": Breadcrumb[];
        "dark": boolean;
    }
    interface NdwcButton {
        "compact": boolean;
        "dark": boolean;
        "disabled": boolean;
        "icon": string;
        "type": string;
        "variant": NwccButtonVariant;
    }
    interface NdwcButtonGroup {
        "vertical": boolean;
    }
    interface NdwcCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "error": boolean;
        "indeterminate": boolean;
        "name": string;
    }
    interface NdwcIcon {
        "color": string;
        "icon": NwccIcon | string;
        "size": NwccIconSize;
    }
    interface NdwcLink {
        "external": boolean;
        "href": string;
        "icon": string;
        "size": NwccLinkSize;
    }
    interface NdwcRichButton {
        "disabled": boolean;
        "icon": string;
        "label": string;
        "labelFirst": boolean;
    }
    interface NdwcText {
        "as": NwccTextComponents;
        "header": boolean;
        "size": NwccTextSize;
        "weight": NwccTextWeight;
    }
}
export interface NdwcBreadcrumbsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNdwcBreadcrumbsElement;
}
export interface NdwcCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNdwcCheckboxElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNdwcBreadcrumbsElement extends Components.NdwcBreadcrumbs, HTMLStencilElement {
    }
    var HTMLNdwcBreadcrumbsElement: {
        prototype: HTMLNdwcBreadcrumbsElement;
        new (): HTMLNdwcBreadcrumbsElement;
    };
    interface HTMLNdwcButtonElement extends Components.NdwcButton, HTMLStencilElement {
    }
    var HTMLNdwcButtonElement: {
        prototype: HTMLNdwcButtonElement;
        new (): HTMLNdwcButtonElement;
    };
    interface HTMLNdwcButtonGroupElement extends Components.NdwcButtonGroup, HTMLStencilElement {
    }
    var HTMLNdwcButtonGroupElement: {
        prototype: HTMLNdwcButtonGroupElement;
        new (): HTMLNdwcButtonGroupElement;
    };
    interface HTMLNdwcCheckboxElement extends Components.NdwcCheckbox, HTMLStencilElement {
    }
    var HTMLNdwcCheckboxElement: {
        prototype: HTMLNdwcCheckboxElement;
        new (): HTMLNdwcCheckboxElement;
    };
    interface HTMLNdwcIconElement extends Components.NdwcIcon, HTMLStencilElement {
    }
    var HTMLNdwcIconElement: {
        prototype: HTMLNdwcIconElement;
        new (): HTMLNdwcIconElement;
    };
    interface HTMLNdwcLinkElement extends Components.NdwcLink, HTMLStencilElement {
    }
    var HTMLNdwcLinkElement: {
        prototype: HTMLNdwcLinkElement;
        new (): HTMLNdwcLinkElement;
    };
    interface HTMLNdwcRichButtonElement extends Components.NdwcRichButton, HTMLStencilElement {
    }
    var HTMLNdwcRichButtonElement: {
        prototype: HTMLNdwcRichButtonElement;
        new (): HTMLNdwcRichButtonElement;
    };
    interface HTMLNdwcTextElement extends Components.NdwcText, HTMLStencilElement {
    }
    var HTMLNdwcTextElement: {
        prototype: HTMLNdwcTextElement;
        new (): HTMLNdwcTextElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ndwc-breadcrumbs": HTMLNdwcBreadcrumbsElement;
        "ndwc-button": HTMLNdwcButtonElement;
        "ndwc-button-group": HTMLNdwcButtonGroupElement;
        "ndwc-checkbox": HTMLNdwcCheckboxElement;
        "ndwc-icon": HTMLNdwcIconElement;
        "ndwc-link": HTMLNdwcLinkElement;
        "ndwc-rich-button": HTMLNdwcRichButtonElement;
        "ndwc-text": HTMLNdwcTextElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NdwcBreadcrumbs {
        "breadcrumbs"?: Breadcrumb[];
        "dark"?: boolean;
        "onBreadcrumbClicked"?: (event: NdwcBreadcrumbsCustomEvent<MouseEvent>) => void;
    }
    interface NdwcButton {
        "compact"?: boolean;
        "dark"?: boolean;
        "disabled"?: boolean;
        "icon"?: string;
        "type"?: string;
        "variant"?: NwccButtonVariant;
    }
    interface NdwcButtonGroup {
        "vertical"?: boolean;
    }
    interface NdwcCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "error"?: boolean;
        "indeterminate"?: boolean;
        "name"?: string;
        "onNdwcCheckboxBlur"?: (event: NdwcCheckboxCustomEvent<FocusEvent>) => void;
        "onNdwcCheckboxChange"?: (event: NdwcCheckboxCustomEvent<InputEvent>) => void;
    }
    interface NdwcIcon {
        "color"?: string;
        "icon"?: NwccIcon | string;
        "size"?: NwccIconSize;
    }
    interface NdwcLink {
        "external"?: boolean;
        "href"?: string;
        "icon"?: string;
        "size"?: NwccLinkSize;
    }
    interface NdwcRichButton {
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "labelFirst"?: boolean;
    }
    interface NdwcText {
        "as"?: NwccTextComponents;
        "header"?: boolean;
        "size"?: NwccTextSize;
        "weight"?: NwccTextWeight;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ndwc-breadcrumbs": NdwcBreadcrumbs;
        "ndwc-button": NdwcButton;
        "ndwc-button-group": NdwcButtonGroup;
        "ndwc-checkbox": NdwcCheckbox;
        "ndwc-icon": NdwcIcon;
        "ndwc-link": NdwcLink;
        "ndwc-rich-button": NdwcRichButton;
        "ndwc-text": NdwcText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ndwc-breadcrumbs": LocalJSX.NdwcBreadcrumbs & JSXBase.HTMLAttributes<HTMLNdwcBreadcrumbsElement>;
            "ndwc-button": LocalJSX.NdwcButton & JSXBase.HTMLAttributes<HTMLNdwcButtonElement>;
            "ndwc-button-group": LocalJSX.NdwcButtonGroup & JSXBase.HTMLAttributes<HTMLNdwcButtonGroupElement>;
            "ndwc-checkbox": LocalJSX.NdwcCheckbox & JSXBase.HTMLAttributes<HTMLNdwcCheckboxElement>;
            "ndwc-icon": LocalJSX.NdwcIcon & JSXBase.HTMLAttributes<HTMLNdwcIconElement>;
            "ndwc-link": LocalJSX.NdwcLink & JSXBase.HTMLAttributes<HTMLNdwcLinkElement>;
            "ndwc-rich-button": LocalJSX.NdwcRichButton & JSXBase.HTMLAttributes<HTMLNdwcRichButtonElement>;
            "ndwc-text": LocalJSX.NdwcText & JSXBase.HTMLAttributes<HTMLNdwcTextElement>;
        }
    }
}
