import{j as r}from"./iframe-D5OSMSYj.js";import{C as n,M as e}from"./ContextMenu-Dd0hg_nr.js";import{C as s}from"./ContextMenuTrigger-DTFnJa2T.js";import"./ContextMenuSection-DdCYek15.js";import{B as u}from"./Button-DTe5su69.js";import a from"./Default.stories-Byu_5bdw.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./Switch-Z3PdLKN7.js";import"./useFieldComponent-yQbkUBpw.js";import"./Label.module-CUYTf9Jc.js";import"./utils-B2fStg81.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-BcCDWQTz.js";import"./useFormReset-C4H0cf_a.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./useControlledState-BLX_f1Wx.js";import"./VisuallyHidden-arLJjMse.js";import"./Dialog-DOlt_k3K.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./useLabel-CQkx52KA.js";import"./context-CCC3vGzE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./Text-DxpiEtGq.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./Action-7Qb19ota.js";import"./context-g3auhbgQ.js";import"./useStatic-Ct4NfCBd.js";import"./browser-CPg_spJX.js";import"./getActionGroupSlot-BAkzknoy.js";import"./dynamic-B1x5IqP1.js";import"./Popover-ToxN3N_z.js";import"./useOverlayController-Dbdtg8pO.js";import"./OverlayContextProvider-DZuBuoMh.js";import"./OverlayTrigger-DrBj6jwS.js";import"./Text-DAhCT_ah.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./LoadingSpinner-BD9yQcJP.js";import"./Separator-DAEr-kPT.js";import"./Heading-CnkvXclq.js";import"./Heading-BpBqAeXs.js";import"./Avatar-BMdfWeYc.js";import"./AlertIcon-CDVTToII.js";import"./Initials-C7Jpar10.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
