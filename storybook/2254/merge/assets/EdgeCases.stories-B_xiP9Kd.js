import{j as r}from"./iframe-pcvtdEGM.js";import{C as n,M as e}from"./ContextMenu-DJR2fZHZ.js";import{C as s}from"./ContextMenuTrigger-mJDnczT7.js";import"./ContextMenuSection-CnsRFJEn.js";import{B as u}from"./Button-uyxj5lKX.js";import a from"./Default.stories-BptgKDRN.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./index-YznY-g7A.js";import"./IconWarning-BUxMadyi.js";import"./remote-O2EONUZN.js";import"./Switch-RCsrPuWC.js";import"./useFieldComponent-DX_YsVYS.js";import"./Label.module-CUYTf9Jc.js";import"./utils-fsWZtkeO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CHUJbcAS.js";import"./useFormReset-D7xZNI6Q.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./useControlledState-CJg030Qn.js";import"./VisuallyHidden-DxWu5xEc.js";import"./Dialog-DwYtEz4y.js";import"./Button-C7g9LfsB.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./useLabel-D_iN71C8.js";import"./context-We2COa_S.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./Text-DqkI-mFO.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./Action-DJjvSFsd.js";import"./context-rIsit77n.js";import"./useStatic-BCDrLUdV.js";import"./browser-DdUrC3oM.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./dynamic-CjFFErYF.js";import"./Popover-DAaX80Bn.js";import"./useOverlayController-DYra3gnv.js";import"./OverlayContextProvider-B8OuVkDx.js";import"./OverlayTrigger-AmfCki8T.js";import"./Text-B9qmJggM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./LoadingSpinner-CRozfiA2.js";import"./Separator-DP-MjS7Z.js";import"./Heading-BaRKstVM.js";import"./Heading-BBMu1zEG.js";import"./Avatar-Cjun65_-.js";import"./AlertIcon-CRV-RQ9G.js";import"./Initials-BtepRgOB.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
