import{j as r}from"./iframe-BdeexEb8.js";import{C as n,M as e}from"./MenuItem-CHhBhqYo.js";import{C as s}from"./ContextMenuTrigger-DLHwKsmz.js";import"./ContextMenuSection-BRjflZKk.js";import{B as u}from"./Button-8DtAEqjD.js";import a from"./Default.stories-FUZ6y8h3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./Action-RARPQ8v8.js";import"./context-BWmIRqAJ.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./clsx-B-dksMZM.js";import"./index-DrTgVdtP.js";import"./useStatic-DlCxFiK7.js";import"./browser-CYlNocNO.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./dynamic-B5dXdtKW.js";import"./Popover-BdPM10kG.js";import"./useOverlayController-CJDaqlYR.js";import"./OverlayContextProvider-DyWsSbcY.js";import"./Dialog-D2DNdmLu.js";import"./Button-m7osfjr7.js";import"./utils-BE4tcj7E.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_lz56ByA.js";import"./context-D6yVr_mO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BF3KJpSX.js";import"./useFocus-DOIh0B1Z.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./RSPContexts-BujZOMoI.js";import"./OverlayArrow-CMWDkVkR.js";import"./useControlledState-lwDPvcY9.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./Text-C7oFtPVp.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./VisuallyHidden-CRJbmMUG.js";import"./ClearPropsContextView-CJZTyvnc.js";import"./ClearPropsContext-C8aFsCZA.js";import"./IconWarning-CtsbdbUA.js";import"./Switch-DHMwGCdm.js";import"./useFieldComponent-DdJyO0fC.js";import"./react-children-utilities-jctua2LA.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CQGMBShp.js";import"./useToggleState-BPN6y77U.js";import"./useFormReset-BENrYz2J.js";import"./OverlayTrigger-BSJgZejS.js";import"./ControlledNotification-C6PtDURt.js";import"./Text-G8amV_-h.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./LoadingSpinner-f45dISc_.js";import"./Separator-D9FwnnRl.js";import"./Heading-CaWv9CDj.js";import"./Heading-CXwQx98o.js";import"./Avatar-CJ960qVj.js";import"./AlertIcon-DxqwozHJ.js";import"./Initials-tFgRFiZY.js";const wr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Sr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Sr as __namedExportsOrder,wr as default};
