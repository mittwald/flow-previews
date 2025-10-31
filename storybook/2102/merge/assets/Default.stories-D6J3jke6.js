import{j as r,R as a}from"./iframe-C__sNFq5.js";import{P as s,u as c}from"./Popover-CT_v-Oh-.js";import{B as n}from"./Button-BDJI0X8N.js";import{P as l}from"./PopoverTrigger-COcD_xjf.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BsIjwuj0.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./index-BmGDZeJ3.js";import"./useStatic-DMsmAY9f.js";import"./OverlayTrigger-AiOoKC_G.js";import"./Dialog-CzLU07Qv.js";import"./Button-B_7NxfoI.js";import"./utils-Dqy6LFYQ.js";import"./ProgressBar-DtGgBXAS.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMi9l8Yg.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./RSPContexts-BMxPkdv6.js";import"./OverlayArrow-DhgMASFr.js";import"./useControlledState-2e7yt8gr.js";import"./Collection-Dh0ESm_f.js";import"./CollectionBuilder-ukVkSTyS.js";import"./SelectionIndicator-Cki_l3jq.js";import"./Separator-D0XClCWV.js";import"./browser-iGgi6T92.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";import"./ControlledNotification-BlGPMSZv.js";import"./ClearPropsContextView-COiHjqok.js";import"./IconWarning-BuzGzrbs.js";import"./Text--GxX46L7.js";import"./EmulatedBoldText-Bh8SXQjk.js";import"./LoadingSpinner-B1HBgs-9.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
