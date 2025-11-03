import{j as r,R as a}from"./iframe-C3RmV_vn.js";import{P as s,u as c}from"./Popover-BrQ9WlIY.js";import{B as n}from"./Button-DaazfuBy.js";import{P as l}from"./PopoverTrigger-nHTqFl4u.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BR4xGGrb.js";import"./flowComponent-DFlBLvPJ.js";import"./index-C-ZjcPlt.js";import"./index-hkSQrj3P.js";import"./useStatic-_h3OjEkL.js";import"./OverlayTrigger-IdlugrEk.js";import"./Dialog-K1R3KO66.js";import"./Button-CgyHIJsr.js";import"./utils-D8HC0yU-.js";import"./ProgressBar-CDrPZwEB.js";import"./Hidden-CChVoDJ-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DCRPXx9V.js";import"./useFocusRing-BIAWuC29.js";import"./useFocusable-C2zASQXP.js";import"./RSPContexts-BOh9wduO.js";import"./OverlayArrow-FKi2RhHZ.js";import"./useControlledState-NromYU6N.js";import"./Collection-D7H86Y8V.js";import"./CollectionBuilder-CsxHJ8eB.js";import"./SelectionIndicator-BJ_0QZSn.js";import"./Separator-ev5cyWKA.js";import"./browser-DymlHLTF.js";import"./useLocalizedStringFormatter-ChCCrZ8e.js";import"./ControlledNotification-CByqMhuw.js";import"./ClearPropsContextView-Brt3ROUs.js";import"./IconWarning-BE2KSBI-.js";import"./Text-CaziZxQU.js";import"./EmulatedBoldText-CI-5ODle.js";import"./LoadingSpinner-DyOalyyw.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
