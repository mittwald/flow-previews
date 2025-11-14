import{j as r,R as a}from"./iframe-DNdCOOr1.js";import{P as s,u as c}from"./Popover-DIiESuql.js";import{B as m}from"./Button-Bi5-Bex0.js";import{P as l}from"./PopoverTrigger-KapNJ87s.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-EmNd6Ym2.js";import"./Button-CTVqlwB9.js";import"./utils-B65MerL9.js";import"./mergeRefs-BH624zqo.js";import"./index-C14X84sQ.js";import"./ProgressBar-BQC3e8cN.js";import"./Hidden-D3qCYkY1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BCLfHoxJ.js";import"./useFocusRing-D3q76LhO.js";import"./useFocusable-BkrL2nIQ.js";import"./RSPContexts-CgZ3T_zH.js";import"./Collection-BkL2_ZU0.js";import"./CollectionBuilder-BDT3C6pE.js";import"./SelectionIndicator-CQqAu7NQ.js";import"./Separator-D7EKlcCC.js";import"./browser-BSEwgGQy.js";import"./useLocalizedStringFormatter-L5dTHvQZ.js";import"./PropsContextProvider-BQ7eQhTD.js";import"./useStatic-Dgx0IMN1.js";import"./OverlayTrigger-BJUnFqxk.js";import"./IconWarning-lDDrCB8Z.js";import"./Text-BN_zs0IC.js";import"./EmulatedBoldText-BjpVZV9x.js";import"./LoadingSpinner-nsia9vBo.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
