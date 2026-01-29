import{j as r}from"./iframe-B9oS1eAm.js";import{C as n,M as e}from"./MenuItem-BYb2dHPC.js";import{C as s}from"./ContextMenuTrigger-998pkbRQ.js";import"./ContextMenuSection-B77fxBO-.js";import{B as u}from"./Button-DYAI_N0q.js";import a from"./Default.stories-BPSqd96p.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-uBGtkJG1.js";import"./context-CJJiwCXZ.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./clsx-B-dksMZM.js";import"./index-CYuWkd4j.js";import"./useStatic-D0W9io-P.js";import"./browser-DuZ3LDHb.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./dynamic-D5cDPq7G.js";import"./Popover-YwALvm8D.js";import"./useOverlayController-kt2fLXEJ.js";import"./OverlayContextProvider-B6Y-y8F0.js";import"./Dialog-DQxs1UCg.js";import"./Button-BCaEF3RH.js";import"./utils-CkbQ6lDO.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./context-CSGUwiAp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CvAqmGGe.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./Text-DSVxOKBO.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./VisuallyHidden-D5FMvG_d.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Switch-CiJLnGSM.js";import"./useFieldComponent-BBgwgWHq.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C-ch0RgL.js";import"./useFormReset-CfNbS0Tm.js";import"./LoadingSpinner-BCe3g54S.js";import"./OverlayTrigger-BbXRNnL7.js";import"./Text-D9DZPtYx.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Separator-sxenOVOg.js";import"./Heading-DxBk4dsC.js";import"./Heading-DFJD7l83.js";import"./Avatar-DZjFE8dC.js";import"./AlertIcon-CyL6LR1b.js";import"./Initials-DlkJHPSk.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
