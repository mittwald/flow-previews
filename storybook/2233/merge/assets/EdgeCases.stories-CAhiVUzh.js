import{j as r}from"./iframe-BAg_Vkif.js";import{C as n,M as e}from"./MenuItem-BflM4WgW.js";import{C as s}from"./ContextMenuTrigger-DvCjp00F.js";import"./ContextMenuSection-BZOfIkxf.js";import{B as u}from"./Button-CNza9GnT.js";import a from"./Default.stories-DJl75Tfb.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BOjxF4Dl.js";import"./context-BAbefeLZ.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./useStatic-DpED2Oge.js";import"./browser-CG8hIWrH.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./dynamic-eE1nsZvE.js";import"./Popover-DljJ0khj.js";import"./useOverlayController-DRKioFUp.js";import"./OverlayContextProvider-Bkht6Vbm.js";import"./Dialog-BlnwYq_Z.js";import"./Button-UGLVSCHM.js";import"./utils-BI8UFEcl.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./context-Dr2F39lD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./RSPContexts-DM5FD37h.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./Text-B1sdohWQ.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./VisuallyHidden-0Cja9mQD.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./Switch-DFiKdvqB.js";import"./useFieldComponent-B6Kjd1ej.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BTUxa_L6.js";import"./useFormReset-cz3XyTOd.js";import"./OverlayTrigger-JJZBSc9G.js";import"./Text-Cv_CDcg6.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./LoadingSpinner-BktXBT1I.js";import"./Separator-W-A1MzI3.js";import"./Heading-Dn2ss8TC.js";import"./Heading-DM0DAFfT.js";import"./Avatar-BhnxXlvZ.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./Initials-ByhtGknU.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
