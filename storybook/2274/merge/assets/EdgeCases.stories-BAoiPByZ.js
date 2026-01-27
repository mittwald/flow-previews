import{j as r}from"./iframe-BbrP11p-.js";import{C as n,M as e}from"./ContextMenu-cJ9VCCx4.js";import{C as s}from"./ContextMenuTrigger-CoWqqTGt.js";import"./ContextMenuSection-Djx2ksVO.js";import{B as u}from"./Button-D_6ZCoU5.js";import a from"./Default.stories-JqnLGQiM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./Switch-B8U3U_VW.js";import"./useFieldComponent-CnZp8uAU.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CfXF9mMB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-DT3DdEWP.js";import"./useFormReset-VtyCL_TW.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocus-DdYA68cd.js";import"./usePress-VHqnVNy0.js";import"./useFocusable-ssdBLHPa.js";import"./useControlledState-CrzzGVbO.js";import"./VisuallyHidden-BCVFUf4T.js";import"./Dialog-BH0tiGTi.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./useLabel-ChwTXcaC.js";import"./context-Cg0av1qu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./Text-BmgQOLJ4.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./Action-DGTK2X9F.js";import"./context-DfqDLyvd.js";import"./useStatic-DG6eeeN5.js";import"./browser-CKsvW9Gw.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./dynamic-CazQQjW9.js";import"./Popover-CH9SEcQK.js";import"./useOverlayController-BZ__G9XQ.js";import"./OverlayContextProvider-CX8G0M5v.js";import"./OverlayTrigger-BZQRt9cD.js";import"./Text-BLzGfhm5.js";import"./EmulatedBoldText-j9VeSllR.js";import"./LoadingSpinner-CoKKKOJW.js";import"./Separator-D_j_4uD2.js";import"./Heading-DRj7axTi.js";import"./Heading-qDkwaMZ2.js";import"./Avatar-Ck8GdWsy.js";import"./AlertIcon-B3ByzjK4.js";import"./Initials-BCv3640b.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
