import{j as r}from"./iframe-tDsAeGKm.js";import{C as n,M as m}from"./MenuItem-C-CEAKIb.js";import{C as s}from"./ContextMenuTrigger-Dj0AVIR3.js";import"./ContextMenuSection-CLgK4tmh.js";import{B as u}from"./Button-jRtlVENb.js";import a from"./Default.stories-DAS6DBsT.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-Dcv9mfk6.js";import"./useOverlayController-B76T1UqF.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./clsx-B-dksMZM.js";import"./index-B9moyWSs.js";import"./useStatic-BTV6Su7X.js";import"./browser-CATpO6nC.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./dynamic-CfRao1zO.js";import"./Popover-Dl9HCW3C.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./Dialog-BchFx3yj.js";import"./Button-DSgsBLqC.js";import"./utils-DhX5ITDy.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./context-B8HhXai5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DsHBwD0o.js";import"./useFocus-BJatrcMj.js";import"./useFocusRing-O-BrOcuV.js";import"./useFocusable-Dhs_EAwV.js";import"./RSPContexts-1mHRta2c.js";import"./OverlayArrow-dAx307tU.js";import"./useControlledState-DJUoNOP3.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./SelectionIndicator-DonQVrOH.js";import"./Separator-C9Rj8Lhn.js";import"./Text-B29urVwj.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./FocusScope-BLSD8gJZ.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./VisuallyHidden-BeYtKSfy.js";import"./IconWarning-DKvGabEh.js";import"./remote-Dyxf39S8.js";import"./Switch-D5pIVFco.js";import"./useFieldComponent-CEijF59K.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DyfojBvq.js";import"./useFormReset-Bh0h9BrG.js";import"./LoadingSpinner-cVZxppZv.js";import"./OverlayTrigger-e7KCcZDP.js";import"./Text-D5NMs6cZ.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./Separator-Dtss0mta.js";import"./Heading-B57Tu_dh.js";import"./Heading-DyHmtFkg.js";import"./Avatar-CxHJ-qVU.js";import"./AlertIcon-BN6nSUvJ.js";import"./Initials-CKhevZCr.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
