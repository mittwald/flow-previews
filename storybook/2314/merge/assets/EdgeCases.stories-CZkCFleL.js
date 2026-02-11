import{j as r}from"./iframe-lphi5Fln.js";import{C as n,M as e}from"./MenuItem-CQ2i0QJm.js";import{C as s}from"./ContextMenuTrigger-D1hDWL_K.js";import"./ContextMenuSection-WR0YVO70.js";import{B as u}from"./Button-Luzxnqg_.js";import a from"./Default.stories-Bpq9NXfy.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DdOAmdm4.js";import"./context-D_Cvxd07.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./clsx-B-dksMZM.js";import"./index-BirbEfWe.js";import"./useStatic-DoydbngC.js";import"./browser-DxP0Rs6D.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./dynamic-Dz56l0zD.js";import"./Popover-BEcdv2wn.js";import"./useOverlayController-DEMdk2HW.js";import"./OverlayContextProvider-Cdtv7zJY.js";import"./Dialog-any5Q92a.js";import"./Button-DBLw-vMJ.js";import"./utils-Is-sFETw.js";import"./ProgressBar-BlIkh8Rr.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3jPjt5T.js";import"./context-hul-JKEa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ByR9A8gc.js";import"./useFocus-BYwX3hbJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useFocusable-CWG73OOy.js";import"./RSPContexts-D5Dv-vEP.js";import"./OverlayArrow-CILdtqTg.js";import"./useControlledState-D2ulvinQ.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./Text-CwPOMTFI.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./useCollator-wUqkBaab.js";import"./FocusScope-DRoVwcjL.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./VisuallyHidden-DjAmLvSg.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./Switch-5q9ImdFK.js";import"./useFieldComponent-6mmayeW0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cf5C5cId.js";import"./useFormReset-CSRdRe02.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./OverlayTrigger-DqdhJFXL.js";import"./Text-DhRxTRp1.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Separator-CS6v833R.js";import"./Heading-CdmYtBXv.js";import"./Heading-DnWdAz5V.js";import"./Avatar-kIS_rMIm.js";import"./AlertIcon-Tp_Bhr3n.js";import"./Initials-D2nI94lT.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
