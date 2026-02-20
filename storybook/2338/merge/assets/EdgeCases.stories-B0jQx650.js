import{j as r}from"./iframe-BXGfha1q.js";import{C as n,M as m}from"./MenuItem-Dwef0UQJ.js";import{C as s}from"./ContextMenuTrigger-Byk7iPD-.js";import"./ContextMenuSection-DVxvJxxR.js";import{B as u}from"./Button-DfmOHFsC.js";import a from"./Default.stories-Kz6Hnefl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-z52bmq8Z.js";import"./useOverlayController-yGpX5sn6.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./useStatic-BExQ1RD0.js";import"./browser-P6njm6Fr.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./dynamic-Cx3iunOI.js";import"./Popover-DUbvu04K.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./utils-DDzB-hS3.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./context-C9BhwF0E.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./RSPContexts-CG0vEblW.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./Text-B1oZgTuN.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./VisuallyHidden-eEVd_sfi.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./Switch-Bp0NmC8t.js";import"./useFieldComponent-BBRXs3en.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BBpbo1Bk.js";import"./useFormReset-9RWtv4Ar.js";import"./LoadingSpinner-CnywtlQ4.js";import"./OverlayTrigger-BPtqEArA.js";import"./Text-BbFupL_Y.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Separator-Di5-JGnW.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./Avatar-DFoUENWr.js";import"./AlertIcon-DqNX7jjv.js";import"./Initials-C8ZWq15J.js";import"./index-BcxSEo57.js";const Br={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Lr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Lr as __namedExportsOrder,Br as default};
