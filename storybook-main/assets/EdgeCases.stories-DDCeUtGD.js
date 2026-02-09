import{j as r}from"./iframe-BzN-GDSV.js";import{C as n,M as e}from"./MenuItem-DfaL74tp.js";import{C as s}from"./ContextMenuTrigger-c7hKzxRh.js";import"./ContextMenuSection-Fnzuskm8.js";import{B as u}from"./Button-CqLQCx50.js";import a from"./Default.stories-CNH5Gf_C.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DMSKmOJg.js";import"./context-CO_pcEBI.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./clsx-B-dksMZM.js";import"./index-jqMu6fsr.js";import"./useStatic-BCK3u9CD.js";import"./browser-BZan5p2Q.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./dynamic-CBHHoCBf.js";import"./Popover-DxjLrjat.js";import"./useOverlayController-CQvNW7BN.js";import"./OverlayContextProvider-LhIWYE9-.js";import"./Dialog-D-_l-Dz2.js";import"./Button-CTrxkMff.js";import"./utils-DZiSZNRH.js";import"./ProgressBar-BhNLuOhb.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D4-tvGJV.js";import"./context-CV01TaOS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CKBw2syN.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useFocusable-CZxxukff.js";import"./RSPContexts-836Xa0kI.js";import"./OverlayArrow-45O3XaxD.js";import"./useControlledState-VicJRSad.js";import"./Collection-Ckv3RK5p.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./SelectionIndicator-Clnr_8iz.js";import"./Separator-grnmoeTC.js";import"./Text-9Slz249r.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./VisuallyHidden-DwmcGrU0.js";import"./IconWarning-Dq5gBH8b.js";import"./remote-DmyBa_Y3.js";import"./Switch-D9xZcKsm.js";import"./useFieldComponent-DWIvkE7m.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-FvSvnnqY.js";import"./useFormReset-C_nKv_ku.js";import"./LoadingSpinner-DwhPZLF8.js";import"./OverlayTrigger-DARUzxHp.js";import"./Text-w8Xk5tzh.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Separator--RufK56Z.js";import"./Heading-_0-NRbck.js";import"./Heading-Cy7B52s5.js";import"./Avatar-C4kxR4RW.js";import"./AlertIcon-CN2JBdj6.js";import"./Initials-CssVFpOU.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
