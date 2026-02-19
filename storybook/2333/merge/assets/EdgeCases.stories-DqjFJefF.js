import{j as r}from"./iframe-DQkRMfo_.js";import{C as n,M as m}from"./MenuItem-BB8iYXfJ.js";import{C as s}from"./ContextMenuTrigger-DO5VZIhA.js";import"./ContextMenuSection-CK2JeTTJ.js";import{B as u}from"./Button-CTuc7Sb1.js";import a from"./Default.stories-BaZelJcF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-CnbeSwOL.js";import"./useOverlayController-CkVtRdpi.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./clsx-B-dksMZM.js";import"./index-BmRrr2ih.js";import"./useStatic-D2wW9JFL.js";import"./browser-BnHwZVCd.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./dynamic-Bf6rAVHb.js";import"./Popover-C2Sm0PAA.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./Dialog-cFet4L4X.js";import"./Button-BqHvWFWe.js";import"./utils-Bfb5K-41.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./context-XfcuIoVT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8-KGEPi.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useFocusable-BWtjl4YZ.js";import"./RSPContexts-Bk8qKDL5.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./Text-BXxFgtol.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./VisuallyHidden-CreEQc-P.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./Switch-CIfDdHE2.js";import"./useFieldComponent-DKGKIVkH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BXYT-WIx.js";import"./useFormReset-CbTvEeV3.js";import"./LoadingSpinner-BfuFQdyU.js";import"./OverlayTrigger-0AVD2RuP.js";import"./Text-DZXogYJp.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Separator-BJ07qKiN.js";import"./Heading-fqnL9RrB.js";import"./Heading-CDc2BCk7.js";import"./Avatar-BzesQfiP.js";import"./AlertIcon-x4dcgk_u.js";import"./Initials-CPnDVhHA.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
