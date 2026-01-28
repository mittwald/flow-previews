import{j as r}from"./iframe-DXKyl4qq.js";import{C as n,M as e}from"./ContextMenu-B6ZDxDpz.js";import{C as s}from"./ContextMenuTrigger-fF4tX0bh.js";import"./ContextMenuSection-BIRP1Ixf.js";import{B as u}from"./Button-0acoIVQZ.js";import a from"./Default.stories-DR22j2LL.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./index-CK0x1Z6h.js";import"./IconWarning-BTtxekbk.js";import"./remote-5V97MXBJ.js";import"./Switch-BEXipD0H.js";import"./useFieldComponent-DrLbNusb.js";import"./Label.module-CUYTf9Jc.js";import"./utils-Cgx1j8_A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-uqciZ7Ue.js";import"./useFormReset-Cw-gwOYV.js";import"./useFocusRing-DoixN5z_.js";import"./useFocus-BAjbVDBz.js";import"./usePress-MFF54RNh.js";import"./useFocusable-DAwaDAhU.js";import"./useControlledState-DW1EgN0_.js";import"./VisuallyHidden-XnRwWdWi.js";import"./Dialog-B1psX4sF.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./useLabel-CXFTMfS2.js";import"./context-C5-138xc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DBmlKLt8.js";import"./OverlayArrow-BvQnSdeu.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./Text-Dy69l_TS.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./useCollator-D4u7p9z_.js";import"./FocusScope-CeuTnAxx.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./Action-eA8jYG3_.js";import"./context-9N5Shw7P.js";import"./useStatic-CdHxY_ZS.js";import"./browser-Q1FjFR8E.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./dynamic-CaArDE2O.js";import"./Popover-aE3BG6iV.js";import"./useOverlayController-jwGD9Xed.js";import"./OverlayContextProvider-M458RI5v.js";import"./OverlayTrigger-BY_70k08.js";import"./Text-DlQihciA.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./LoadingSpinner-NKyffFLh.js";import"./Separator-C7IcNn6E.js";import"./Heading-C5r2I8c5.js";import"./Heading-CG4_-w1-.js";import"./Avatar-BC8WAal1.js";import"./AlertIcon-BU8g3GYG.js";import"./Initials-DkisAafa.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
