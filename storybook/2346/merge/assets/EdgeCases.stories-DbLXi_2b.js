import{j as r}from"./iframe-teIxY4wP.js";import{C as n,M as m}from"./MenuItem-N2DhByKP.js";import{C as s}from"./ContextMenuTrigger-DiTJhkyZ.js";import"./ContextMenuSection-DZpqaSo0.js";import{B as u}from"./Button-CCmGuoae.js";import a from"./Default.stories-BApLWQHf.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BzoAcrhu.js";import"./useOverlayController-2V9dFGfh.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./clsx-B-dksMZM.js";import"./index-SbFVnFKt.js";import"./useStatic-JzrpAx77.js";import"./browser-ClA0f7pc.js";import"./getActionGroupSlot-BwsAD19l.js";import"./dynamic-Bd0vnJCs.js";import"./Popover-Bc-eSFBz.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./Dialog-CPTLkUM-.js";import"./Button-DPcEERaP.js";import"./utils-C8wUhSun.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./context-Bkxu1haQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Znh85jsw.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useFocusable-C4kMCM88.js";import"./RSPContexts-DVypfZug.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./Text-BEd6-Qqe.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./VisuallyHidden-BEOGf6u-.js";import"./IconWarning-C8c-iA3p.js";import"./remote-DC3yMzFm.js";import"./Switch-Dr6c_rSV.js";import"./useFieldComponent-DaZL5efl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZeRsjuB.js";import"./useFormReset-DcLCq2Kv.js";import"./LoadingSpinner-CKqfIoaL.js";import"./OverlayTrigger-DxY4DuAp.js";import"./Text-CB74-0Ir.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./Separator-BI6REujL.js";import"./Heading-BcZ49Txx.js";import"./Heading-CqSJbJuk.js";import"./Avatar-BzBo61eF.js";import"./AlertIcon-nbGMee0S.js";import"./Initials-B81xLRdK.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
