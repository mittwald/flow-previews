import{j as r}from"./iframe-CG_BDTJg.js";import{C as n,M as e}from"./ContextMenu-C_dU7v4I.js";import{C as s}from"./ContextMenuTrigger-BS-ZTfO9.js";import"./ContextMenuSection-BjTcX3F7.js";import{B as u}from"./Button-BmAaiuIV.js";import a from"./Default.stories-D-x9UQiC.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./index-CuwL1_wd.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./Switch-q2OI3qdH.js";import"./useFieldComponent-UHV4FB79.js";import"./Label.module-CUYTf9Jc.js";import"./utils-BtbDMhcr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-DFeoOqJ_.js";import"./useFormReset-BbxWwIqr.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./useControlledState-BP00jBlc.js";import"./VisuallyHidden-pR1kpoR7.js";import"./Dialog-CMl17GR5.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./useLabel-DI7piRsn.js";import"./context-CXt1SSmQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./Text-CLAgqxCC.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./Action-CprlfWDd.js";import"./context-CBhRRwo5.js";import"./useStatic-CTCSTBly.js";import"./browser-yLu0BSsR.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./dynamic-CvnWp_K2.js";import"./Popover-C0DY4f9z.js";import"./useOverlayController-t3_U_UCZ.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./OverlayTrigger-DFacS4RO.js";import"./Text-DpPZns_R.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./LoadingSpinner-DTxDKIsL.js";import"./Separator-nOIFjhyS.js";import"./Heading--5M_y3tK.js";import"./Heading-BH9BsmNO.js";import"./Avatar-DEsTz9he.js";import"./AlertIcon-y6uiAF7a.js";import"./Initials-Qw7qCoaq.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
