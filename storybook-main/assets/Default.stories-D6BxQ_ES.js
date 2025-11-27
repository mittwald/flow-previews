import{j as r,R as a}from"./iframe-CAXopRTx.js";import{P as s,u as c}from"./Popover-Tc25RGFF.js";import{B as m}from"./Button-Ctv-dB52.js";import{P as l}from"./PopoverTrigger-Dqa8sMRl.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-B6djjyHK.js";import"./Button-Chz2mIUC.js";import"./utils-Dzmr5ZRW.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-NOf08-wC.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./RSPContexts-BuWbS9Uz.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./browser-Byp0bOe_.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./useStatic-B1gRKxid.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./IconWarning-CZAvow1a.js";import"./Text-BF5hWH0r.js";import"./EmulatedBoldText-DePsUjt1.js";import"./LoadingSpinner-CoC4LtwE.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
