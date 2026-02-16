import{j as r}from"./iframe-DYxqCFL4.js";import{C as n,M as m}from"./MenuItem-C471GIy8.js";import{C as s}from"./ContextMenuTrigger-3VQSDPR2.js";import"./ContextMenuSection-BPGq4V6i.js";import{B as u}from"./Button-DGbEpLIN.js";import a from"./Default.stories-B7zXwZtW.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BfjBVLTQ.js";import"./useOverlayController-BZwKG1Aj.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./clsx-B-dksMZM.js";import"./index-DJ6wSCwd.js";import"./useStatic-BMoi980u.js";import"./browser-CmbZy-PD.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./dynamic-C8CcPw_G.js";import"./Popover-DlFp-eS3.js";import"./OverlayContextProvider-tFRc17qj.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./utils-C1fpOvwY.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./context-CfMfa2C9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DMR80VPZ.js";import"./useFocus-C6GqelOx.js";import"./useFocusRing-Byzp35A7.js";import"./useFocusable-8bvqGkWP.js";import"./RSPContexts-DXUT3Wo8.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./Text-B3xsuc84.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./VisuallyHidden-CZrO0U0i.js";import"./IconWarning-BGRYHRhg.js";import"./remote-WwxW7fyl.js";import"./Switch-DO-T4Vyb.js";import"./useFieldComponent-DjSvrfgm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-dw2qq8cb.js";import"./useFormReset-VwcIZGsw.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./OverlayTrigger-B4TdY9D0.js";import"./Text-BnII0mKt.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Separator-DfqDpzzZ.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./Avatar-DbaVCiQx.js";import"./AlertIcon-B9fJ359s.js";import"./Initials-D9I6oL61.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
