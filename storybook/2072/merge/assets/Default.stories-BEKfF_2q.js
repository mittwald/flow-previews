import{j as r,R as a}from"./iframe-DOEJXvGk.js";import{P as s,u as c}from"./Popover-DVCzA5rA.js";import{B as m}from"./Button-BYGUtkd2.js";import{P as l}from"./PopoverTrigger-BL7IIJoh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-ClAoL54q.js";import"./Button-DlVwZwD1.js";import"./utils-DdqmmzJ9.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-fI8vs3af.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./RSPContexts-bWk5q8vU.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./browser-DH30uIAM.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./useStatic-DU36eiHs.js";import"./OverlayTrigger-DmCvlVUl.js";import"./IconWarning-Ci_z427u.js";import"./Text-D2s12SBY.js";import"./EmulatedBoldText-8EHop2RJ.js";import"./LoadingSpinner-C3IBuXDG.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
