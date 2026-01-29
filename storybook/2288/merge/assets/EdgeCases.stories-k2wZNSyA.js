import{j as r}from"./iframe-Bj8CIgLy.js";import{C as n,M as e}from"./MenuItem-BVYLOsTt.js";import{C as s}from"./ContextMenuTrigger-ChogISEH.js";import"./ContextMenuSection-aa2v9fsF.js";import{B as u}from"./Button-b_60CJFp.js";import a from"./Default.stories-DmFd93Jc.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DbcbId4I.js";import"./context-CihUwagI.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useStatic-BJFVwiuT.js";import"./browser-Rl4DjN4H.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./dynamic-DEq-wVmB.js";import"./Popover-BqYOhRmm.js";import"./useOverlayController-1hyOtPEK.js";import"./OverlayContextProvider-CVeWPhf8.js";import"./Dialog-vXYkYCcw.js";import"./Button-Kf97rzrP.js";import"./utils-D41FTHpf.js";import"./ProgressBar-CzzSLaP3.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./context-RK9vgtK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./Text-CVMu3Bei.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./VisuallyHidden-D10Fyvvv.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Switch-DlO95gQp.js";import"./useFieldComponent-DFS7CEov.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BcXaMmc-.js";import"./useFormReset-DPVe5t_C.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./OverlayTrigger-BDKA1kYb.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Separator-B3J9aM9H.js";import"./Heading-CKRtDLQC.js";import"./Heading-CLbyuN1D.js";import"./Avatar-B99sX0iI.js";import"./AlertIcon-Bub-4wJk.js";import"./Initials-iC5R3IoS.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...o.parameters?.docs?.source}}};const Er=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Er as __namedExportsOrder,Ar as default};
