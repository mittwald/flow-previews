import{j as r,R as a}from"./iframe-CH4VWYyw.js";import{P as s,u as c}from"./Popover-Ca49wibL.js";import{B as m}from"./Button-CMjimR4T.js";import{P as l}from"./PopoverTrigger-4JRh7pUL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-DhFeNNrI.js";import"./Button-C7FjL3VL.js";import"./utils-B0RtSKxF.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C0jF3YAi.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./RSPContexts-COBXgLKc.js";import"./Collection-L1fG0_vq.js";import"./CollectionBuilder-DHEE--Pj.js";import"./SelectionIndicator-Cmg6-Pdp.js";import"./Separator-88La-8FT.js";import"./browser-DUOSIs8m.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./PropsContextProvider-RGeJUgUt.js";import"./useStatic-rQr5blZX.js";import"./OverlayTrigger-yyuSztfm.js";import"./IconWarning-CUVmf0iP.js";import"./Text-DppnPY0e.js";import"./EmulatedBoldText-BLn1bvyP.js";import"./LoadingSpinner-CM0pL980.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
