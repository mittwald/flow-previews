import{j as r,R as a}from"./iframe-D1IXLGfs.js";import{P as s,u as c}from"./Popover-BXbsVRKM.js";import{B as m}from"./Button-C4C6Tlp0.js";import{P as l}from"./PopoverTrigger-DVp_5BpC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-5e9UnPLe.js";import"./Button-CMJuT-cA.js";import"./utils-B-QWEDo7.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Co7rtKcb.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./browser-tVHcyQIt.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./useStatic-CpvtqM-K.js";import"./OverlayTrigger-B4YqZS9k.js";import"./IconWarning-BxNDhWjd.js";import"./Text-D1LKMi-w.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./LoadingSpinner-7FjPacVo.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
