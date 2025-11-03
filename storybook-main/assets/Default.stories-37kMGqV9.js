import{j as r,R as a}from"./iframe-Bx5EipPE.js";import{P as s,u as c}from"./Popover-iFb4HmrW.js";import{B as n}from"./Button-CFmBk-Ho.js";import{P as l}from"./PopoverTrigger-rUkUK7-J.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-mT0U7naa.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./index-B2U9nMUa.js";import"./useStatic-BSnv9Wf7.js";import"./OverlayTrigger-CtLRnD7V.js";import"./Dialog-iL1jHTNr.js";import"./Button-CMS0XqzI.js";import"./utils-CqLTISaK.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CiBo84na.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./RSPContexts-ByW7h33h.js";import"./OverlayArrow-DDi9NGvK.js";import"./useControlledState-DARDYAMl.js";import"./Collection-BHn5eDKP.js";import"./CollectionBuilder-cxVcyhpe.js";import"./SelectionIndicator-MBSA8IqZ.js";import"./Separator-CJ9-vZHB.js";import"./browser-YP_S1MMX.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./ControlledNotification-BIugGNxy.js";import"./ClearPropsContextView-Cv4XWBgA.js";import"./IconWarning-sXt69lXW.js";import"./Text-cL2QlUTP.js";import"./EmulatedBoldText-DBVghW6y.js";import"./LoadingSpinner-BBcen_x5.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
