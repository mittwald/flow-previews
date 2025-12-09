import{j as r,R as a}from"./iframe-GdgkclWs.js";import{P as s,u as c}from"./Popover-DCEEmw0P.js";import{B as m}from"./Button-B0JEmBNK.js";import{P as l}from"./PopoverTrigger-BDzk5u7s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-C_Ye8hEJ.js";import"./Button-9ssRHwLo.js";import"./utils-DoU55v00.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./ProgressBar-BByvzxb3.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-G4rNg2r5.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./RSPContexts-Ih3Q_XqN.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./browser-CClwHdx_.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./PropsContextProvider-CVn6a-Br.js";import"./useStatic-CV3hAC_1.js";import"./OverlayTrigger-FDfyad1h.js";import"./IconWarning-CGOSGhfQ.js";import"./Text-Cto25n51.js";import"./EmulatedBoldText-Ddlneh35.js";import"./LoadingSpinner-ChMWC-CB.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
