import{j as r}from"./iframe-kP2HEfFS.js";import{C as n,M as e}from"./ContextMenu-B6NtKoSD.js";import{C as s}from"./ContextMenuTrigger-AK9fSYvu.js";import"./ContextMenuSection-Dtdvg2h1.js";import{B as u}from"./Button-D2SKyW-T.js";import a from"./Default.stories-DaxeWa_i.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./index-Gr0VxzdI.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./Switch-BJQOC0uC.js";import"./useFieldComponent-D28HcwQQ.js";import"./Label.module-CUYTf9Jc.js";import"./utils-C12UPk0k.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CQEaldhR.js";import"./useFormReset-BTQYEics.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./useControlledState-K2EmMrc1.js";import"./VisuallyHidden-BxKC931y.js";import"./Dialog-DLhIMuXA.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./useLabel-07phmwB_.js";import"./context-C1J5EAXU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./Text-Bt0sFzeR.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./Action-DkWPc0_f.js";import"./context-Dy6MMTPO.js";import"./useStatic-D099is7R.js";import"./browser-CLBqp6VR.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./dynamic-Bb3YYypk.js";import"./Popover-rKvPy3vS.js";import"./useOverlayController-BKD7nFkO.js";import"./OverlayContextProvider-BizSMrSr.js";import"./OverlayTrigger-iZasDHkJ.js";import"./Text-DmTsXHLN.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./LoadingSpinner-DqLZcArG.js";import"./Separator-Dsjlfhtv.js";import"./Heading-BD2z6cnX.js";import"./Heading-BzscSBm2.js";import"./Avatar-DmBWJZSa.js";import"./AlertIcon-BKaF02an.js";import"./Initials-CNgSJzfg.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
