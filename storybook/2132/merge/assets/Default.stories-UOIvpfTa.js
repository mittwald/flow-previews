import{j as r,R as a}from"./iframe-7JAb-nDd.js";import{P as s,u as c}from"./Popover-BcXGNCBW.js";import{B as m}from"./Button-C274DNXY.js";import{P as l}from"./PopoverTrigger-BiiRixsv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-49irLi2e.js";import"./Button-CcXbzio8.js";import"./utils-COcVuwM3.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DufoU_2Q.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./RSPContexts-BRgQDZZ1.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./browser-ES8JYesh.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./PropsContextProvider-DI02RRNp.js";import"./useStatic-BMWFl-h1.js";import"./OverlayTrigger-DS9RFxPY.js";import"./IconWarning-CrvOn5qf.js";import"./Text-Cjgg9Pe-.js";import"./EmulatedBoldText-DX6Otmj0.js";import"./LoadingSpinner-Ds95wBE7.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
