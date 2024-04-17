/*! For license information please see 4734.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4734],{4734:(e,t,i)=>{i.r(t),i.d(t,{calcite_alert:()=>m});var n=i(9113),s=i(7146),o=i(344),a=i(8545),l=i(3213),r=i(3041),c=i(8065),d=i(1992);i(8220);const u={slow:14e3,medium:1e4,fast:6e3},h="container",m=class{constructor(e){(0,n.r)(this,e),this.calciteAlertBeforeClose=(0,n.c)(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=(0,n.c)(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=(0,n.c)(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=(0,n.c)(this,"calciteAlertOpen",6),this.calciteInternalAlertSync=(0,n.c)(this,"calciteInternalAlertSync",6),this.calciteInternalAlertRegister=(0,n.c)(this,"calciteInternalAlertRegister",6),this.autoCloseTimeoutId=null,this.totalOpenTime=0,this.totalHoverTime=0,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.closeAlert=()=>{this.autoCloseTimeoutId=null,this.queued=!1,this.open=!1,this.queue=this.queue.filter((e=>e!==this.el)),this.determineActiveAlert(),this.calciteInternalAlertSync.emit({queue:this.queue})},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=(0,s.b)(e)},this.handleMouseOver=()=>{window.clearTimeout(this.autoCloseTimeoutId),this.totalOpenTime=Date.now()-this.initialOpenTime,this.lastMouseOverBegin=Date.now()},this.handleMouseLeave=()=>{const e=Date.now()-this.lastMouseOverBegin,t=u[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?e+this.totalHoverTime:e,this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),t)},this.open=!1,this.autoClose=!1,this.autoCloseDuration="medium",this.kind="brand",this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.numberingSystem=void 0,this.placement="bottom",this.scale="m",this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.numberStringFormatter=new l.N,this.hasEndActions=!1,this.queue=[],this.queueLength=0,this.queued=!1}openHandler(){(0,r.o)(this),this.open&&!this.queued&&this.calciteInternalAlertRegister.emit(),this.open||(this.queue=this.queue.filter((e=>e!==this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}))}onMessagesChange(){}updateDuration(){this.autoClose&&this.autoCloseTimeoutId&&(window.clearTimeout(this.autoCloseTimeoutId),this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),u[this.autoCloseDuration]))}connectedCallback(){(0,l.c)(this),(0,c.c)(this),this.open&&!this.queued&&this.calciteInternalAlertRegister.emit(),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}async componentWillLoad(){(0,a.s)(this),await(0,c.s)(this),this.open&&(0,r.o)(this)}componentDidLoad(){(0,a.a)(this)}disconnectedCallback(){window.dispatchEvent(new CustomEvent("calciteInternalAlertUnregister",{detail:{alert:this.el}})),window.clearTimeout(this.autoCloseTimeoutId),window.clearTimeout(this.queueTimeout),(0,l.d)(this),(0,c.d)(this),this.slottedInShell=!1}render(){const{open:e,autoClose:t,label:i,placement:o,queued:a}=this,l=t?"alert":"alertdialog",r=!e,c=(0,s.h)(d.K,this.icon,this.kind),u=this.queueLength>1;return(0,n.h)(n.H,{"aria-hidden":(0,s.t)(r),"aria-label":i,"calcite-hydrated-hidden":r,role:l},(0,n.h)("div",{class:{[h]:!0,"container--queued":a,[`${h}--${o}`]:!0,"container--slotted-in-shell":this.slottedInShell},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseLeave:null,ref:this.setTransitionEl},c&&this.renderIcon(c),(0,n.h)("div",{class:"text-container"},(0,n.h)("slot",{name:"title"}),(0,n.h)("slot",{name:"message"}),(0,n.h)("slot",{name:"link"})),this.renderActionsEnd(),u?this.renderQueueCount():null,this.renderCloseButton(),e&&!a&&t?(0,n.h)("div",{class:"dismiss-progress"}):null))}renderCloseButton(){return(0,n.h)("button",{"aria-label":this.messages.close,class:"close",key:"close",onClick:this.closeAlert,type:"button",ref:e=>this.closeButton=e},(0,n.h)("calcite-icon",{icon:"x",scale:(0,o.g)(this.scale)}))}renderQueueCount(){const e=this.queueLength>2?this.queueLength-1:1,t=this.numberStringFormatter.numberFormatter.format(e);return(0,n.h)("div",{class:{"queue-count":!0,"queue-count--active":this.queueLength>1},key:"queue-count"},(0,n.h)("calcite-chip",{scale:this.scale,value:t},t))}renderActionsEnd(){return(0,n.h)("div",{class:"actions-end"},(0,n.h)("slot",{name:"actions-end",onSlotchange:this.actionsEndSlotChangeHandler}))}renderIcon(e){return(0,n.h)("div",{class:"icon"},(0,n.h)("calcite-icon",{flipRtl:this.iconFlipRtl,icon:e,scale:(0,o.g)(this.scale)}))}alertSync(e){this.queue!==e.detail.queue&&(this.queue=e.detail.queue),this.queueLength=this.queue.length,this.determineActiveAlert(),e.stopPropagation()}alertRegister(){this.open&&!this.queue.includes(this.el)&&(this.queued=!0,this.queue.push(this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}),this.determineActiveAlert()}alertUnregister(e){const t=this.queue.filter((t=>t!==e.detail.alert));this.queue=t,window.dispatchEvent(new CustomEvent("calciteInternalAlertSync",{detail:{queue:t}}))}async setFocus(){await(0,a.c)(this);const e=(0,s.e)(this.el,{selector:"calcite-link"});if(this.closeButton||e)return e?e.setFocus():void(this.closeButton&&this.closeButton.focus())}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}numberingSystemChange(){this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}determineActiveAlert(){this.queue?.[0]===this.el&&(this.openAlert(),this.autoClose&&!this.autoCloseTimeoutId&&(this.initialOpenTime=Date.now(),this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),u[this.autoCloseDuration])))}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}openAlert(){window.clearTimeout(this.queueTimeout),this.queueTimeout=window.setTimeout((()=>this.queued=!1),300)}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],autoCloseDuration:["updateDuration"],effectiveLocale:["effectiveLocaleChange"],numberingSystem:["numberingSystemChange"]}}};m.style=':host{--calcite-alert-edge-distance:2rem;--calcite-alert-dismiss-progress-background:var(--calcite-color-transparent-tint);display:block}.container{pointer-events:none;position:fixed;z-index:var(--calcite-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-color-border-3);border-block-end:1px solid var(--calcite-color-border-3);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - var(--calcite-alert-edge-distance) * 2);transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto;padding-inline-start:var(--calcite-alert-spacing-token-large)}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;padding:var(--calcite-alert-spacing-token-large);outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.close:active{background-color:var(--calcite-color-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-color-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem;--calcite-alert-footer-height:2rem;--calcite-alert-footer-divider-gap:0.125rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem;--calcite-alert-footer-height:3rem;--calcite-alert-footer-divider-gap:0.25rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem;--calcite-alert-footer-height:4rem;--calcite-alert-footer-divider-gap:0.5rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host([open]) .container:not(.container--queued){border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.container--queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.container--queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-color-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-color-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-color-status-info)}:host([kind=info]) .container .icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-color-status-success)}:host([kind=success]) .container .icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-color-status-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--slotted-in-shell{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}'},344:(e,t,i)=>{function n(e){return"l"===e?"m":"s"}async function s(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>s,g:()=>n})},8545:(e,t,i)=>{i.d(t,{a:()=>l,b:()=>r,c:()=>c,s:()=>a});var n=i(9113);const s=new WeakMap,o=new WeakMap;function a(e){o.set(e,new Promise((t=>s.set(e,t))))}function l(e){s.get(e)()}function r(e){return o.get(e)}async function c(e){return await r(e),(0,n.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},3041:(e,t,i)=>{i.d(t,{o:()=>a});var n=i(9113);function s(e){return"opened"in e?e.opened:e.open}function o(e,t=!1){(t?e[e.transitionProp]:s(e))?e.onBeforeOpen():e.onBeforeClose(),(t?e[e.transitionProp]:s(e))?e.onOpen():e.onClose()}function a(e,t=!1){(0,n.e)((()=>{if(e.transitionEl){const{transitionDuration:i,transitionProperty:n}=getComputedStyle(e.transitionEl),a=i.split(","),l=a[n.split(",").indexOf(e.openTransitionProp)]??a[0];if("0s"===l)return void o(e,t);const r=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",c),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d),o(e,t)}),1e3*parseFloat(l));function c(i){i.propertyName===e.openTransitionProp&&i.target===e.transitionEl&&(clearTimeout(r),e.transitionEl.removeEventListener("transitionstart",c),(t?e[e.transitionProp]:s(e))?e.onBeforeOpen():e.onBeforeClose())}function d(i){i.propertyName===e.openTransitionProp&&i.target===e.transitionEl&&((t?e[e.transitionProp]:s(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d))}e.transitionEl.addEventListener("transitionstart",c),e.transitionEl.addEventListener("transitionend",d),e.transitionEl.addEventListener("transitioncancel",d)}}))}},1992:(e,t,i)=>{var n;i.d(t,{K:()=>n}),function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"}(n||(n={}))},8065:(e,t,i)=>{i.d(t,{c:()=>u,d:()=>h,s:()=>r,u:()=>d});var n=i(9113),s=i(3213);const o={};function a(){throw new Error("could not fetch component message bundle")}function l(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function r(e){e.defaultMessages=await c(e,e.effectiveLocale),l(e)}async function c(e,t){const{el:i}=e,l=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return o[i]||(o[i]=fetch((0,n.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||a(),e.json()))).catch((()=>a()))),o[i]}((0,s.g)(t,"t9n"),l)}async function d(e,t){e.defaultMessages=await c(e,t),l(e)}function u(e){e.onMessagesChange=m}function h(e){e.onMessagesChange=void 0}function m(){l(this)}}}]);