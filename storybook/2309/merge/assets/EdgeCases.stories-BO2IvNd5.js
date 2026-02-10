import{j as r}from"./iframe-BAXQY30e.js";import{C as n,M as e}from"./MenuItem-BBMlYpLg.js";import{C as s}from"./ContextMenuTrigger-YnZfWB7j.js";import"./ContextMenuSection-CYSyIaWU.js";import{B as u}from"./Button-CvDqM7Lu.js";import a from"./Default.stories-BfaJvtpM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CDH3oaiQ.js";import"./context-DKCDV3-b.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./clsx-B-dksMZM.js";import"./index-BAu7LBGH.js";import"./useStatic-rplOn2Qs.js";import"./browser-7M05TLI2.js";import"./getActionGroupSlot-CKOsA57z.js";import"./dynamic-0Mu-qEnq.js";import"./Popover-QPtZRDcu.js";import"./useOverlayController-BH8EoD-J.js";import"./OverlayContextProvider-CtvKPXhV.js";import"./Dialog-BnZvghEV.js";import"./Button-Ca5Nx2F5.js";import"./utils-CPq9a2_3.js";import"./ProgressBar-DOlyg40u.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./context-Ch7cvv9N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-0WoXV1eK.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./useFocusable-B7f7k6Nb.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./Text-CgyRU_jx.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./VisuallyHidden-qM1rInXZ.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./Switch-BU_mJz-I.js";import"./useFieldComponent-RBMXOPsB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DMcDxhma.js";import"./useFormReset-CqoQKslx.js";import"./LoadingSpinner-JX83AFJj.js";import"./OverlayTrigger-CKjWJPQI.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Separator-BlRVJDhU.js";import"./Heading-B7OcLMTv.js";import"./Heading-o5Ph-k-z.js";import"./Avatar-BsK31Qqf.js";import"./AlertIcon-C4A5rqth.js";import"./Initials-BvxGORnY.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
