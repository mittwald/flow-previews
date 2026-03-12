import{j as r}from"./iframe-C8tsaODo.js";import{C as n,M as e}from"./MenuItem-CGP4GFxP.js";import{C as s}from"./ContextMenuTrigger-Cu8jMjZj.js";import"./ContextMenuSection-BnK78UMz.js";import{B as u}from"./Button-BxguJBhT.js";import a from"./Default.stories-CVUAqj8d.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BUyIhhJw.js";import"./useOverlayController-Bf797MvO.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./clsx-B-dksMZM.js";import"./index-BNoG6unV.js";import"./useStatic-jSI8PS8c.js";import"./browser-qgMJ3NzC.js";import"./getActionGroupSlot-C3_vSruP.js";import"./dynamic-DA7vjxZL.js";import"./Popover-D8RRHCNj.js";import"./OverlayContextProvider-Buisu9vo.js";import"./Dialog-CNeqByqP.js";import"./Button-Dm2nITC7.js";import"./utils-CdcYI7XL.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./context-BwdmRhET.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-vv50L64r.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./RSPContexts-DtfJrVYY.js";import"./OverlayArrow-CxwkoRJi.js";import"./useControlledState-CN29789s.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./Text-BkxlIu3p.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./VisuallyHidden-hgCntKQk.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./Switch-ojjFiW1l.js";import"./useFieldComponent-FgbLRzY4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bupsl8Wu.js";import"./useFormReset-BpTKK099.js";import"./LoadingSpinner-C-PnKOui.js";import"./OverlayTrigger-xIqGS4XS.js";import"./Text-BE7lE0T8.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Separator-CQLguXbO.js";import"./Heading-BUyGvYSI.js";import"./Heading-LrX14EbB.js";import"./Avatar-CKeDR-Ie.js";import"./AlertIcon-DJlFLAIk.js";import"./Initials-BDY0bYJ9.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
