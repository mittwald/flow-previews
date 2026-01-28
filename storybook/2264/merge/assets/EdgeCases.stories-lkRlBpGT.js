import{j as r}from"./iframe-BrcQhcwR.js";import{C as n,M as e}from"./MenuItem-bFZI35ri.js";import{C as s}from"./ContextMenuTrigger-DNzDU6WL.js";import"./ContextMenuSection-BV3yleYZ.js";import{B as u}from"./Button-DdI6TSg5.js";import a from"./Default.stories-BNeVEcEK.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-EPprNG1t.js";import"./context-C9I6Qco3.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./useStatic-Cr39OxgC.js";import"./browser-BdJDgoMU.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./dynamic-CAxQXs-G.js";import"./Popover-Z1FCFlzY.js";import"./useOverlayController-DMZANwi4.js";import"./OverlayContextProvider-BfPQJL_J.js";import"./Dialog-DAgI8QrG.js";import"./Button-CztCXt43.js";import"./utils-DM5Jp8EX.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./context-DOSLHoOx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./Text-CzkXk5bL.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./VisuallyHidden-CIPoghQB.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Switch-DDBraJb2.js";import"./useFieldComponent-CsbQ-7mY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CC7Uki4s.js";import"./useFormReset-BHDJFB5Q.js";import"./LoadingSpinner-C-WbSXYT.js";import"./OverlayTrigger-D_VcfVVD.js";import"./Text-PyhJCmvh.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Separator-BXu9b-HV.js";import"./Heading-DeF2rP0f.js";import"./Heading-D_8LxtK-.js";import"./Avatar-CCEN8Yyi.js";import"./AlertIcon-CzBRtVHG.js";import"./Initials-DC7zQDlR.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
