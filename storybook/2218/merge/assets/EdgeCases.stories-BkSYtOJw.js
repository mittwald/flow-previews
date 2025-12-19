import{j as r}from"./iframe-BVdPrJ3b.js";import{C as n,M as e}from"./MenuItem-DJFJ98tk.js";import{C as s}from"./ContextMenuTrigger-CKq-K9ZB.js";import"./ContextMenuSection-97x_J9aj.js";import{B as u}from"./Button-DWZoHS5b.js";import a from"./Default.stories-CJemKsbW.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D5COu0gZ.js";import"./context-CCTeyNcb.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./clsx-B-dksMZM.js";import"./index-BWMeLKrj.js";import"./useStatic-BX7NV0z1.js";import"./browser-DSBfFWZr.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./dynamic-VccpDVll.js";import"./Popover-Cqwaieux.js";import"./useOverlayController-xrHTUCYk.js";import"./OverlayContextProvider-D_N4RW7r.js";import"./Dialog-BIQQDMqR.js";import"./Button-BCUp5wJP.js";import"./utils-BEq1Wr11.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./context-D026yTy_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DUwPxRbX.js";import"./useFocus-DKH0A8r5.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./RSPContexts-Bdb5uPWt.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./Text-CmXVeCCc.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./VisuallyHidden-BtVtJU_V.js";import"./IconWarning-YADbbYCH.js";import"./remote-CTgJkn4z.js";import"./Switch-DaD-7JH2.js";import"./useFieldComponent-Pua8aj4t.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D2AlcaAf.js";import"./useFormReset-DipgmSs2.js";import"./OverlayTrigger-BdaWs8nX.js";import"./Text-nQWL8z2r.js";import"./EmulatedBoldText-BVln2yP5.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./Separator-C27KLFMb.js";import"./Heading-CFOSEH3z.js";import"./Heading-BpzKqMX-.js";import"./Avatar-BwdZlrCf.js";import"./AlertIcon-BrrSUnxf.js";import"./Initials-d7Tabozf.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
