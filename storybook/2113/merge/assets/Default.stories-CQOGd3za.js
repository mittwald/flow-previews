import{j as r,R as a}from"./iframe-Dy6b_FCP.js";import{P as s,u as c}from"./Popover-CYz6FA1w.js";import{B as n}from"./Button-GOXJIQJf.js";import{P as l}from"./PopoverTrigger-CmSa_lF0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BJDivKIs.js";import"./flowComponent-DrrEN2JN.js";import"./index-CVEy0Z38.js";import"./index-DfVSRZN_.js";import"./useStatic-BBN1iEfx.js";import"./OverlayTrigger-GliMoFGI.js";import"./Dialog-Bnl9MCT0.js";import"./Button-D4hzfdEM.js";import"./utils-Dr97TsDg.js";import"./ProgressBar-BRblqXhL.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cmxdn71P.js";import"./useFocusRing-DcnqUpu3.js";import"./useFocusable-CceqWekp.js";import"./RSPContexts-BxpxaOEB.js";import"./OverlayArrow-DfWLFrq7.js";import"./useControlledState-DcQuzcMp.js";import"./Collection-BUtQOrwA.js";import"./CollectionBuilder-DjGCLM2W.js";import"./SelectionIndicator-BJWp2zfX.js";import"./Separator-CCSnrMIk.js";import"./browser-B3C2hSkY.js";import"./useLocalizedStringFormatter-IeR6u1dk.js";import"./ControlledNotification-DVFBubHe.js";import"./ClearPropsContextView-byuDiYQD.js";import"./IconWarning-DNcE7GB8.js";import"./Text-1cPTkrsR.js";import"./EmulatedBoldText-rn83c_he.js";import"./LoadingSpinner-CtFn_aG9.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
