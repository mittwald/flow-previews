import{j as r,R as a}from"./iframe-Cn_Uksv1.js";import{P as s,u as c}from"./Popover-BR7oC1fO.js";import{B as n}from"./Button-uqtApCO2.js";import{P as l}from"./PopoverTrigger-BOxfrCz3.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CovFRnRg.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./index-C0zdnCAL.js";import"./useStatic-CJPRi5oj.js";import"./OverlayTrigger-iBRYVjfO.js";import"./Dialog-BecCL6sR.js";import"./Button-FEoS725w.js";import"./utils-B-f9gd93.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B2OLF-YE.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./RSPContexts-CKwSRM_H.js";import"./OverlayArrow-xQHCsek7.js";import"./useControlledState-CW1MTAna.js";import"./Collection-ClRJO0M5.js";import"./CollectionBuilder-Bhf_01Mr.js";import"./SelectionIndicator-BiXza4Fo.js";import"./Separator-Czf3nTWx.js";import"./browser-BnRg_GS1.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./ControlledNotification-BeDY2vKU.js";import"./ClearPropsContextView-B_X2v-Sq.js";import"./IconWarning-ktzgJVul.js";import"./Text-D6EVKQHX.js";import"./EmulatedBoldText-CxLJaoXr.js";import"./LoadingSpinner-DSg47w65.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
