import{j as r,R as a}from"./iframe-U-SQzk2U.js";import{P as s,u as c}from"./Popover-BJPafbQW.js";import{B as m}from"./Button-B_mH5guI.js";import{P as l}from"./PopoverTrigger-Coxd46NM.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-ChAoIJrl.js";import"./Button-DBw5Ol_w.js";import"./utils-DoPZZ_D6.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DG48XepE.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./RSPContexts-CXcRuCAV.js";import"./Collection-D30Phmso.js";import"./CollectionBuilder-CnentVFR.js";import"./SelectionIndicator-CV40_W2v.js";import"./Separator-BXP_D1Un.js";import"./browser-w1PF0DBJ.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./flowComponent-B4D8aI1U.js";import"./useStatic-BAhUJhAM.js";import"./OverlayTrigger-BjYUeewY.js";import"./ControlledNotification-CprxFH82.js";import"./IconWarning-CDCEBJyf.js";import"./Text-MZxPcWY_.js";import"./EmulatedBoldText-2j5mm0bP.js";import"./LoadingSpinner-CC-MYLRK.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const M=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,M as __namedExportsOrder,L as default};
