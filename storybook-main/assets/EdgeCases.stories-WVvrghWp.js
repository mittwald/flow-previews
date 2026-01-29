import{j as r}from"./iframe-Ci26vI3B.js";import{C as n,M as e}from"./MenuItem-GTjoExhI.js";import{C as s}from"./ContextMenuTrigger-Dmvy7qOU.js";import"./ContextMenuSection-B4FW6kIZ.js";import{B as u}from"./Button-Bgg1raPB.js";import a from"./Default.stories-CYS9Rfip.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BUuW9nUE.js";import"./context-BCzJciSx.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./clsx-B-dksMZM.js";import"./index-BgjIHz1Y.js";import"./useStatic-wckFiMZJ.js";import"./browser-CkG7QNAh.js";import"./getActionGroupSlot--c77iWbK.js";import"./dynamic-CWUTf5k8.js";import"./Popover-DZyVF07N.js";import"./useOverlayController-BSQ_oo1O.js";import"./OverlayContextProvider-Df7HHBCA.js";import"./Dialog-DpyFyuBj.js";import"./Button-B-v9WAC7.js";import"./utils-Prtw8tAI.js";import"./ProgressBar-Cd-gbxhy.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D7Kjovyf.js";import"./context-21njfTP5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIn545i6.js";import"./useFocus-BemMoN-v.js";import"./useFocusRing-IT4cpc8M.js";import"./useFocusable-C470YARL.js";import"./RSPContexts-wYlI8WBg.js";import"./OverlayArrow-G0bNf6l9.js";import"./useControlledState-B4ASThyn.js";import"./Collection-B2Ssnxvf.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./SelectionIndicator-DzwumZRP.js";import"./Separator-D2dDCvgZ.js";import"./Text-BBkEKRDK.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./useCollator-BE-Xf4hi.js";import"./FocusScope-ByCQWjTm.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./IconWarning-CM9E6h9H.js";import"./remote-BeH756Ak.js";import"./Switch-BAcmuNxp.js";import"./useFieldComponent-DlKim18O.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Da3OyMoT.js";import"./useFormReset-CoDGZCB3.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./OverlayTrigger-BQgQEM-6.js";import"./Text-BThwDV_-.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Separator-CTfnNiME.js";import"./Heading--cJO5BZg.js";import"./Heading-CXYj_MKW.js";import"./Avatar-Bclre7ul.js";import"./AlertIcon-CQS_iHVq.js";import"./Initials-CKjDnBsE.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
