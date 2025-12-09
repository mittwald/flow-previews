import{j as r,R as a}from"./iframe-BqP6npnu.js";import{P as s,u as c}from"./Popover-weX1_5w_.js";import{B as m}from"./Button-CINxW6TG.js";import{P as l}from"./PopoverTrigger-gkUZ0oSI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-WZRL0rNv.js";import"./Button-Cqxj8v2u.js";import"./utils-Co5LfTVH.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dpv25OMu.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./RSPContexts-DNFW1N-a.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./browser-DXN0P2CK.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./PropsContextProvider-r-rgdyuu.js";import"./useStatic-BDpTt2fP.js";import"./OverlayTrigger-kHGfUlCD.js";import"./IconWarning-DbZ28gHF.js";import"./remote-CSf0dxK4.js";import"./Text-DywGJIRt.js";import"./EmulatedBoldText-Htc9gLg0.js";import"./LoadingSpinner-C4lBONmO.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
