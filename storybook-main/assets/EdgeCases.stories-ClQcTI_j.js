import{j as r}from"./iframe-DeaTJDua.js";import{C as n,M as m}from"./MenuItem-DGWfsP66.js";import{C as s}from"./ContextMenuTrigger-B7vm9S1N.js";import"./ContextMenuSection-CEBTY825.js";import{B as u}from"./Button-Cbxy7DVV.js";import a from"./Default.stories-BKYGynr_.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-RbyKfuct.js";import"./useOverlayController-DRqv1s8t.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./clsx-B-dksMZM.js";import"./index-BmNXFkrE.js";import"./useStatic-Die7f9lk.js";import"./browser-DgW11PhP.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./dynamic-_cZQrmBt.js";import"./Popover-Bx3CBkxo.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./Dialog-BDRpw9MJ.js";import"./Button-CkcG2vDz.js";import"./utils-DAn_19Le.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./context-DpHy2B7Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGs6tBRd.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useFocusable-DXFTvAH_.js";import"./RSPContexts-n2YtmRLP.js";import"./OverlayArrow-seoLwAns.js";import"./useControlledState-CvKG4MPs.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./Text-D55T9z4A.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./VisuallyHidden-BMpCP5yc.js";import"./IconWarning-Bnohnd1u.js";import"./remote-4WWdz0S_.js";import"./Switch-DMQfz-Q0.js";import"./useFieldComponent-Bk8CgTUl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-yQpFO-5d.js";import"./useFormReset-UTIDwNo9.js";import"./LoadingSpinner-tY2JT6X0.js";import"./OverlayTrigger-Cd2hfWuE.js";import"./Text-DmX-Z1ax.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Separator-BG4a3hVN.js";import"./Heading-DNOFGRof.js";import"./Heading-Bb4nX13J.js";import"./Avatar-C0FVAL0T.js";import"./AlertIcon-KKj1r8Dh.js";import"./Initials-Cv4Expig.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
