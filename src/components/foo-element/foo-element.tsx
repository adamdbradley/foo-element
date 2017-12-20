import { Component, State } from '@stencil/core';

class CEWithEvent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<p>hello from ce</p>`;
    this.addEventListener('click', this.onClick);
  }
  onClick() {
    this.dispatchEvent(new CustomEvent('lowercaseevent'));
    this.dispatchEvent(new CustomEvent('kebab-event'));
    this.dispatchEvent(new CustomEvent('camelEvent'));
    this.dispatchEvent(new CustomEvent('CAPSevent'));
    this.dispatchEvent(new CustomEvent('PascalEvent'));
  }
}

customElements.define('ce-with-event', CEWithEvent);


@Component({
  tag: 'foo-element',
  styleUrl: 'foo-element.scss',
  shadow: true
})
export class FooElement {
  @State() lowercaseHandled: boolean = false;
  @State() kebabHandled: boolean = false;
  @State() camelHandled: boolean = false;
  @State() capsHandled: boolean = false;
  @State() pascalHandled: boolean = false;

  handleLowercaseEvent() {
    this.lowercaseHandled = true;
  }
  handleKebabEvent() {
    this.kebabHandled = true;
  }
  handleCamelEvent() {
    this.camelHandled = true;
  }
  handleCapsEvent() {
    this.capsHandled = true;
  }
  handlePascalEvent() {
    this.pascalHandled = true;
  }

  render() {
    return (
      <div>
        <div>{this.lowercaseHandled.toString()}</div>
        <div>{this.kebabHandled.toString()}</div>
        <div>{this.camelHandled.toString()}</div>
        <div>{this.capsHandled.toString()}</div>
        <div>{this.pascalHandled.toString()}</div>
        <ce-with-event
          onlowercaseevent={this.handleLowercaseEvent.bind(this)}
          onkebab-event={this.handleKebabEvent.bind(this)}
          oncamelEvent={this.handleCamelEvent.bind(this)}
          onCAPSEvent={this.handleCapsEvent.bind(this)}
          onPascalEvent={this.handlePascalEvent.bind(this)}
        ></ce-with-event>
      </div>
    );
  }
}
