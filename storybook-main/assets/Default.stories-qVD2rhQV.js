import{j as r,R as a}from"./iframe-B0zV29Ol.js";import{P as s,u as c}from"./Popover-D1TtYLmJ.js";import{B as n}from"./Button-DMc7qjuD.js";import{P as l}from"./PopoverTrigger-CF0yGiLp.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-UMFNSY2K.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./index-Bap8DgrM.js";import"./useStatic-CBy74o7G.js";import"./OverlayTrigger-Bi2UH0iH.js";import"./Dialog-CW1wDwL9.js";import"./Button-B7c7aZAn.js";import"./utils-rMLWZEZ9.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CJ74nGTM.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./RSPContexts-C-9bKQ2R.js";import"./OverlayArrow-CvdWoYZq.js";import"./useControlledState-BMTFuSH8.js";import"./Collection-xKdqQ5gP.js";import"./CollectionBuilder-CGg5wqK9.js";import"./SelectionIndicator-BwpruQVu.js";import"./Separator-DZUrDISg.js";import"./browser-D-MgOzku.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./ControlledNotification-DjEB_H58.js";import"./ClearPropsContextView-DoK20Ig-.js";import"./IconWarning-DElUfIyP.js";import"./Text-DNMpJh06.js";import"./EmulatedBoldText-Z1g7CMab.js";import"./LoadingSpinner-91ddITMV.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
