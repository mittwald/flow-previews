import{j as r,R as a}from"./iframe-BULoVSu-.js";import{P as s,u as c}from"./Popover-CjClCujz.js";import{B as m}from"./Button-DvOPlqIW.js";import{P as l}from"./PopoverTrigger-CK-Br2ii.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DrExWdfs.js";import"./Button-DWJqXgIw.js";import"./utils-BZ7EFgdg.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BQ6yD6Hs.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./RSPContexts-DiGug6wA.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./browser-CQOPH7Oy.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./PropsContextProvider-BPIZn01x.js";import"./useStatic-Dyq_KzQP.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./IconWarning-DrICVJv-.js";import"./Text-Bg3HcGTD.js";import"./EmulatedBoldText-CVrOLZNg.js";import"./LoadingSpinner-BfUy7fQr.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
