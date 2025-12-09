import{j as r,R as a}from"./iframe-BfTJ8OoU.js";import{P as s,u as c}from"./Popover-DxokbZnr.js";import{B as m}from"./Button-CAnEum-p.js";import{P as l}from"./PopoverTrigger-zZ3JKVIV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-DqfyIwOm.js";import"./Button-v46gVvAB.js";import"./utils-CAkX6XFC.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DfwvGs8v.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./browser-_NOMM9Cq.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./PropsContextProvider-pKtaUqJb.js";import"./useStatic-DZbTJ5BB.js";import"./OverlayTrigger-CvXwRqat.js";import"./IconWarning-CnDmU8KM.js";import"./Text-ChPpwgcs.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
