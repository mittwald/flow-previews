import{j as r,R as a}from"./iframe-DVp3wyW8.js";import{P as s,u as c}from"./Popover-C_VLeK4z.js";import{B as n}from"./Button-BGy_040K.js";import{P as l}from"./PopoverTrigger-D6XGHSuv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DxFAQaLL.js";import"./flowComponent-DOD6KTqp.js";import"./index-CSWZRCbA.js";import"./index-CnZiUiqa.js";import"./useStatic-INcP8lHW.js";import"./OverlayTrigger-DDB1sJEU.js";import"./Dialog-DnE7Rdfp.js";import"./Button-ComzTzlH.js";import"./utils-CK_bkg3x.js";import"./ProgressBar-BEtx-YzR.js";import"./Hidden-QjALVdSt.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BTkZkFrl.js";import"./useFocusRing-Drt37fC5.js";import"./useFocusable-CbEG4JhP.js";import"./RSPContexts-CQ8PUfHG.js";import"./OverlayArrow-hRB0J8f2.js";import"./useControlledState-sP_KhedU.js";import"./Collection-IUBaFxMl.js";import"./CollectionBuilder-BV2QNItK.js";import"./SelectionIndicator-BlMGsqeF.js";import"./Separator-DSxPZKK_.js";import"./browser-qRiPvlbV.js";import"./useLocalizedStringFormatter-BDNlhScJ.js";import"./ControlledNotification-OITqwrQV.js";import"./ClearPropsContextView-BZK07IGP.js";import"./IconWarning-btspmSaz.js";import"./Text-x2NLhZ_6.js";import"./EmulatedBoldText-CHhmc0Op.js";import"./LoadingSpinner-BvAyWbCS.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
