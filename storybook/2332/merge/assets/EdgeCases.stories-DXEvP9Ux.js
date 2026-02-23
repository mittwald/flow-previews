import{j as r}from"./iframe-DunzINT4.js";import{C as n,M as m}from"./MenuItem-ZmRcTmRI.js";import{C as s}from"./ContextMenuTrigger-CTYVWg2Y.js";import"./ContextMenuSection-BBATHhHi.js";import{B as u}from"./Button-D4ye7DRq.js";import a from"./Default.stories-DtQJr6eM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./clsx-B-dksMZM.js";import"./index-Wl0ZfLjP.js";import"./useStatic-CPAaCdO2.js";import"./browser-CUqULdV9.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./dynamic--RH-hhxe.js";import"./Popover-DJxHz7NJ.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./Dialog-Da1bNoxP.js";import"./Button-C6WdG1X1.js";import"./utils-B66WPIWK.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./context-XFBu4tuG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VDpDAbVy.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useFocusable-BqXitQDl.js";import"./RSPContexts-DYG4soUM.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./Text-CMXpTIb-.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./VisuallyHidden-C85ONzQn.js";import"./IconWarning-kFcnfyhN.js";import"./remote-BHsosJBg.js";import"./Switch-E8P1pSL6.js";import"./useFieldComponent-mGz2JkQm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CEwtgscT.js";import"./useFormReset-BCoUHfvE.js";import"./LoadingSpinner-CzZyxAnt.js";import"./OverlayTrigger-B1b7JrEs.js";import"./Text-DTHO_DRR.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./Separator-DZJeUDRj.js";import"./Heading-ClXpNfz0.js";import"./Heading-B3Dcho9D.js";import"./Avatar-CtrM1JLN.js";import"./AlertIcon-Bju3yLvF.js";import"./Initials-Dnr5yOZM.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
