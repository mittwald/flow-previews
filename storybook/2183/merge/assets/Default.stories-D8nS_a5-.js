import{j as r,R as a}from"./iframe-B4mFuudk.js";import{P as s,u as c}from"./Popover-EGtBkPGT.js";import{B as m}from"./Button-D2oQPT9j.js";import{P as l}from"./PopoverTrigger-DfcR0Zu9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-BaYvtgUx.js";import"./Button-D_IfTLYp.js";import"./utils-DO9siV10.js";import"./mergeRefs-CRoU7Hf_.js";import"./index-BF6bNSpW.js";import"./ProgressBar-B9w8hpj9.js";import"./Hidden-DEoNA7g6.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-woxbYNKN.js";import"./useFocusRing-Dzyc8_rZ.js";import"./useFocusable-CR7CXVdU.js";import"./RSPContexts-D4gsSVcd.js";import"./Collection-CRJOH9N4.js";import"./CollectionBuilder-BrBYWzEj.js";import"./SelectionIndicator-Cqxoh0Vk.js";import"./Separator-B1GSGo-v.js";import"./browser-CSkgXx8X.js";import"./useLocalizedStringFormatter-CJ3DiWc4.js";import"./PropsContextProvider-C4qYIeXY.js";import"./useStatic-BNYxoolq.js";import"./OverlayTrigger-CxsOgof7.js";import"./IconWarning-BO1YoHSl.js";import"./remote-CQQC7IgA.js";import"./Text-DWXiWYJa.js";import"./EmulatedBoldText-ekl0jVcs.js";import"./LoadingSpinner-CkjsGIz-.js";const L={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
