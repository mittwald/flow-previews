import{j as r}from"./iframe-Cwcli8hM.js";import{C as n,M as e}from"./ContextMenu-DmsAqV4J.js";import{C as s}from"./ContextMenuTrigger-ypiIBVmp.js";import"./ContextMenuSection-BAImieHE.js";import{B as u}from"./Button-I78ZffkB.js";import a from"./Default.stories-HHFC4YQ-.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./index-CcWFAiT6.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./Switch-CDpOGdW5.js";import"./useFieldComponent-DIqLhVln.js";import"./Label.module-CUYTf9Jc.js";import"./utils-C3qjWKVL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-XsP0iusT.js";import"./useFormReset-BDGa5C7A.js";import"./usePress-CMhi8zJA.js";import"./useFocus-CSHYTGFD.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./useControlledState-ClHEyKKa.js";import"./VisuallyHidden-BpjAuZe7.js";import"./Dialog-q_50MZOU.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./useLabel-23O2EZ34.js";import"./context-ChPy2xgW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./Text-C18q6Xnm.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./Action-BmzkYOqA.js";import"./context-Cu13uzRC.js";import"./useStatic-DFI4OZ-s.js";import"./browser-Dim89v3O.js";import"./getActionGroupSlot-DirYDTjy.js";import"./dynamic-kiJ_5GPX.js";import"./Popover-BCv6ExYf.js";import"./useOverlayController-YjLSX7hV.js";import"./OverlayContextProvider-Br5Omgfk.js";import"./OverlayTrigger-hzfyObC1.js";import"./Text-D-waKGHU.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./LoadingSpinner-KOoU2K2x.js";import"./Separator-Bo2jeMaB.js";import"./Heading-BXqGaPUH.js";import"./Heading-BEUpHugf.js";import"./Avatar-CTHEpBGa.js";import"./AlertIcon-sG8HORuJ.js";import"./Initials-DET4K6X7.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
