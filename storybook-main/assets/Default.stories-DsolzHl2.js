import{j as r,R as a}from"./iframe-2LgrIkRd.js";import{P as s,u as c}from"./Popover-BsRqhSlP.js";import{B as m}from"./Button-Cq_XMZKZ.js";import{P as l}from"./PopoverTrigger-Cj-rCTR6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./context-lHzLNF7G.js";import"./Button-EKWPB4tZ.js";import"./utils-BnxtooML.js";import"./mergeRefs-BKadv8uE.js";import"./index-KXg12Vs8.js";import"./ProgressBar-DflgbsT0.js";import"./Hidden-8HkCLqkF.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CE6tX24V.js";import"./useFocusRing-DVyMMICP.js";import"./useFocusable-DWcchIDQ.js";import"./RSPContexts-Dor-CtSJ.js";import"./Collection-CsQEIojc.js";import"./CollectionBuilder-CXt63XdS.js";import"./SelectionIndicator-BqSKYRxe.js";import"./Separator-DQkcls0b.js";import"./browser-DE_neHhx.js";import"./useLocalizedStringFormatter-dwl9VKwt.js";import"./PropsContextProvider-Dvn5KZwR.js";import"./useStatic-yAY0kCCB.js";import"./OverlayTrigger-CbpE00TN.js";import"./IconWarning-D60ymTiJ.js";import"./Text-CmoFb8XW.js";import"./EmulatedBoldText-DybYTyQs.js";import"./LoadingSpinner-C9JNq8vi.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
