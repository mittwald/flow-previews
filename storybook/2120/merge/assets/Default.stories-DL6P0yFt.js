import{j as r,R as a}from"./iframe-DhEtuAZk.js";import{P as s,u as c}from"./Popover-bxB2am_R.js";import{B as n}from"./Button-BY9Kr7Ye.js";import{P as l}from"./PopoverTrigger-DeiqVe2R.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-D6NPEI3P.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./index-DWS6YMK5.js";import"./useStatic-OTFolAlH.js";import"./OverlayTrigger-BYK82yFU.js";import"./Dialog-CGia85P_.js";import"./Button-DH0rVXA4.js";import"./utils-DSKmOAaE.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B4_4eL8K.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./RSPContexts-CP8S-33J.js";import"./OverlayArrow-D5AF8TQx.js";import"./useControlledState-Dj5UiPRe.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";import"./browser-CRwqe8Ti.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./ControlledNotification-B3y-_NHJ.js";import"./ClearPropsContextView-CacYGh9N.js";import"./IconWarning-CZNr6BH3.js";import"./Text-CrxTC35E.js";import"./EmulatedBoldText-DZREZbVk.js";import"./LoadingSpinner-DZTinZ99.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
