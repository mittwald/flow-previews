import{j as r}from"./iframe-bJ_6fidF.js";import{C as n,M as e}from"./MenuItem-C075oJsX.js";import{C as s}from"./ContextMenuTrigger-D4Rx0Ajo.js";import"./ContextMenuSection-CO0mnEOv.js";import{B as u}from"./Button-BnsDuM8z.js";import a from"./Default.stories-BVJA0m_Z.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BNfya_PE.js";import"./context-CiNdmr3l.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./clsx-B-dksMZM.js";import"./index-DZS8fxXA.js";import"./useStatic-BZPvcAPs.js";import"./browser-CDYbiXXK.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./dynamic-B98QrFwh.js";import"./Popover-SIfmV_cN.js";import"./useOverlayController-ChRaAOaJ.js";import"./OverlayContextProvider-CnhKGutL.js";import"./Dialog-DXm38-Rd.js";import"./Button-CFn0JrTH.js";import"./utils-2JACcOpK.js";import"./ProgressBar-B339qPNf.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./context-BRobVGip.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DUWDHSym.js";import"./useFocus-DCEJi5pX.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./Text-BK6SVPNL.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./VisuallyHidden-BLAg7qtf.js";import"./IconWarning-BRVy1IKm.js";import"./remote-BGnMaeOw.js";import"./Switch-CzdSkVu_.js";import"./useFieldComponent-uPh6Au6A.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D6cN2mOT.js";import"./useFormReset-nMFTazsC.js";import"./OverlayTrigger-DxVxjcsU.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./LoadingSpinner-Da58qKyF.js";import"./Separator-sKO4ytK0.js";import"./Heading-DKGadcRU.js";import"./Heading-Bbyv6ScP.js";import"./Avatar-DCSqPC8G.js";import"./AlertIcon-CfVIHwZG.js";import"./Initials-DfJxqIc_.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
