import{j as r}from"./iframe-DYssR0ZO.js";import{C as n,M as m}from"./MenuItem-DyA5bZH_.js";import{C as s}from"./ContextMenuTrigger-DM3g_ry9.js";import"./ContextMenuSection-DyHCMP-N.js";import{B as u}from"./Button-DWrm_dbc.js";import a from"./Default.stories-LBxaX1T0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-Cjtwd20r.js";import"./useOverlayController-BfbCDLsY.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./clsx-B-dksMZM.js";import"./index-DD53_4h2.js";import"./useStatic-BJkvCPdg.js";import"./browser-BciskJv3.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./dynamic-3BYImiyG.js";import"./Popover-BQzuMW4U.js";import"./OverlayContextProvider-C4hsr81s.js";import"./Dialog-DF_yv1N5.js";import"./Button-Dmp7BHEZ.js";import"./utils-C3q1cDFY.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./context-CUXiPoRo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-xSc99ptM.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./useFocusable-CmCmEjiW.js";import"./RSPContexts-CDW_96-t.js";import"./OverlayArrow-Cf72_x8q.js";import"./useControlledState-CDSB3NYp.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./Text-C48KhL8P.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./VisuallyHidden-B8I9N7kv.js";import"./IconWarning-BhLXBIfL.js";import"./remote-cHYIdIzb.js";import"./Switch-D2UxYnkJ.js";import"./useFieldComponent-MDeHyLVI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-TsqRqfMK.js";import"./useFormReset-CxfaiCUr.js";import"./LoadingSpinner-lL7MHRW7.js";import"./OverlayTrigger-BzADejGr.js";import"./Text-S9F4vE2H.js";import"./EmulatedBoldText-BT8wvojV.js";import"./Separator-_ld7m8RD.js";import"./Heading-De8T3vTM.js";import"./Heading-CZjnkckI.js";import"./Avatar-4_SNYsOw.js";import"./AlertIcon-AvW8zEgb.js";import"./Initials-BQexzB_t.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
