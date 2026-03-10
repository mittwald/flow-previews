import{j as r}from"./iframe-DAdEF_a9.js";import{C as n,M as m}from"./MenuItem--rvDEZFV.js";import{C as s}from"./ContextMenuTrigger-_hx5eYaI.js";import"./ContextMenuSection-C3uZY6Us.js";import{B as u}from"./Button-BL7hv3yg.js";import a from"./Default.stories-BWF3sGr-.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BtBHZwy0.js";import"./useOverlayController-BdzCJ-ub.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./clsx-B-dksMZM.js";import"./index-DqNUQeP9.js";import"./useStatic-CKtHP4uD.js";import"./browser-DTw6e149.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./dynamic-pIUCZeo6.js";import"./Popover-CBYvjYoJ.js";import"./OverlayContextProvider-DG82vmF2.js";import"./Dialog-CWk-zVbe.js";import"./Button-DZLmAbDI.js";import"./utils-B1o5BDIk.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./context-DrtV74MG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-AnOXMqB9.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./RSPContexts-BAZVNF9B.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./Text-ConA-l-E.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./VisuallyHidden-DtDztoAI.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./Switch-F4fs7rzi.js";import"./useFieldComponent-CLfspKSt.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D2U5XJ_A.js";import"./useFormReset-BoqlzNfE.js";import"./LoadingSpinner-BzYwrllt.js";import"./OverlayTrigger-DC0b_r1T.js";import"./Text-BlXexclX.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Separator-J1_IhSVt.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./Avatar-BqvI1TA4.js";import"./AlertIcon-DxXhtuAo.js";import"./Initials-CajZKOQ_.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
