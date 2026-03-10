import{j as r}from"./iframe-BJFPIndf.js";import{C as n,M as m}from"./MenuItem-JskQP9Rn.js";import{C as s}from"./ContextMenuTrigger-DpaR76-2.js";import"./ContextMenuSection-BXIYeg2w.js";import{B as u}from"./Button-CMLIz8EV.js";import a from"./Default.stories-DoilPEMk.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-91iU7Ul_.js";import"./useOverlayController-BY9uU74J.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./clsx-B-dksMZM.js";import"./index-Bg9RtLBP.js";import"./useStatic-BUxz8dmg.js";import"./browser-DqcTc9Nr.js";import"./getActionGroupSlot-ggari8la.js";import"./dynamic-Ds5yn-UC.js";import"./Popover-DcH799mS.js";import"./OverlayContextProvider-BuTLd76h.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./utils-WT8FFEB4.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./context-Dnh7V-Fy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./RSPContexts-BXfCPyGV.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./Text-D3Y_kc1g.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./Switch-BLkB3cDb.js";import"./useFieldComponent-gU-XMME4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CAGLbUXI.js";import"./useFormReset-CwfjSagb.js";import"./LoadingSpinner-mc2sXUEG.js";import"./OverlayTrigger-CKuXx8bv.js";import"./Text-CGF68X8s.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Separator-CTjh1l-y.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./Avatar-PyLtBe2E.js";import"./AlertIcon-GZVP8WsI.js";import"./Initials-Dj05afrm.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
