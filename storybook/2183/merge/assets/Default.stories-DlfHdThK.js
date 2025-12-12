import{j as r,R as a}from"./iframe-Cun9xEvG.js";import{P as s,u as c}from"./Popover-5hFlpbJ0.js";import{B as m}from"./Button-Be9JkCpV.js";import{P as l}from"./PopoverTrigger-Cx-yVyab.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-DiBM2o-y.js";import"./Button-D2k4TCQe.js";import"./utils-S5M_7oVk.js";import"./mergeRefs-BXtjeRnl.js";import"./index-Bf8buJG0.js";import"./ProgressBar-c76aO61i.js";import"./Hidden-BJOAuytn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CTkEoG47.js";import"./useFocusRing-DD5EcUfr.js";import"./useFocusable-C8NsMmkc.js";import"./RSPContexts-DVf4IkrV.js";import"./Collection-Tg2L3ks0.js";import"./CollectionBuilder-CdiRFq1v.js";import"./SelectionIndicator-MYqiPo_p.js";import"./Separator-CR4CvoS_.js";import"./browser-BgnuhwhB.js";import"./useLocalizedStringFormatter-BWJekubh.js";import"./PropsContextProvider-Cd0rcWBc.js";import"./useStatic-fkJ5iy3g.js";import"./OverlayTrigger-DKCqdxLC.js";import"./IconWarning-CPVRn4jW.js";import"./remote-BgISxXks.js";import"./Text-46CNKReN.js";import"./EmulatedBoldText-2bJ0isTU.js";import"./LoadingSpinner-BiAtSGtu.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
