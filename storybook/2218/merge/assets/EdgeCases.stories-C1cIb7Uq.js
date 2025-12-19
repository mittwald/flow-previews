import{j as r}from"./iframe-VTkEMv55.js";import{C as n,M as e}from"./MenuItem-BPSEa1n5.js";import{C as s}from"./ContextMenuTrigger-DZUBcdZH.js";import"./ContextMenuSection-CWe96eWW.js";import{B as u}from"./Button-B9lvy9yg.js";import a from"./Default.stories-BF_ADYCU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DV-QBt8x.js";import"./context-CeKSAP77.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./clsx-B-dksMZM.js";import"./index-D_xlAiD1.js";import"./useStatic-OVy-y77u.js";import"./browser-_Qir5MkB.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./dynamic-BSd9oB0r.js";import"./Popover-DMia4ia0.js";import"./useOverlayController-BPG62MgI.js";import"./OverlayContextProvider-CbIHT6gb.js";import"./Dialog-Qb8RaXBy.js";import"./Button-BKfoJr1S.js";import"./utils-DPKXOmt2.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./context-BVezW8pN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cb2XrqKT.js";import"./useFocus-JgmAf8eL.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./Text-DB2BTtqM.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./VisuallyHidden-DjbItwE4.js";import"./IconWarning-D408DR62.js";import"./remote-pRnbNSGs.js";import"./Switch-BaU8B2ak.js";import"./useFieldComponent-CicShoBh.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5L8hNIKq.js";import"./useFormReset-DRm0nHwN.js";import"./OverlayTrigger-DkpyXFVa.js";import"./Text-DlbRcSah.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./LoadingSpinner-BWeGH-7c.js";import"./Separator-oOeULqz2.js";import"./Heading-DR27KtWq.js";import"./Heading-DNyZLCgr.js";import"./Avatar-Bom431z7.js";import"./AlertIcon-CHQuhrRU.js";import"./Initials-CuOpPlK5.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
