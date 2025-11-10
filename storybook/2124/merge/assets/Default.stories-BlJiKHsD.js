import{j as r,R as a}from"./iframe-BUpOconN.js";import{P as s,u as c}from"./Popover-Ba6VttQl.js";import{B as n}from"./Button-BI2nRdMO.js";import{P as l}from"./PopoverTrigger-p8rmDyPx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-kOiZEgEs.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./index-DbC_ni2B.js";import"./useStatic-lOwByp-V.js";import"./OverlayTrigger-BUfLbgE9.js";import"./Dialog-9peppKdC.js";import"./Button-kwZ3-LYf.js";import"./utils-D0zgVK2Q.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BerssnGJ.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./RSPContexts-DHzB_yYn.js";import"./OverlayArrow-YGRreMIm.js";import"./useControlledState-CATx7UtX.js";import"./Collection-8CZs5R9B.js";import"./CollectionBuilder-DKRji49J.js";import"./SelectionIndicator-Bv8zjct6.js";import"./Separator-C30545Sk.js";import"./browser-BvUtNH1Q.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./ControlledNotification-CFPZ3UPn.js";import"./ClearPropsContextView-B4rUpvsn.js";import"./IconWarning-BhCngq7e.js";import"./Text-BmeR1AHd.js";import"./EmulatedBoldText-BYxux4hO.js";import"./LoadingSpinner-BP3hPEk8.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
