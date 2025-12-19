import{j as r}from"./iframe-d8TPt7Dq.js";import{C as n,M as e}from"./MenuItem-DAc4qa1N.js";import{C as s}from"./ContextMenuTrigger-ChNDJbGG.js";import"./ContextMenuSection-BGdNAGXU.js";import{B as u}from"./Button-CG9B_DsC.js";import a from"./Default.stories-D2ljUc0M.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BNptIGGg.js";import"./context-BnRBG3H-.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./useStatic-C-4yNygp.js";import"./browser-Cq89yPle.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./dynamic-q6Z3lF5f.js";import"./Popover-2QFTEP9U.js";import"./useOverlayController-BtkV8MPK.js";import"./OverlayContextProvider-CEYLfIDU.js";import"./Dialog-DKAUR0i0.js";import"./Button-CiuUFhcg.js";import"./utils-CQWCrNEN.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./context-s9WFa2xd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./Text-CbFZ93_1.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./VisuallyHidden-_OGl7ay2.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./Switch-VCLSLfaM.js";import"./useFieldComponent-XccPD61N.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-MqcjNIYZ.js";import"./useFormReset-AO5_sbxL.js";import"./OverlayTrigger-Ct0MwRjl.js";import"./Text-B_83j2CJ.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./LoadingSpinner-CZkvTSmf.js";import"./Separator-CRxRS0xp.js";import"./Heading-DEdgyyg2.js";import"./Heading-DHpEgmIr.js";import"./Avatar-DysVh_oa.js";import"./AlertIcon-vcoq1kIC.js";import"./Initials-R8zfaZsP.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
