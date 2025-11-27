import{j as r,R as a}from"./iframe-7BcSOkL1.js";import{P as s,u as c}from"./Popover-BpKg5fzM.js";import{B as m}from"./Button-BCb61ouP.js";import{P as l}from"./PopoverTrigger-CWou1-Xt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BY2qRpUu.js";import"./Button-BRvXO2c0.js";import"./utils-CnXd-itf.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./ProgressBar-LVm02CMO.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BxMgKMFE.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./RSPContexts-VFAeT7fJ.js";import"./Collection-Nrq8gGX_.js";import"./CollectionBuilder-CIDh9Gu3.js";import"./SelectionIndicator-MGv3fhI5.js";import"./Separator-QlyzxrY4.js";import"./browser-DkuKIMCf.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./PropsContextProvider-T63dMOzs.js";import"./useStatic-DpF8IrGJ.js";import"./OverlayTrigger-CbmE6C3-.js";import"./IconWarning-DFK7FPRm.js";import"./Text-sNy_JVUg.js";import"./EmulatedBoldText-KFps1Djg.js";import"./LoadingSpinner-CQRWUrve.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
