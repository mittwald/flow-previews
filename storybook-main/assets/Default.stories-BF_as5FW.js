import{j as r,R as a}from"./iframe-B_2yjHsp.js";import{P as s,u as c}from"./Popover-S8IKDEQt.js";import{B as n}from"./Button-Da-1LcXr.js";import{P as l}from"./PopoverTrigger-BYXXEk4H.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-RnBPL4A_.js";import"./flowComponent-BV7e4GQN.js";import"./index-CkiHuacM.js";import"./index-D1oAZySF.js";import"./useStatic-BbFRD4mD.js";import"./OverlayTrigger-CLiMft97.js";import"./Dialog-0Z2XDu66.js";import"./Button-NNWtmROB.js";import"./utils-2cwPFhAn.js";import"./ProgressBar-D7qqep5T.js";import"./Hidden-CeFRPKf9.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B3k2yYk7.js";import"./useFocusRing-ofK0sPix.js";import"./useFocusable-BOYBZXPk.js";import"./RSPContexts-v1WzALnr.js";import"./OverlayArrow-P73E_zIs.js";import"./useControlledState-BCeVh08t.js";import"./Collection-Caw85O5m.js";import"./CollectionBuilder-CokeJ_11.js";import"./SelectionIndicator-Cf6NqUf0.js";import"./Separator-mHpTHZcJ.js";import"./browser-CwXIoFOI.js";import"./useLocalizedStringFormatter-tPwVT4HJ.js";import"./ControlledNotification-CcfPwfqM.js";import"./ClearPropsContextView-CmdRpvoP.js";import"./IconWarning-CUKg7OTE.js";import"./Text-hvZATcoQ.js";import"./EmulatedBoldText-DedaqQcc.js";import"./LoadingSpinner-BGKVD4AF.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
