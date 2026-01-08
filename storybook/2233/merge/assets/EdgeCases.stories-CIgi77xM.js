import{j as r}from"./iframe-DqAMh1gn.js";import{C as n,M as e}from"./MenuItem-BrHzJjhR.js";import{C as s}from"./ContextMenuTrigger-CeKTXG0n.js";import"./ContextMenuSection-CNlzjKiC.js";import{B as u}from"./Button-BzL2mXU9.js";import a from"./Default.stories-DN72UcpK.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B_T5lnyR.js";import"./context-ChmspXAM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./clsx-B-dksMZM.js";import"./index-By9mRA0t.js";import"./useStatic-BuuX2mtG.js";import"./browser-CSMWWW9k.js";import"./getActionGroupSlot-BJX70W99.js";import"./dynamic-CAN3WNRI.js";import"./Popover-C4iHg1bq.js";import"./useOverlayController-Dx3SUtDs.js";import"./OverlayContextProvider-BmY6HjYo.js";import"./Dialog-AIPHRx2P.js";import"./Button-DRXTkefG.js";import"./utils-WhkxUCK6.js";import"./ProgressBar-CxeXPRaQ.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BKYm2rJO.js";import"./context-DRhwbml9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ClkvTl3z.js";import"./useFocus-Cr8fiyXD.js";import"./useFocusRing-BN14JWVs.js";import"./useFocusable-DO1mJmot.js";import"./RSPContexts-A1MHH_Cz.js";import"./OverlayArrow-DNiZVgAH.js";import"./useControlledState-ChPR7hzM.js";import"./Collection-CQjuLfpr.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./SelectionIndicator-Qt-acHPk.js";import"./Separator-CEkzsxq5.js";import"./Text-DmUxfOW-.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./useCollator-DvzaADfo.js";import"./FocusScope-azgg1m0B.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./VisuallyHidden-B3gyx1tV.js";import"./IconWarning-BV3xGinn.js";import"./remote-BXLOBgAx.js";import"./Switch-vDj0nI53.js";import"./useFieldComponent-CgfE5MLg.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CDuP3UHJ.js";import"./useFormReset-CllrYVFd.js";import"./OverlayTrigger-Yhwsf07R.js";import"./Text-1p9r91sB.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./LoadingSpinner-BWCnwVbS.js";import"./Separator-C-bOTKn6.js";import"./Heading-Cop9Lz_q.js";import"./Heading-DO-ilkLm.js";import"./Avatar-TT3EetV-.js";import"./AlertIcon-C7t-BIgM.js";import"./Initials-BZKz0Puf.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
