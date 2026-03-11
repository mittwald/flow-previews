import{j as r}from"./iframe-DlWpeVbs.js";import{C as n,M as m}from"./MenuItem-BewYp1Rk.js";import{C as s}from"./ContextMenuTrigger-C_Pl5-jO.js";import"./ContextMenuSection-BiNqDgyA.js";import{B as u}from"./Button-OB72uiKS.js";import a from"./Default.stories-Bd_zINos.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-C-ID7iPf.js";import"./useOverlayController-BQMakZl8.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./clsx-B-dksMZM.js";import"./index-Ci0KQ92C.js";import"./useStatic-JbSR48w4.js";import"./browser-CHTiPLC9.js";import"./getActionGroupSlot-bYWxcQao.js";import"./dynamic-D3tAnWym.js";import"./Popover-C0He_Yr4.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./Dialog-DM93NPwE.js";import"./Button-BH6lR-Fb.js";import"./utils-BWqiCJWQ.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./context-w6Z3dllt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./RSPContexts-8MG42HPe.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./Text-BEVTNZ1h.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./VisuallyHidden-tMd7tplK.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./Switch-7okJ4e96.js";import"./useFieldComponent-CpDSJ5w8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-1KoeNqQn.js";import"./useFormReset-CZgOMFUA.js";import"./LoadingSpinner-C6D9eT_m.js";import"./OverlayTrigger-hKGFSF4k.js";import"./Text-BjwiRmws.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Separator-DB_iSq0u.js";import"./Heading-BJuxWHmq.js";import"./Heading-DCdSeC1b.js";import"./Avatar-DUtivJUf.js";import"./AlertIcon-DyJmeCBc.js";import"./Initials-Bnle5sl6.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
