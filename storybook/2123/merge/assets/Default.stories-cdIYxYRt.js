import{j as r,R as a}from"./iframe-Bb2Dt4gO.js";import{P as s,u as c}from"./Popover-BQgLuDpm.js";import{B as n}from"./Button-4ByktXkK.js";import{P as l}from"./PopoverTrigger-DciJ0UKG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CWQK-DX0.js";import"./flowComponent-CJrXYk4c.js";import"./index-DhaS9Xnk.js";import"./index-P4MnPsl7.js";import"./useStatic-CQaBBZXk.js";import"./OverlayTrigger-DjQFyneA.js";import"./Dialog-D5KTniQT.js";import"./Button-BSQSoIIB.js";import"./utils-BRWgyZeC.js";import"./ProgressBar-DmgKKf3-.js";import"./Hidden-DZjS-0Re.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-OBblbX9f.js";import"./useFocusRing-BqqueoK_.js";import"./useFocusable-BsZWsXG_.js";import"./RSPContexts-ScA0jBqq.js";import"./OverlayArrow-BPrkRyf_.js";import"./useControlledState-C9bMDpWq.js";import"./Collection-By7hYb7j.js";import"./CollectionBuilder-DXrUA6kr.js";import"./SelectionIndicator-BSio2Upk.js";import"./Separator-BddUv5iq.js";import"./browser-C45ETDbe.js";import"./useLocalizedStringFormatter-C4xJr-3b.js";import"./ControlledNotification-Dc8xOVnV.js";import"./ClearPropsContextView-DaYr1H4N.js";import"./IconWarning-ncqjKY0i.js";import"./Text-DlHja6rG.js";import"./EmulatedBoldText-BkxAkbDy.js";import"./LoadingSpinner-BExDoLYl.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
