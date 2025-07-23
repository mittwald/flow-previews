import{j as r,R}from"./iframe-CYUlilGp.js";import{P as i,a as x}from"./Popover-NGc5e56D.js";import{B as h}from"./Button-BfM0n2Gx.js";import{u as P}from"./DialogTriggerView-vjAZqBKE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./Dialog-E3oWZOKb.js";import"./Button-DY4YyasG.js";import"./utils-IwmXOWz0.js";import"./ProgressBar-CLAf1-ry.js";import"./Label-BzlJ5vcG.js";import"./Hidden-CtQ_5AUI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ0P6uHm.js";import"./context-D26uRp-g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JEo6mDJS.js";import"./useFocus-6n3T7pEK.js";import"./useFocusRing-Bl1ft2NQ.js";import"./useFocusable-hSKUHOaq.js";import"./RSPContexts-8GpZLPll.js";import"./OverlayArrow-DFgxRKys.js";import"./useControlledState-D9dJQ2qs.js";import"./Collection-D4l8encG.js";import"./CollectionBuilder-B8Luejyn.js";import"./Separator-CYwUbqtz.js";import"./Text-DsFZoYY-.js";import"./Input-CJk741gA.js";import"./SearchField-B0kT3X35.js";import"./FieldError-BpkjstJ1.js";import"./Form-CJHBPzNS.js";import"./Group-_cQVCYDW.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./useTextField-BchAki_m.js";import"./useFormReset-BKFhzP-_.js";import"./TextField-BqCOguPh.js";import"./SelectionManager-BA-kOSfV.js";import"./useEvent-BKYwrgSI.js";import"./useCollator-BxGQV5d9.js";import"./FocusScope-AdChhofX.js";import"./VisuallyHidden-D7ZslAb9.js";import"./IconWarning-ghAEmGH8.js";import"./Text-ot4TW2RP.js";import"./browser-BP1SPJnQ.js";import"./EmulatedBoldText-CMJy8lEl.js";import"./LoadingSpinner-CJLXwe_9.js";import"./context-CPlmB9Cj.js";import"./useStatic-CaXlYNsR.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
