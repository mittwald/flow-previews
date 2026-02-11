import{j as r}from"./iframe-lFICOVMG.js";import{C as n,M as e}from"./MenuItem-BV0ScNQ7.js";import{C as s}from"./ContextMenuTrigger-CrQy7955.js";import"./ContextMenuSection-CljVwRlE.js";import{B as u}from"./Button-Cf-KBW4_.js";import a from"./Default.stories-BzbELjri.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-Dv_Htl--.js";import"./context-ClWR88NP.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./clsx-B-dksMZM.js";import"./index-DUpWbeKv.js";import"./useStatic-DBynbgAg.js";import"./browser-CN95VINd.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./dynamic-0KpQiqy3.js";import"./Popover-kZVVNzAg.js";import"./useOverlayController-BG5Eyx3V.js";import"./OverlayContextProvider-DLiN4Bef.js";import"./Dialog-XpC0gjG5.js";import"./Button-Dv_7IODh.js";import"./utils-DhhSlmx9.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./context-Sy7BhgRt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BW_bFHXv.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./RSPContexts-BmMWqIzn.js";import"./OverlayArrow-B2p7lzkF.js";import"./useControlledState-BZJPMeD2.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./Text-CinvLCxd.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./VisuallyHidden-BALX4uV5.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./Switch-DBYqspz0.js";import"./useFieldComponent-70N6l4jn.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-YhfkRB4R.js";import"./useFormReset-CPUmIViP.js";import"./LoadingSpinner-DqvYatLg.js";import"./OverlayTrigger-NL0Si4MJ.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Separator-3UHzGpvN.js";import"./Heading-DcmPVh6J.js";import"./Heading-BZr6A1TW.js";import"./Avatar-B-1Wx_JH.js";import"./AlertIcon-BTBT69bo.js";import"./Initials-DWyd6T8M.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
