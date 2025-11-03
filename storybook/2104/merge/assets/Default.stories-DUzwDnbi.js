import{j as r,R as a}from"./iframe-CXJD44gU.js";import{P as s,u as c}from"./Popover-BkL35Kgm.js";import{B as n}from"./Button-Cqh03G4a.js";import{P as l}from"./PopoverTrigger-CxS2VuOB.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CQFOhjaS.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./index-CRJWytS4.js";import"./useStatic-Dhs2fcV6.js";import"./OverlayTrigger-CG63jM03.js";import"./Dialog-0oqd1mPP.js";import"./Button-BYCRTXMY.js";import"./utils-BNVflTSU.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-FTDoYYrb.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./RSPContexts-DduoqfxZ.js";import"./OverlayArrow-D2uhXVaI.js";import"./useControlledState-Bnjej2q1.js";import"./Collection-DYOHqOtc.js";import"./CollectionBuilder-D4Pa1_Ag.js";import"./SelectionIndicator-CQbg55hv.js";import"./Separator-FNjaa8bX.js";import"./browser-BB5suZC2.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./ControlledNotification-CcIZA-Lf.js";import"./ClearPropsContextView-CQgAJ6wW.js";import"./IconWarning-BGBHXtCn.js";import"./Text-D7qfRA1L.js";import"./EmulatedBoldText-BVX9n63_.js";import"./LoadingSpinner-GTDlM8Wf.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
