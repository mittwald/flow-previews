import{j as r}from"./iframe-BKpTcuej.js";import{C as n,M as e}from"./MenuItem-B-PSMY4f.js";import{C as s}from"./ContextMenuTrigger-8hFta_2Z.js";import"./ContextMenuSection-CP33TlWV.js";import{B as u}from"./Button-CHR5Lto_.js";import a from"./Default.stories-CuM6U-J2.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./clsx-B-dksMZM.js";import"./index-DwEhfHus.js";import"./useStatic-D1T02rpq.js";import"./browser-DdR_cYXU.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./dynamic-D5pLUzdK.js";import"./Popover-pxlmKNyd.js";import"./useOverlayController-C8fdBT6C.js";import"./OverlayContextProvider-DjenE3bO.js";import"./Dialog-CnIAbR2d.js";import"./Button-WezQgFMH.js";import"./utils-BuTqHWUg.js";import"./ProgressBar-gtPQqryh.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLAZgdhb.js";import"./context-Bt___W0l.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwvZqs_N.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./useFocusable-8gC31DNg.js";import"./RSPContexts-CNLAcvzw.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useControlledState-C61mrJlx.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./Text-_5F14b0c.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./VisuallyHidden-DjSqpFWl.js";import"./IconWarning-8R3XoFcV.js";import"./remote-nPMBb6wO.js";import"./Switch-C4B1ZgSC.js";import"./useFieldComponent-AXq55mny.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BpHLvo9X.js";import"./useFormReset-DjxTrJRS.js";import"./LoadingSpinner-CSX_cmFV.js";import"./OverlayTrigger-C56VcKX9.js";import"./Text-ChzZQXaT.js";import"./EmulatedBoldText-DTp9riJA.js";import"./Separator-lEiQbRar.js";import"./Heading-Dusm-uvD.js";import"./Heading-Bj0wrS_Z.js";import"./Avatar-BfcE7SbP.js";import"./AlertIcon-BxMTL622.js";import"./Initials-CVSDIGAf.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
