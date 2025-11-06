import{j as r,R as a}from"./iframe-CPn2ZlG8.js";import{P as s,u as c}from"./Popover-BXUF-6SC.js";import{B as n}from"./Button-i2RXMGoH.js";import{P as l}from"./PopoverTrigger-CMl9e6LO.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CgTN8SSG.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./index-B0eWxAoc.js";import"./useStatic-BnTfOIpp.js";import"./OverlayTrigger-20DAFHoE.js";import"./Dialog-CXw6CUzT.js";import"./Button-Di4iIPFk.js";import"./utils-DBul4rcK.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BiAR75ic.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./RSPContexts-CJHyh8nT.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./browser-Cl13ZrDl.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./ControlledNotification-BEs41KlO.js";import"./ClearPropsContextView-BhabDAmt.js";import"./IconWarning-BTNOc1CF.js";import"./Text-6RCNpXVe.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./LoadingSpinner-mgkNzsmz.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,V as __namedExportsOrder,U as default};
