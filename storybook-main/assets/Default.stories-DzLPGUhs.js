import{j as r,R as a}from"./iframe-BnYuPSwa.js";import{P as s,u as c}from"./Popover-CIQAqIV0.js";import{B as n}from"./Button-D7B2hjaJ.js";import{P as l}from"./PopoverTrigger-B1k_GuHv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CLEKsYXA.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./index-CqvtBndu.js";import"./useStatic-B3gZPUVa.js";import"./OverlayTrigger-dzvMh6qS.js";import"./Dialog-BiHrEAWw.js";import"./Button-C47MeqAR.js";import"./utils-DoWPBSSq.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DQlYt1c9.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./RSPContexts-DdoqaBcc.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./browser-Bkf_ja0R.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./ControlledNotification-DFyhdCgQ.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./IconWarning-BustMFuX.js";import"./Text-DmoS4eOG.js";import"./EmulatedBoldText-DyenmRAR.js";import"./LoadingSpinner-14_SbsZZ.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
