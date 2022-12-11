import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2
  ) {

    // Start WOWSlider.com script section
    this.loadWowSliderScript();
    this.loadEngineScript();
    // <!-- Start WOWSlider.com script section -->
   }
 
  public loadWowSliderScript(): HTMLScriptElement {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = "assets/engine1/wowslider.js";
    this.renderer.appendChild(this.document.body, script);
    return script;
  }

  public loadEngineScript(): HTMLScriptElement {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = "assets/engine1/script.js";
    this.renderer.appendChild(this.document.body, script);
    return script;
  }
}
