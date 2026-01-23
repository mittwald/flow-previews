import{j as r}from"./iframe-Pk_Kk4JL.js";import{C as n,M as e}from"./ContextMenu-CiFQ-zky.js";import{C as s}from"./ContextMenuTrigger-CxKtmIZb.js";import"./ContextMenuSection-C_1sxa8j.js";import{B as u}from"./Button-D9QX6l1e.js";import a from"./Default.stories-N2MpuOap.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./IconWarning-BZbEOivs.js";import"./remote-jZTk_Znj.js";import"./Switch-B9h3ZjDI.js";import"./useFieldComponent-T3_INYSJ.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CLxMEgR2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-D0fCEfqb.js";import"./useFormReset-bAhSNWNb.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./useControlledState-48Ld73MP.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./Dialog-hqEaC_v2.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./useLabel-C5txBCfY.js";import"./context-CrHSUJ76.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./Text-cuBcImQE.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./Action-C8SSnKxx.js";import"./context-DgSiNkYd.js";import"./useStatic-i-ZCX3ob.js";import"./browser-DxGxcnNA.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./dynamic-I4mA0X6x.js";import"./Popover-CNf49oKt.js";import"./useOverlayController-C-ffow-t.js";import"./OverlayContextProvider-FOEyue6v.js";import"./OverlayTrigger-C6V65Cj9.js";import"./Text-yAUoHBmv.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./LoadingSpinner-DPjJtv8A.js";import"./Separator-Hj1gK_Fb.js";import"./Heading-wNCcNm7o.js";import"./Heading-CHcXaZb2.js";import"./Avatar-CKA31q0Q.js";import"./AlertIcon-BQAdHRLg.js";import"./Initials-MkArOpaL.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
