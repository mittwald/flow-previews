import{j as r}from"./iframe-BDFzVZbC.js";import{C as n,M as m}from"./MenuItem-P9sFSRWj.js";import{C as s}from"./ContextMenuTrigger-CwB4PFht.js";import"./ContextMenuSection-rEkP8dNP.js";import{B as u}from"./Button-C7bK1-uf.js";import a from"./Default.stories-D2lU4Cth.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-dkJpCMmD.js";import"./useOverlayController-Bb-vbpCY.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./clsx-B-dksMZM.js";import"./index-CcbRX2xZ.js";import"./useStatic-DKe6XZbW.js";import"./browser-D6pVd-JB.js";import"./getActionGroupSlot-DJwqOljU.js";import"./dynamic-78IPl_xO.js";import"./Popover-DEUzSgQe.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./utils-DRqoG6OW.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./context-sVk6h2Ud.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocusable-nLh15Hem.js";import"./RSPContexts-CK_xwACt.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./Text-5CWdwzmY.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./VisuallyHidden-DL89d0r2.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./Switch-iBmBwcV_.js";import"./useFieldComponent-DJTCy7fJ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-RYb4ELwE.js";import"./useFormReset-CQpdwD5T.js";import"./LoadingSpinner-CPBqqCdo.js";import"./OverlayTrigger-BwyAupi1.js";import"./Text-DCO-oE1a.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Separator-CWklfHEq.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./Avatar-2EGNp_NC.js";import"./AlertIcon-tKcNuTH2.js";import"./Initials-o5pBM6Hh.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Ar=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Ar as __namedExportsOrder,Lr as default};
