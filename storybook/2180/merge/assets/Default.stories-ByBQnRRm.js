import{j as r,R as a}from"./iframe-C5kwxwrP.js";import{P as s,u as c}from"./Popover-8f8WewP5.js";import{B as m}from"./Button-xhQyV7SB.js";import{P as l}from"./PopoverTrigger-BPBAKMHr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-B1WvD-_p.js";import"./Button-BX1O3153.js";import"./utils-ClkSWM7u.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CDCpqoSP.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./RSPContexts-DRm1Cdpk.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./browser-CdNWfkH8.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./PropsContextProvider-CTsx1ICl.js";import"./useStatic-BI_2AgVn.js";import"./OverlayTrigger-Br3xhPgq.js";import"./IconWarning-DN2_qlIM.js";import"./Text-D7zEodsr.js";import"./EmulatedBoldText-B3gCae9O.js";import"./LoadingSpinner-BXFlmGo5.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
