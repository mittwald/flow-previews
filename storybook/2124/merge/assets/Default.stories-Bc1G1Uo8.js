import{j as r,R as a}from"./iframe-CVnOevS7.js";import{P as s,u as c}from"./Popover-DBExu7Vo.js";import{B as n}from"./Button-Cf7B0HY9.js";import{P as l}from"./PopoverTrigger-kkn5I6qo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CfRoeqvW.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./index-Cr689PiB.js";import"./useStatic-CGYI-bhE.js";import"./OverlayTrigger-BkfO43HH.js";import"./Dialog-WTjaYKjI.js";import"./Button-DX-sXAbn.js";import"./utils-CGDhhS2B.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B1NGcly_.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./RSPContexts-DjbnK2VB.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";import"./Collection-Cksyx-Vf.js";import"./CollectionBuilder-CYwEwQob.js";import"./SelectionIndicator-DnhwtZbe.js";import"./Separator-IYcFdJAY.js";import"./browser-DLVk8Qjw.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./ControlledNotification-GhQOL8__.js";import"./ClearPropsContextView-DFZ0V7Jx.js";import"./IconWarning-B_svJUl9.js";import"./Text-Bxez-FPO.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./LoadingSpinner-CSIBpLRI.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
