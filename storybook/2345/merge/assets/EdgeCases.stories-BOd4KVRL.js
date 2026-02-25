import{j as r}from"./iframe-CAK8FS83.js";import{C as n,M as m}from"./MenuItem-BnW9Lg8D.js";import{C as s}from"./ContextMenuTrigger-DHcLaObj.js";import"./ContextMenuSection-gHmxmSmE.js";import{B as u}from"./Button-itgufTCs.js";import a from"./Default.stories-abwLKn0q.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BT7PEprG.js";import"./useOverlayController-Cgn9MX8W.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./clsx-B-dksMZM.js";import"./index-CbMMdC0j.js";import"./useStatic-CRQBoMuN.js";import"./browser-Bqr1AXz8.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./dynamic-D8OXR4zz.js";import"./Popover-BcIzS5Zx.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./Dialog-Bg78UE4C.js";import"./Button-Bm8bnERu.js";import"./utils-th26LVD6.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./context-Cva5eEgc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYhFSapw.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./RSPContexts-B_v10Iug.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./Text-BoinRLOA.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./Switch-CVJT33-Q.js";import"./useFieldComponent-DkAI1nDB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState--Lsum0qS.js";import"./useFormReset-ClNM6Kah.js";import"./LoadingSpinner-BC7xHqe0.js";import"./OverlayTrigger-YvJHasJp.js";import"./Text-DLuRhlhH.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Separator-C_NFalCC.js";import"./Heading-C00t5x9z.js";import"./Heading-CCBwW_g2.js";import"./Avatar-BSGxcrTC.js";import"./AlertIcon-DLSo9NlW.js";import"./Initials-Bfcag_uY.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
