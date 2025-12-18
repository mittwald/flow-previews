import{j as r,R as a}from"./iframe-DZYTde4e.js";import{P as s,u as c}from"./Popover-DM3qcDl0.js";import{B as m}from"./Button-CI_UMDNZ.js";import{P as l}from"./PopoverTrigger--kk_uIkh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-CBzv9cN1.js";import"./Button-CC2_Lwz2.js";import"./utils-Z6vXhZ96.js";import"./mergeRefs-CwEw5UGZ.js";import"./index-DAiWoi8o.js";import"./ProgressBar-DZyCS9ga.js";import"./Hidden-CW62RqME.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Du59aHbH.js";import"./useFocusRing-BNBaS5jL.js";import"./useFocusable-v1ukumRO.js";import"./RSPContexts-BlMA0jp2.js";import"./Collection-BPkXYQex.js";import"./CollectionBuilder-D0jI_Gb0.js";import"./SelectionIndicator-BtmzIdOy.js";import"./Separator-B8KzwdIi.js";import"./browser-D1RFTwuv.js";import"./useLocalizedStringFormatter-Cqhwqj9s.js";import"./PropsContextProvider-CgtZzzdB.js";import"./useStatic-Cc8Tg3eq.js";import"./OverlayTrigger-m1G0j68U.js";import"./IconWarning-DXCUbPmL.js";import"./Text-BDClvQAl.js";import"./EmulatedBoldText-S-B02nx0.js";import"./LoadingSpinner-qhZotF0H.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
