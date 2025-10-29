import{j as r,R as a}from"./iframe-Dpfie29P.js";import{P as s,u as c}from"./Popover-DPNrzN76.js";import{B as n}from"./Button-CP1CQ4aA.js";import{P as l}from"./PopoverTrigger-BpZoFkVU.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-D7kPYOyQ.js";import"./flowComponent-Cjzkqjb4.js";import"./index-__VJVmNO.js";import"./index-B8L1MmPw.js";import"./useStatic-_lGyJa-K.js";import"./OverlayTrigger-B5J3YKQv.js";import"./Dialog-D4TBWAAb.js";import"./Button-CE70VFoQ.js";import"./utils-ByCVrYF8.js";import"./ProgressBar-DBQgu7rG.js";import"./Hidden-X2etvrQI.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CImZbjU9.js";import"./useFocusRing-B3ev5CsH.js";import"./useFocusable-MRbdgJr0.js";import"./RSPContexts-Dy6WsHjT.js";import"./OverlayArrow-tgf2ia9L.js";import"./useControlledState-B9oskcjG.js";import"./Collection-DAHgHC5D.js";import"./CollectionBuilder-CVpE0_tX.js";import"./SelectionIndicator-DD22eJg1.js";import"./Separator-zYh5FghF.js";import"./browser-SX7l3t_S.js";import"./useLocalizedStringFormatter-DKCw3c-I.js";import"./ControlledNotification-4HAxUIZG.js";import"./ClearPropsContextView-xbn_SAqK.js";import"./IconWarning-DahfVj-v.js";import"./Text-BxUYsUAw.js";import"./EmulatedBoldText-DQbMaGdb.js";import"./LoadingSpinner-BvFhoBs5.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
