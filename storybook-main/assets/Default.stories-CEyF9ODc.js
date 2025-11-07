import{j as r,R as a}from"./iframe-Gppgd95h.js";import{P as s,u as c}from"./Popover-DJAMooXE.js";import{B as n}from"./Button-CQheULfL.js";import{P as l}from"./PopoverTrigger-BTB-rtbw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-MNDXyV03.js";import"./flowComponent-CBC2W0-6.js";import"./index-eyLLmFq7.js";import"./index-C46OFllo.js";import"./useStatic-DlLFMLM2.js";import"./OverlayTrigger-C9iAiDvY.js";import"./Dialog-CVc-VcQU.js";import"./Button-D2lj5RUi.js";import"./utils-B4V-7u16.js";import"./ProgressBar-DZD68PrE.js";import"./Hidden-7U06UOp8.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cby3fyqM.js";import"./useFocusRing-BZLy2WOf.js";import"./useFocusable-DX1uCwgO.js";import"./RSPContexts-uyFjXPd-.js";import"./OverlayArrow-DfX6d8e5.js";import"./useControlledState-CiQWtKCp.js";import"./Collection-DADNKWxZ.js";import"./CollectionBuilder-D91eRMtU.js";import"./SelectionIndicator-B1G8Paba.js";import"./Separator-DtbrqDaf.js";import"./browser-BvSJi_ez.js";import"./useLocalizedStringFormatter-nMq0Hiqv.js";import"./ControlledNotification-DC4lr8-K.js";import"./ClearPropsContextView-CUGxvixI.js";import"./IconWarning-CXl4-aHF.js";import"./Text-ByRCXQub.js";import"./EmulatedBoldText-BsRwGIpf.js";import"./LoadingSpinner-CWX_u-O3.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
