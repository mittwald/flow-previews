import{j as r}from"./iframe-pec-daIN.js";import{C as n,M as e}from"./MenuItem-C_S7qqq1.js";import{C as s}from"./ContextMenuTrigger-DR00yKBn.js";import"./ContextMenuSection-DNSduqHu.js";import{B as u}from"./Button-TbsWowXg.js";import a from"./Default.stories-CsQuC31L.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-8dbKhHvU.js";import"./context-CSF0VmIA.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./clsx-B-dksMZM.js";import"./index-CHD_W7k-.js";import"./useStatic-DtKIUYIw.js";import"./browser-CB013lxp.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./dynamic-KYdmGlVp.js";import"./Popover-DLd5G0Ef.js";import"./useOverlayController-BZ8CrQho.js";import"./OverlayContextProvider-DRuVjJJZ.js";import"./Dialog-CHeMFU-y.js";import"./Button-BVdTMk7w.js";import"./utils-DgvXfbTX.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./context-6wXKo3vr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXePSkUY.js";import"./useFocus-8lECnDuB.js";import"./useFocusRing-D1bapTtD.js";import"./useFocusable-DHeceSRU.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./useControlledState-C8wEjdVb.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./Text-ChVSp7Zj.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./IconWarning-BNWGnhvf.js";import"./remote-CL_x9DF5.js";import"./Switch-DXJaXfG9.js";import"./useFieldComponent-BVaTpDhT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C94FIhG_.js";import"./useFormReset-DlmAX50c.js";import"./LoadingSpinner-DJdNJN2d.js";import"./OverlayTrigger-LLvsqu3e.js";import"./Text-KadZ5_Og.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Separator-B6r32TEf.js";import"./Heading-XncZngQX.js";import"./Heading-Dfi1y-Mg.js";import"./Avatar-CWmxtsLw.js";import"./AlertIcon-Df2ALci7.js";import"./Initials-PqVQbr8G.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
