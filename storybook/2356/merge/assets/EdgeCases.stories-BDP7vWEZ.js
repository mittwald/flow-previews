import{j as r}from"./iframe-CCG9iH9q.js";import{C as n,M as m}from"./MenuItem-C9vagVCk.js";import{C as s}from"./ContextMenuTrigger-inVeFQfz.js";import"./ContextMenuSection-DkVhFe3O.js";import{B as u}from"./Button-DszeRQWk.js";import a from"./Default.stories-ukeri_BB.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BwDlid4r.js";import"./useOverlayController-B8ExGaeg.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./clsx-B-dksMZM.js";import"./index-DO8RY2JU.js";import"./useStatic-DZaf9Eli.js";import"./browser-DlPLk6Tx.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./dynamic-DVtvH1qO.js";import"./Popover-B7zmrX8_.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./Dialog-Bvzkt_Dq.js";import"./Button-BmDLEeLi.js";import"./utils-BqjYSsY0.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./context-BOE3Zx9s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9nCYq1D.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useFocusable-C9iBP5e4.js";import"./RSPContexts-Cj7-Wn-7.js";import"./OverlayArrow-O5F9zlGE.js";import"./useControlledState-DQCduMNG.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./Text-CsZp0s5y.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./VisuallyHidden-B8BDvwZm.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./Switch-D1g_IMfz.js";import"./useFieldComponent-BO1aRG8J.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-z_9ikDBl.js";import"./useFormReset-DOloisqU.js";import"./LoadingSpinner-GybBfiLr.js";import"./OverlayTrigger-BffquD90.js";import"./Text-CqiRKP9V.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./Separator-CiDYF3ZY.js";import"./Heading-DiIAAbeS.js";import"./Heading-DVHr5WNM.js";import"./Avatar-Dqq5Noky.js";import"./AlertIcon-BWG972Pn.js";import"./Initials-DDDHzQ16.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
