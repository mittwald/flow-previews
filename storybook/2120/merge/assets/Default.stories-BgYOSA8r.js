import{j as r,R as a}from"./iframe-C_rr3K7B.js";import{P as s,u as c}from"./Popover-C6S62YvO.js";import{B as n}from"./Button-DCjyK8f2.js";import{P as l}from"./PopoverTrigger-BmTXQmKy.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-D3P4luPW.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./index-BjYnWwux.js";import"./useStatic-BCUpaw5v.js";import"./OverlayTrigger-Bcj7IRSG.js";import"./Dialog-YSlPVfGO.js";import"./Button-B3n1VqY_.js";import"./utils-C4h6fUQR.js";import"./ProgressBar-BfFuAkhC.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CfcUR6DZ.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./RSPContexts-zcKIqYdj.js";import"./OverlayArrow-RRaewUl9.js";import"./useControlledState-D5USuG2w.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";import"./browser-E0G6tvzo.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./ControlledNotification-DUF7vXg5.js";import"./ClearPropsContextView-BMWVcOQ4.js";import"./IconWarning-DU_TTROa.js";import"./Text-BsSJXbbR.js";import"./EmulatedBoldText-C3mdhbnh.js";import"./LoadingSpinner-CRVrq6rR.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
