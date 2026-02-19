import{j as r}from"./iframe-CXQlTNqj.js";import{C as n,M as m}from"./MenuItem-BFzkdxhd.js";import{C as s}from"./ContextMenuTrigger-BNYTsfXo.js";import"./ContextMenuSection-nZf_hQYT.js";import{B as u}from"./Button-BlafpMbq.js";import a from"./Default.stories-DiccR_0A.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-CqBtrpsE.js";import"./useOverlayController-E6hXP07l.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./clsx-B-dksMZM.js";import"./index-AYGk-Z4X.js";import"./useStatic-D-kx8TMY.js";import"./browser-C0g7jXxm.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./dynamic-UE7lg7x0.js";import"./Popover-Dd_o8eTz.js";import"./OverlayContextProvider-97FigBld.js";import"./Dialog-D3U2a9zn.js";import"./Button-BcwVzCcr.js";import"./utils-DV_byzth.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./context-CCBj18N5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3E8Ss2p.js";import"./useFocus-DfPsdBQQ.js";import"./useFocusRing-D1AlgOvW.js";import"./useFocusable-D7YkDf-E.js";import"./RSPContexts-CaXq0cAk.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./Text-QCBVP_aW.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./VisuallyHidden-bRUw4X6B.js";import"./IconWarning-qWu7I_Pu.js";import"./remote-aElBUAr6.js";import"./Switch-BmjUPv22.js";import"./useFieldComponent-Cn71_kOc.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-HYmQ2FA-.js";import"./useFormReset-BDdgSN6q.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./OverlayTrigger-CeJmnxGE.js";import"./Text-B3somVi7.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./Separator-Coq2WAcu.js";import"./Heading-NHDwQUXa.js";import"./Heading-D8oa06Vc.js";import"./Avatar-DMf63unF.js";import"./AlertIcon-B77GTCGL.js";import"./Initials-DnHAnyKN.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
