import{j as r,R as a}from"./iframe-D29QVi29.js";import{P as s,u as c}from"./Popover-0dSAyS70.js";import{B as m}from"./Button-BqO8ZFSe.js";import{P as l}from"./PopoverTrigger-lEvm5luT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-i3-N7LSR.js";import"./Button-x1GyynEX.js";import"./utils-V6v5WZV5.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./ProgressBar-1j73270Z.js";import"./Hidden-DYWDaDdl.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-qGV7OOPv.js";import"./useFocusRing-BTna3mEs.js";import"./useFocusable-DTRRpH6w.js";import"./RSPContexts-7wLun1z_.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./SelectionIndicator-T7jZrYkx.js";import"./Separator-CwRYG8QD.js";import"./browser-CsgOcZeL.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./PropsContextProvider-Di3M49gZ.js";import"./useStatic-lipZmjhB.js";import"./OverlayTrigger-BRRbGelm.js";import"./IconWarning-qRr2EWc4.js";import"./Text-BTGWwOlA.js";import"./EmulatedBoldText-C5bjRzZR.js";import"./LoadingSpinner-BK6n1zCV.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
