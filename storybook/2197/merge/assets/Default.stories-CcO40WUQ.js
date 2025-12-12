import{j as r,R as a}from"./iframe-BDeBfZSP.js";import{P as s,u as c}from"./Popover-DNzPOg2i.js";import{B as m}from"./Button-Dbhe5AA0.js";import{P as l}from"./PopoverTrigger-GXKodTVP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-DWFXzaDB.js";import"./Button-Cfa7dut0.js";import"./utils-Byz_563U.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CmX5Cpay.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./RSPContexts-BBQghKHL.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./browser--C_mCO56.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./PropsContextProvider-CInYH9Sb.js";import"./useStatic-CE8Y1Vmb.js";import"./OverlayTrigger-C0iwpCUS.js";import"./IconWarning-CWBVghBS.js";import"./Text-DwrK8QpO.js";import"./EmulatedBoldText-3F_0W9mf.js";import"./LoadingSpinner-BWJul6BV.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
