import{j as r}from"./iframe-RCf6-4YI.js";import{C as n,M as e}from"./MenuItem-CntTblNo.js";import{C as s}from"./ContextMenuTrigger-CYWpLAs2.js";import"./ContextMenuSection-BKm1CmgZ.js";import{B as u}from"./Button-CRZ6FKVD.js";import a from"./Default.stories-9y_Yc2de.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-3k_Z5Vty.js";import"./context-CPkaXk0v.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./clsx-B-dksMZM.js";import"./index-BOW2unrE.js";import"./useStatic-CutofGFR.js";import"./browser-CrfZ_U78.js";import"./getActionGroupSlot-D-mME3-D.js";import"./dynamic-KYjVHqFc.js";import"./Popover-Dgdlkh7G.js";import"./useOverlayController-CujP3Hug.js";import"./OverlayContextProvider-ByS0uwk8.js";import"./Dialog-DSQ8RGJ5.js";import"./Button-BjppKy1G.js";import"./utils-2Kt3K5yX.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./context-C_2cqKRl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress--XVd0Ch5.js";import"./useFocus-BlmWIWuz.js";import"./useFocusRing-DZgLoJPG.js";import"./useFocusable-CGRcLUlH.js";import"./RSPContexts-BsLLj1Xv.js";import"./OverlayArrow-CuFac9ex.js";import"./useControlledState-BQGvOabU.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./Text-BGlg7n8N.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./VisuallyHidden-I0X1hTaI.js";import"./IconWarning-B0h7osnB.js";import"./remote-B1M75xiP.js";import"./Switch-Dexb63u8.js";import"./useFieldComponent-C9VOsv8D.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Y5JGQboA.js";import"./useFormReset-CpZDZfD6.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./OverlayTrigger-0-HRuxGs.js";import"./Text-HaNR6yqL.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Separator-jSPMfvOh.js";import"./Heading-B3B6PIpG.js";import"./Heading-DTpFTjmP.js";import"./Avatar-DzGpBC83.js";import"./AlertIcon-C_s3bh0k.js";import"./Initials-Bl2xIfHC.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
