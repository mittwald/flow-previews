import{j as r}from"./iframe-S6a6IBGW.js";import{C as n,M as e}from"./ContextMenu-CyoIs3h1.js";import{C as s}from"./ContextMenuTrigger-D5927t21.js";import"./ContextMenuSection-CXnCaYUl.js";import{B as u}from"./Button-B33IEcV3.js";import a from"./Default.stories-DNy0ZMkS.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./IconWarning-D0GzEl3K.js";import"./remote-CCjzztUh.js";import"./Switch-CvxXcXnZ.js";import"./useFieldComponent-C7YS4lAg.js";import"./Label.module-CUYTf9Jc.js";import"./utils-B8ercvf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-DYZLdreX.js";import"./useFormReset-DK3gdO9Q.js";import"./usePress-BUR3MtQf.js";import"./useFocus--oJxMCZo.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocusable-DTyt-kbS.js";import"./useControlledState-BHa0sYDq.js";import"./VisuallyHidden-BN0xrgav.js";import"./Dialog-C_QuIxo5.js";import"./Button-BnRrl5N8.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./useLabel-I1naabyM.js";import"./context-CXquv49b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./Text-XPHoRcaC.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./browser-C6w_OiT9.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./dynamic-wFxxwS8T.js";import"./Popover-CTHthEzP.js";import"./useOverlayController-D5w3iZSN.js";import"./OverlayContextProvider-BTF4iLEG.js";import"./OverlayTrigger-4uRsw7zJ.js";import"./Text-CLecf1p6.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./LoadingSpinner-ngl346gH.js";import"./Separator-BY1MGa_L.js";import"./Heading-OEjBXIpA.js";import"./Heading-B4TNl6d1.js";import"./Avatar-DiCx8oDo.js";import"./AlertIcon-DgqrgpKu.js";import"./Initials-D_8Pcfi8.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
