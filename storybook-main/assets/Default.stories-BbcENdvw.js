import{j as r,R as a}from"./iframe-CkyxEoEZ.js";import{P as s,u as c}from"./Popover-Dfldgewc.js";import{B as m}from"./Button-Ctvf1H7U.js";import{P as l}from"./PopoverTrigger-2QwCKC6i.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CmpACB2b.js";import"./Button-wjFvY1UY.js";import"./utils-BtOaQozS.js";import"./mergeRefs-p12aeMPz.js";import"./index-tj7lgiAm.js";import"./ProgressBar-x24Uteep.js";import"./Hidden-BZU7hI3a.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-F9TznhPu.js";import"./useFocusRing-BGGtyEFa.js";import"./useFocusable-6nBl_79g.js";import"./RSPContexts-BIZJIOxy.js";import"./Collection-TWw2CUBu.js";import"./CollectionBuilder-DhRqM4RI.js";import"./SelectionIndicator-B6Bj9As3.js";import"./Separator-Bj8gDUdP.js";import"./browser-DbkHv7Lt.js";import"./useLocalizedStringFormatter-BjZwhmR3.js";import"./PropsContextProvider-C-fhLM-T.js";import"./useStatic-tbDjUfBM.js";import"./OverlayTrigger-D6oe3s8K.js";import"./IconWarning-dMO6L9mh.js";import"./Text-Ct1nYKdY.js";import"./EmulatedBoldText-DT8aLwWG.js";import"./LoadingSpinner-Bjw5E-ZO.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
