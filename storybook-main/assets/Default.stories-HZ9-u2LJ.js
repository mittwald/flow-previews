import{j as r,R as a}from"./iframe-DO9N3msj.js";import{P as s,u as c}from"./Popover-CJ5gJoTU.js";import{B as n}from"./Button-DK3gLuJ3.js";import{P as l}from"./PopoverTrigger-Igmj44kF.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CvI_nrYK.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./index-BKd7rs_c.js";import"./useStatic-KZCckyWk.js";import"./OverlayTrigger-Cc6aFNNE.js";import"./Dialog-D3dWmtLO.js";import"./Button-CwTEoZMR.js";import"./utils-Cu-DyEOs.js";import"./ProgressBar-DB2HZm0N.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BjTRJu3f.js";import"./useFocusRing-8nZAdgRB.js";import"./useFocusable-ahyCDO6Q.js";import"./RSPContexts-dbdihzDr.js";import"./OverlayArrow-01aTrBGz.js";import"./useControlledState-1ES4-sD1.js";import"./Collection-BqBfIbeS.js";import"./CollectionBuilder-DBX3bBv7.js";import"./SelectionIndicator-BhMymJwE.js";import"./Separator-BF-SYlg1.js";import"./browser-hD6iDIbH.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./ControlledNotification-ChKUqlSP.js";import"./ClearPropsContextView-ClFJoQqW.js";import"./IconWarning-BWr56wBK.js";import"./Text-D7GNIHqq.js";import"./EmulatedBoldText-CL2lsqyO.js";import"./LoadingSpinner-k8RqOHze.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
