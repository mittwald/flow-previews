import{j as r}from"./iframe-CH-PGbIe.js";import{C as n,M as e}from"./MenuItem-T_T0HTHx.js";import{C as s}from"./ContextMenuTrigger--KtB7eik.js";import"./ContextMenuSection-NNPlO46F.js";import{B as u}from"./Button-Dl-iCxcF.js";import a from"./Default.stories-DLQ_Du1c.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CX67yONB.js";import"./context-BsZ7lsCx.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./clsx-B-dksMZM.js";import"./index-yvyiz2TD.js";import"./useStatic-DyjFLUOF.js";import"./browser-Bk_hun62.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./dynamic-DYPsp9rr.js";import"./Popover-E9WcTTGu.js";import"./useOverlayController-DE9i1G--.js";import"./OverlayContextProvider-C92IYoS4.js";import"./Dialog-LWxSnoH8.js";import"./Button-BxJ7LcYT.js";import"./utils-BUbYN1U7.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./context-BEPAk1pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CjXzQGxt.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocusable-DX9jgPLa.js";import"./RSPContexts-CFzFD81a.js";import"./OverlayArrow-BxBE_adq.js";import"./useControlledState-BQPo69mZ.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./Text-C_Kx-nbJ.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./VisuallyHidden-BZmadp8e.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./Switch-BHYJCOuH.js";import"./useFieldComponent-R38s1k2Z.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSKOmrza.js";import"./useFormReset-DarrOQyz.js";import"./LoadingSpinner-BVg6Htwb.js";import"./OverlayTrigger-BCj6WW1R.js";import"./Text-DUTVzyy5.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Separator-B1KE2hxC.js";import"./Heading-BkfS56Xz.js";import"./Heading-DuD4iKmL.js";import"./Avatar-D_XhaOGG.js";import"./AlertIcon-Cf4_Rc8_.js";import"./Initials-BVq7u09E.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
