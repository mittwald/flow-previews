import{j as r}from"./iframe-C_XCETJ4.js";import{C as n,M as e}from"./MenuItem-DwX_lsV_.js";import{C as s}from"./ContextMenuTrigger-CxmoahH1.js";import"./ContextMenuSection-D5WrvUWV.js";import{B as u}from"./Button-BRKehz01.js";import a from"./Default.stories-Bs3BkDNY.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-TqepIOEV.js";import"./context-BzuZVooY.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./clsx-B-dksMZM.js";import"./index-BzhLFU3i.js";import"./useStatic-CKCyvBOK.js";import"./browser-BQl26QHV.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./dynamic-DjbOT4dP.js";import"./Popover-Cr2hibE5.js";import"./useOverlayController-C6c2wWeg.js";import"./OverlayContextProvider-Ben69tTv.js";import"./Dialog-BbJdb0zX.js";import"./Button-DIlWiE4j.js";import"./utils-Bso2FrGw.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./context-CpOW4Kl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-xR971w.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";import"./RSPContexts-PVsy4Zek.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./Text-CpxVEUdG.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./Switch-BBdhhEu1.js";import"./useFieldComponent-K9rhjMxn.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ChU4YOqm.js";import"./useFormReset-CmrFi5aC.js";import"./LoadingSpinner-dY4_o8YP.js";import"./OverlayTrigger-lTtRcte7.js";import"./Text-l7AxHvJY.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Separator-BcDW-NBI.js";import"./Heading-42b9lNh5.js";import"./Heading-Cm7wIRHP.js";import"./Avatar-BE3_HRKs.js";import"./AlertIcon-Bo1DHsRX.js";import"./Initials-DhdqLbRK.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
