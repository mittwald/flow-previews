import{j as r}from"./iframe-DcJYxA4H.js";import{C as n,M as e}from"./ContextMenu-BaHZXq3w.js";import{C as s}from"./ContextMenuTrigger-DZXelGJV.js";import"./ContextMenuSection-QDoQ1eGc.js";import{B as u}from"./Button-ByRmZgOS.js";import a from"./Default.stories-BRyJv2Ny.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./index-BLaZpk-P.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./Switch-CNxKYhBR.js";import"./useFieldComponent-rnjT2dRC.js";import"./Label.module-CUYTf9Jc.js";import"./utils-DilzIpMR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-Dz0vAxRa.js";import"./useFormReset-BxLymg31.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocus-CBKKPZUx.js";import"./usePress-CoiuKGvm.js";import"./useFocusable-CBOZtalu.js";import"./useControlledState-BqUYry3y.js";import"./VisuallyHidden-5QTr2j1N.js";import"./Dialog-Dz1EswEt.js";import"./Button-igLlXErA.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./useLabel-DpAfaget.js";import"./context-qV6jeEP3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-B2T9ptP_.js";import"./OverlayArrow-wMKeeSQ0.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./Text-CtAF_MdJ.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./Action-Dlz18l4c.js";import"./context-D2f0m16x.js";import"./useStatic-CtzGIMZo.js";import"./browser-DuGwj8Dx.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./dynamic-BeRAROrj.js";import"./Popover-B9Nlr10i.js";import"./useOverlayController-B1TTUHMS.js";import"./OverlayContextProvider-77-UrxPo.js";import"./OverlayTrigger-bsYBPnMH.js";import"./Text-DtgxB8-I.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./Separator-DUo83LAb.js";import"./Heading-CIr8mTXG.js";import"./Heading-BwYTefZe.js";import"./Avatar-q4aSBKpk.js";import"./AlertIcon-5jttAq4b.js";import"./Initials-0UxsMoMr.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
