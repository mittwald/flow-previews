import{j as r}from"./iframe-EfPcFfHz.js";import{C as n,M as m}from"./MenuItem-C87D6MSd.js";import{C as s}from"./ContextMenuTrigger-GU6_CoyT.js";import"./ContextMenuSection-CgcrgsP7.js";import{B as u}from"./Button-wFzIQtGi.js";import a from"./Default.stories-CjRv4VCH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-DG-IZD13.js";import"./useOverlayController-xYgjz7Dg.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./useStatic-V9jmy_2G.js";import"./browser-hyQhTs1N.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./dynamic-BKd_XzPu.js";import"./Popover-BwjMTXaO.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./Dialog-DJ1EGGEI.js";import"./Button-BlxZZJFh.js";import"./utils-Cnkpfm_P.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./context-kn7lEdrW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CzmE2CoS.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./useControlledState-WqoJm4pI.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./Text-B4oHPq8R.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./VisuallyHidden-CH2GsO1v.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./Switch-BRWRrgiA.js";import"./useFieldComponent-BpgXbjM-.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCnxvtLO.js";import"./useFormReset-CDR6jl2x.js";import"./LoadingSpinner-5WRu_N9f.js";import"./OverlayTrigger-DoGZlS98.js";import"./Text-CRFCcT-P.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Separator-DBO-VJt5.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./Avatar-Dfn-Q8FW.js";import"./AlertIcon-CtDfui7q.js";import"./Initials-D99XXJiU.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
