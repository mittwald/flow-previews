import{j as r}from"./iframe-BuRyV86k.js";import{C as n,M as e}from"./MenuItem-1dmmFGJK.js";import{C as s}from"./ContextMenuTrigger-FuNFJt2Q.js";import"./ContextMenuSection-Mj7n-SRG.js";import{B as u}from"./Button-CyndH9Xm.js";import a from"./Default.stories-CnU4BH_e.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-KY3p1CrK.js";import"./context-BBsiVWSW.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./clsx-B-dksMZM.js";import"./index-DXDzX26U.js";import"./useStatic-Bozflp-3.js";import"./browser-DvnOBVed.js";import"./getActionGroupSlot-BzS6Espk.js";import"./dynamic-clmxwr04.js";import"./Popover-BVSj5O_5.js";import"./useOverlayController-BJSaXgbE.js";import"./OverlayContextProvider-BEH_6rpJ.js";import"./Dialog-aD4BOG19.js";import"./Button-0f0DNfgK.js";import"./utils-DCjU3VYp.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./context-C6SHLczB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B_1LlkAk.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocusable-CtKU_QIU.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./useControlledState-DYwoO1wA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./Text-D3tRocSh.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./VisuallyHidden-BxxKUxYt.js";import"./IconWarning-DAJxMizk.js";import"./remote-Cg9OAbJn.js";import"./Switch-sjnNpfkN.js";import"./useFieldComponent-Duyh6ShH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CGMSGG1x.js";import"./useFormReset-BkHfz2ea.js";import"./LoadingSpinner-BX044VJ0.js";import"./OverlayTrigger-BevBDs3M.js";import"./Text-DPwKDAaR.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Separator-D2NkWfky.js";import"./Heading-oMtFtRoB.js";import"./Heading-BErX5OWg.js";import"./Avatar-MtKEt4cQ.js";import"./AlertIcon-CtbR1iuV.js";import"./Initials-ycgrdC-1.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
