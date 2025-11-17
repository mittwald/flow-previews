import{j as r,R as a}from"./iframe-DjMRZ933.js";import{P as s,u as c}from"./Popover-C5QNOwBo.js";import{B as m}from"./Button-DcZikGPu.js";import{P as l}from"./PopoverTrigger-DbAiM7NS.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-o3mGNPxn.js";import"./Button-CVSjku2L.js";import"./utils-ChD4yM7Z.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMNm5Xu1.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./RSPContexts-xVWKxYWV.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./SelectionIndicator-Be-dMYOv.js";import"./Separator-CDRx1yir.js";import"./browser-CRatz6fZ.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./PropsContextProvider-Dfc22Cns.js";import"./useStatic-CBLHZfUJ.js";import"./OverlayTrigger-CrRJgUZu.js";import"./IconWarning-15BQJDPi.js";import"./Text-HqedTJ3_.js";import"./EmulatedBoldText-B3brdLrg.js";import"./LoadingSpinner-fSHKWhSv.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
