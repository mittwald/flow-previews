import{j as r,R as a}from"./iframe-CzXG2_T8.js";import{P as s,u as c}from"./Popover-BqNRrPxw.js";import{B as m}from"./Button-CE0-K_QR.js";import{P as l}from"./PopoverTrigger-Cw7IKzZy.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BYHZfe66.js";import"./Button-S7e-r_k_.js";import"./utils-CRR3kiFX.js";import"./mergeRefs-BrX_XdJI.js";import"./index-CW_J_3Lm.js";import"./ProgressBar-fGMPBnRY.js";import"./Hidden-QndGxZGG.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CoFMJFUW.js";import"./useFocusRing-BjdVgYEz.js";import"./useFocusable-BDJ0-yDW.js";import"./RSPContexts-EC3Gwcat.js";import"./Collection-BP43cq6b.js";import"./CollectionBuilder-BY3GrVHa.js";import"./SelectionIndicator-Bu5dS93A.js";import"./Separator-kqblG9CO.js";import"./browser-TfqyRUmT.js";import"./useLocalizedStringFormatter-BqSTbtiO.js";import"./PropsContextProvider-CBC4MB9g.js";import"./useStatic-CSFWNuey.js";import"./OverlayTrigger-DvD8AAyr.js";import"./IconWarning-BlYr5wdx.js";import"./Text-pNSdlFVE.js";import"./EmulatedBoldText-Dax89Wj8.js";import"./LoadingSpinner-DXLKn-V2.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
