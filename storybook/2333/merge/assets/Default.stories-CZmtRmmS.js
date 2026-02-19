import{j as r,R as a}from"./iframe-DQkRMfo_.js";import{P as i}from"./Popover-C2Sm0PAA.js";import{B as n}from"./Button-CTuc7Sb1.js";import{P as c}from"./PopoverTrigger-SY217f3x.js";import"./flowComponent-COr712P3.js";import{u as l}from"./useOverlayController-CkVtRdpi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./Dialog-cFet4L4X.js";import"./Button-BqHvWFWe.js";import"./utils-Bfb5K-41.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./context-XfcuIoVT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8-KGEPi.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useFocusable-BWtjl4YZ.js";import"./RSPContexts-Bk8qKDL5.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./Text-BXxFgtol.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./VisuallyHidden-CreEQc-P.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./Text-DZXogYJp.js";import"./browser-BnHwZVCd.js";import"./EmulatedBoldText-BSCRafBI.js";import"./LoadingSpinner-BfuFQdyU.js";import"./OverlayTrigger-0AVD2RuP.js";import"./DialogTriggerView-NvpN5dRX.js";import"./useStatic-D2wW9JFL.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const nr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,nr as __namedExportsOrder,sr as default};
