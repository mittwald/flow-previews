import{j as r,R as a}from"./iframe-PDaUHho1.js";import{P as s,u as c}from"./Popover-CQRfq8Pn.js";import{B as n}from"./Button-C5eOeaT9.js";import{P as l}from"./PopoverTrigger-DCoz2Rln.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BGWGXkWs.js";import"./flowComponent-pwAlxQ7Y.js";import"./index-V7XxCnlO.js";import"./index-B4HwJOZh.js";import"./useStatic-UwW6yb2T.js";import"./OverlayTrigger-D2bNYkcD.js";import"./Dialog-Bz5XATVl.js";import"./Button-vCn3sloq.js";import"./utils-WYXKBT_h.js";import"./ProgressBar-m4wkDJ9q.js";import"./Hidden-Cu9gnBmg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DBDDiU0I.js";import"./useFocusRing-msSK4oeu.js";import"./useFocusable-CU77Oyp_.js";import"./RSPContexts-DnH8q5jT.js";import"./OverlayArrow-j70_eukt.js";import"./useControlledState-DpuOrhgy.js";import"./Collection-CoTpEGUK.js";import"./CollectionBuilder-CiodENHi.js";import"./SelectionIndicator-B4sxL3Ui.js";import"./Separator-BOyasXxD.js";import"./browser-Dn1Bftrm.js";import"./useLocalizedStringFormatter-hpfCA0Xp.js";import"./ControlledNotification-BKShNQFf.js";import"./ClearPropsContextView-DBaaVQ6i.js";import"./IconWarning-B0hQIuUq.js";import"./Text-PjSitUb9.js";import"./EmulatedBoldText-DeDAxtsF.js";import"./LoadingSpinner-bLHLQdUH.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
