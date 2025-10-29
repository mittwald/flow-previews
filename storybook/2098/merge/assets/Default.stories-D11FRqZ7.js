import{j as r,R as a}from"./iframe-CUHqcL_I.js";import{P as s,u as c}from"./Popover-BKsJ_j8S.js";import{B as n}from"./Button-DrygTKxs.js";import{P as l}from"./PopoverTrigger-n1PupvaH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-D0yqdMla.js";import"./flowComponent-BjSKuQCX.js";import"./index-CrtpoxY-.js";import"./index-CTAmePsE.js";import"./useStatic-D0HQJKJl.js";import"./OverlayTrigger-CCqikpvI.js";import"./Dialog-CfYxSPof.js";import"./Button-Gx1b59X2.js";import"./utils-yOUeLBa9.js";import"./ProgressBar-CSMSR9VB.js";import"./Hidden-DlQVfkRs.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DsJ462Ut.js";import"./useFocusRing-DaG9LpkP.js";import"./useFocusable-BfYOI4CR.js";import"./RSPContexts-CQETDyCZ.js";import"./OverlayArrow-BTviaJ6o.js";import"./useControlledState-CnBvEePG.js";import"./Collection-BRy2AcbC.js";import"./CollectionBuilder-BO8DlF0S.js";import"./SelectionIndicator-Qn1nfVf2.js";import"./Separator-CNp-Wjum.js";import"./browser-Cw9CdHqj.js";import"./useLocalizedStringFormatter-CdK5FACb.js";import"./ControlledNotification-ZZQB_4VO.js";import"./ClearPropsContextView-BgTB1xWu.js";import"./IconWarning-C3AAIkW7.js";import"./Text-9dBC56cL.js";import"./EmulatedBoldText-3j1WcMoY.js";import"./LoadingSpinner-tg8gDUA6.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
