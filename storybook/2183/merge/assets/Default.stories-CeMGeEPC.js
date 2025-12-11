import{j as r,R as a}from"./iframe-Bo-CC4om.js";import{P as s,u as c}from"./Popover-CuQlxumw.js";import{B as m}from"./Button-DsbAYxy6.js";import{P as l}from"./PopoverTrigger--EGMIntl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-Dp75aXTI.js";import"./Button-DEzwtm5X.js";import"./utils-BE4vzmGc.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DUzMMmSG.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./browser-CQUdwXOL.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./PropsContextProvider-JVmwHNwK.js";import"./useStatic-CUzdYRpB.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./Text-FWtYFqa_.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./LoadingSpinner-U2Qf3euF.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
