import{j as r,R as a}from"./iframe-6pmDYBey.js";import{P as s,u as c}from"./Popover-Dd0-1EJu.js";import{B as m}from"./Button-Bz4oJBBk.js";import{P as l}from"./PopoverTrigger-BKP_QpSy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-CTAsMywl.js";import"./Button-Bf_N8W1N.js";import"./utils-CclRT-8x.js";import"./mergeRefs-KX5b3W0M.js";import"./index-D7Awe5Nv.js";import"./ProgressBar-DSMryv5h.js";import"./Hidden-DGWIRGX2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D-9qd8rr.js";import"./useFocusRing-CIK_JYa4.js";import"./useFocusable-k6dtakHQ.js";import"./RSPContexts-BHIIqogi.js";import"./Collection-BzIHwVQs.js";import"./CollectionBuilder-s3gBlVxZ.js";import"./SelectionIndicator-BUH0wchX.js";import"./Separator-C2Ax_jJi.js";import"./browser-Curoa5u0.js";import"./useLocalizedStringFormatter-Cc63-Qc3.js";import"./PropsContextProvider-Bcab5p0Y.js";import"./useStatic-Bv4Ps5t5.js";import"./OverlayTrigger-DSzgE-rS.js";import"./IconWarning-D2rzgsKD.js";import"./Text-DCl4bIjP.js";import"./EmulatedBoldText-CBUClY1I.js";import"./LoadingSpinner-D_0Hr43y.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
