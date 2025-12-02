import{j as r,R as a}from"./iframe-D7uC-7V_.js";import{P as s,u as c}from"./Popover-Dwlz0jk0.js";import{B as m}from"./Button-DiCPbDhS.js";import{P as l}from"./PopoverTrigger-CjKyKtrA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-DmsiyyTB.js";import"./Button-Djt7NA3M.js";import"./utils-DGPkAfM6.js";import"./mergeRefs-B2M5WDOC.js";import"./index-Bd9v0Vhf.js";import"./ProgressBar-BjaQZGPw.js";import"./Hidden-B7ytCKiH.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-77px_zVw.js";import"./useFocusRing-DNcE5kU2.js";import"./useFocusable-0BAeD1Xf.js";import"./RSPContexts-DX_a6o14.js";import"./Collection-DSbN1ly0.js";import"./CollectionBuilder-B1mZ5m8d.js";import"./SelectionIndicator-BfrUmlWT.js";import"./Separator-CvniWKxN.js";import"./browser-BKGMjSP-.js";import"./useLocalizedStringFormatter-CCpeSzbu.js";import"./PropsContextProvider-D6ETz4eO.js";import"./useStatic-Bxi8RVTv.js";import"./OverlayTrigger-H7UlFHIL.js";import"./IconWarning-BCNTNt6q.js";import"./Text-BiV92KiG.js";import"./EmulatedBoldText-Dg54gE_i.js";import"./LoadingSpinner-VIxuY4J8.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,L as __namedExportsOrder,K as default};
