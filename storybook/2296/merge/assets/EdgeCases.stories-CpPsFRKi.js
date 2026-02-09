import{j as r}from"./iframe-CJJ5mYnn.js";import{C as n,M as e}from"./MenuItem-Cmz9XULR.js";import{C as s}from"./ContextMenuTrigger-BGsLleQ5.js";import"./ContextMenuSection-JlR6lzy2.js";import{B as u}from"./Button-Cm9iNCfL.js";import a from"./Default.stories-C1s_HNbo.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-DnpS_czG.js";import"./context-B6BNwR5M.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./clsx-B-dksMZM.js";import"./index-BAQeQlIi.js";import"./useStatic-DKMjC4UR.js";import"./browser-Dno-4bzG.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./dynamic-CBA_L5x6.js";import"./Popover-CSygdiS-.js";import"./useOverlayController-Bt3E6YJk.js";import"./OverlayContextProvider-DxcnF3G9.js";import"./Dialog-BJQKxFLq.js";import"./Button-DBs8-zE9.js";import"./utils-CzEQVu_B.js";import"./ProgressBar-DEVhhcDS.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./context-DMBLfBJz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjSa1aTn.js";import"./useFocus-CcXCF9Et.js";import"./useFocusRing-DJCeTTlI.js";import"./useFocusable-BrXzadpt.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./Text-C_ulbvRg.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./VisuallyHidden-CdWE-b-g.js";import"./IconWarning-7VhmiBC1.js";import"./remote-__48vje9.js";import"./Switch-DiHKOfXs.js";import"./useFieldComponent-DJ8W8blY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DlLXX_lc.js";import"./useFormReset-Bwb9lNn2.js";import"./LoadingSpinner-BkLfehTA.js";import"./OverlayTrigger-BPzqtZtz.js";import"./Text-DETIdekS.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Separator-CHiF3D-g.js";import"./Heading-L7ubE5sI.js";import"./Heading-BM0-1eUi.js";import"./Avatar-DPBaaRsP.js";import"./AlertIcon-CvbzdPY4.js";import"./Initials-CS53kz0t.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
