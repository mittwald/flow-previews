import{j as r,R as a}from"./iframe-N2ZMMBua.js";import{P as s,u as c}from"./Popover-ITKHSPMr.js";import{B as m}from"./Button-CQTX7C-7.js";import{P as l}from"./PopoverTrigger-DLnLI4gj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-0hb6Imhj.js";import"./Button-ckJwL_Qm.js";import"./utils-UqP59DSc.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CVOB-S2d.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./RSPContexts-W5rfe12r.js";import"./Collection-B-VaM1xo.js";import"./CollectionBuilder-sM43fN06.js";import"./SelectionIndicator-Pu8gh7X4.js";import"./Separator-05e1ttKJ.js";import"./browser-C3uOmI6O.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./PropsContextProvider-wZrUcs9C.js";import"./useStatic-BK7FFX-B.js";import"./OverlayTrigger-CtrEPdBT.js";import"./IconWarning-BFO_JV1T.js";import"./Text-B0nKVVvA.js";import"./EmulatedBoldText-zrEG-jWJ.js";import"./LoadingSpinner-BF2HGxsW.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
