import{j as r}from"./iframe-BLisfkW1.js";import{C as n,M as m}from"./MenuItem-DRz9rpZo.js";import{C as s}from"./ContextMenuTrigger-BY25kSqR.js";import"./ContextMenuSection-bY8Y-pvV.js";import{B as u}from"./Button-BfYq4-Jl.js";import a from"./Default.stories-BWtRAiO4.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-Ba3fo7J6.js";import"./useOverlayController-UaqgI9Sz.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./clsx-B-dksMZM.js";import"./index-CURFR8tK.js";import"./useStatic-Cf1wupkY.js";import"./browser-1YnzmFhG.js";import"./getActionGroupSlot-JAeF61ot.js";import"./dynamic-B3kpKjwM.js";import"./Popover-CG9tv1E3.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./Dialog-YGNnE7N8.js";import"./Button-BryrJTx5.js";import"./utils-B2KexK2G.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./context-B09EtTwC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bt2uh0Mh.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useFocusable-2bJXkpaN.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./Text-CMQTkDl6.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./VisuallyHidden-y8IU71vp.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./Switch-cT8WhVip.js";import"./useFieldComponent-DG2srt-t.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DrUVyNcG.js";import"./useFormReset-fweVV-SC.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./OverlayTrigger-47H3bobw.js";import"./Text-BzdTXRF7.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Separator-CGc-J4X5.js";import"./Heading-D7iYFS4a.js";import"./Heading-BRGk0Lny.js";import"./Avatar-Cs3MsV-X.js";import"./AlertIcon-BH2ywHIc.js";import"./Initials-BRCTFGBH.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Ar=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Ar as __namedExportsOrder,Lr as default};
