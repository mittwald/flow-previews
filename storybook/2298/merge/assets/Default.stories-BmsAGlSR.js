import{j as r,R as a}from"./iframe-C-RKPwSE.js";import{P as i}from"./Popover-IIDmJsK0.js";import{B as n}from"./Button-C4QFurWq.js";import{P as c}from"./PopoverTrigger-C_yzP_F_.js";import{u as l}from"./useOverlayController-DFCL4B8t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./OverlayContextProvider-wIYWseIw.js";import"./context-C3Gge9in.js";import"./useStatic-CxBkvBNE.js";import"./Dialog-5IYWsYFe.js";import"./Button-BUrsQ2n2.js";import"./utils-BNo7v4Co.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./context-CG0zmStT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8JiKPWZ.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./Text-CWybMa0K.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./VisuallyHidden-lhIVNasT.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./Text-DceSOphz.js";import"./browser-BU-qC_3h.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./LoadingSpinner-B5fSKp-d.js";import"./OverlayTrigger-DlhOnJ8b.js";import"./DialogTriggerView-PE2cTyQH.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};
