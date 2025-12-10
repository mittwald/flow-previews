import{j as r,R as a}from"./iframe-C7yh_Fu5.js";import{P as s,u as c}from"./Popover-CQFnWxW5.js";import{B as m}from"./Button-BwVKQ9X7.js";import{P as l}from"./PopoverTrigger-C9LEo84-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-w3GWYnpb.js";import"./Button-iBtMEWbi.js";import"./utils-BIDryOLh.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./ProgressBar-hejX-OOI.js";import"./Hidden-Du0bIFmN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CEhtXY7m.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./RSPContexts-DMbDFkhS.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./browser-DU0Se26V.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./PropsContextProvider-C-EG-5z2.js";import"./useStatic-BPJ4UqdO.js";import"./OverlayTrigger-D2xYBiFg.js";import"./IconWarning-U8_aSafZ.js";import"./Text-CSanHafV.js";import"./EmulatedBoldText-CiGN-vVw.js";import"./LoadingSpinner-4S8XnzlY.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
