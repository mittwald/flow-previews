import{j as r,R as a}from"./iframe-b3Ga2wpf.js";import{P as s,u as c}from"./Popover-C3t-XhdJ.js";import{B as m}from"./Button-B9AKUFf2.js";import{P as l}from"./PopoverTrigger-aR-yTA7m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-DvKCdNAh.js";import"./Button-Dn9RG0lS.js";import"./utils-DpwAoq2B.js";import"./mergeRefs-Bi5mFM62.js";import"./index-EgQfkxQH.js";import"./ProgressBar-CqHSuyvS.js";import"./Hidden-D7Ffx1fO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D39ROL5s.js";import"./useFocusRing-DyTaHyNc.js";import"./useFocusable-CNSeA0E2.js";import"./RSPContexts-CzK-yBpk.js";import"./Collection-staaIP_8.js";import"./CollectionBuilder-DkVC1udd.js";import"./SelectionIndicator-H6x9m8Fd.js";import"./Separator-CC7MupLF.js";import"./browser-C0SY9BaM.js";import"./useLocalizedStringFormatter-Dw2puoxj.js";import"./PropsContextProvider-D77bvxtu.js";import"./useStatic-DjEoLORA.js";import"./OverlayTrigger-9eU9gIuc.js";import"./IconWarning-C84U4k_5.js";import"./remote-DrytLFaS.js";import"./Text-DIbSGP69.js";import"./EmulatedBoldText-BWSYK2_K.js";import"./LoadingSpinner-C8TYwtnu.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
