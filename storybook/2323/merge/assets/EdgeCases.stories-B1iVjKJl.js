import{j as r}from"./iframe-CIhdjqSz.js";import{C as n,M as m}from"./MenuItem-JBoS3pEj.js";import{C as s}from"./ContextMenuTrigger-CCML0O9_.js";import"./ContextMenuSection-B32Hv_M2.js";import{B as u}from"./Button--NFWCTgK.js";import a from"./Default.stories-CdPs43rf.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-DvjVnKvH.js";import"./useOverlayController-DM_j6n2m.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./useStatic-BON1q5w1.js";import"./browser-BTfojbbK.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./dynamic-DC2aGj60.js";import"./Popover-BtssMKQJ.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./utils-3Ll5mTsj.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./Text-BWZGL9q7.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./VisuallyHidden-Szd7uPuS.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./Switch-C36cgj48.js";import"./useFieldComponent-BDBEatho.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BgmV9dKe.js";import"./useFormReset-CCc0UGFI.js";import"./LoadingSpinner-CnQRgWlh.js";import"./OverlayTrigger-DlE73CJz.js";import"./Text-DgrqnOua.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Separator-znBBe8Ls.js";import"./Heading-DFMRUW3K.js";import"./Heading-N3mW0_Ma.js";import"./Avatar-dxv8AFxx.js";import"./AlertIcon-DlNCugjU.js";import"./Initials-B112WVNi.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
