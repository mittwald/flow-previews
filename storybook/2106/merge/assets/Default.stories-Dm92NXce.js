import{j as r,R as a}from"./iframe-oci4ptrj.js";import{P as s,u as c}from"./Popover-BgPcaCsv.js";import{B as n}from"./Button-eO-ASnyK.js";import{P as l}from"./PopoverTrigger-GYLBAt5X.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CY6wUJcA.js";import"./flowComponent-C2w89MO3.js";import"./index-DzNagtAD.js";import"./index-BOV_kcUj.js";import"./useStatic-Dg5syQGi.js";import"./OverlayTrigger-XJjkijZP.js";import"./Dialog-BNJbCqlP.js";import"./Button-KMwH7pyb.js";import"./utils-BqyPjKLh.js";import"./ProgressBar-BWGxJHnn.js";import"./Hidden-BTg-KeYM.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DcUd--Pd.js";import"./useFocusRing-GHPD41Xj.js";import"./useFocusable-Dp9h7abG.js";import"./RSPContexts-Ba4NKIWK.js";import"./OverlayArrow-DTr5Iaqo.js";import"./useControlledState-DDWL0DP8.js";import"./Collection-BMK5V4Kq.js";import"./CollectionBuilder-v2B4mNBt.js";import"./SelectionIndicator-B29MN-WG.js";import"./Separator-BHmM9LBW.js";import"./browser-CA-_dWQR.js";import"./useLocalizedStringFormatter-d3uviZeO.js";import"./ControlledNotification-CtEY5SML.js";import"./ClearPropsContextView-Cq8Pr-2n.js";import"./IconWarning-DHgEivld.js";import"./Text-BC4L9_-c.js";import"./EmulatedBoldText-DLGY6dL5.js";import"./LoadingSpinner-Ce9YNblG.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
