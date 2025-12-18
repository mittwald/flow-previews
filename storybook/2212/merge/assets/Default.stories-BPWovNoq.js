import{j as r,R as a}from"./iframe-DRHo_LWV.js";import{P as s,u as c}from"./Popover-BQgBoj25.js";import{B as m}from"./Button-CoKi_833.js";import{P as l}from"./PopoverTrigger-RQrqTxsS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-B26OnoB_.js";import"./Button-CPvHspkD.js";import"./utils-BMeX6kjI.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./RSPContexts-CCSm4UT8.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./browser-BUXnAcqH.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./PropsContextProvider-eT31IdA5.js";import"./useStatic-DSG2Vd8Y.js";import"./OverlayTrigger-DqaZeyEn.js";import"./IconWarning-DOCSYVJb.js";import"./Text-C8Z4-t3h.js";import"./EmulatedBoldText-B9Wwr1Zx.js";import"./LoadingSpinner-Bk5B-2KR.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
