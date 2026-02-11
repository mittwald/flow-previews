import{j as r}from"./iframe-CLDMeli7.js";import{C as n,M as e}from"./MenuItem-C6vt10dx.js";import{C as s}from"./ContextMenuTrigger-44VHRqHU.js";import"./ContextMenuSection-BNGygWDz.js";import{B as u}from"./Button-BzVheXKP.js";import a from"./Default.stories-ChX3OPh8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./clsx-B-dksMZM.js";import"./index-9eDA9WpJ.js";import"./useStatic-CZ7UkCej.js";import"./browser-DchrXhwC.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./dynamic-CQUXTbxb.js";import"./Popover-PjJ853r6.js";import"./useOverlayController-CfvFaHFD.js";import"./OverlayContextProvider-D58HtU5y.js";import"./Dialog-BqnORwX4.js";import"./Button-DkOX4zii.js";import"./utils-CeJP1xg2.js";import"./ProgressBar-DFW8NzQ8.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./context-CJeO-2nS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-5-cRdm9R.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useFocusable-B-HKy_Nj.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./Text-Doo8ujkC.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./VisuallyHidden--NZ_Ses-.js";import"./IconWarning-p4W4x8Yn.js";import"./remote-B4IT0gy2.js";import"./Switch-oaPEra7E.js";import"./useFieldComponent-BtEJhhry.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BJLDzOzG.js";import"./useFormReset-BkQU1ELB.js";import"./LoadingSpinner-DoDeCRPK.js";import"./OverlayTrigger-BIW3wf-9.js";import"./Text-CP7Ip6pC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./Separator-c06EPKvL.js";import"./Heading-Cd0Jc4Sk.js";import"./Heading-6_ezcD4u.js";import"./Avatar-BVG1pB6K.js";import"./AlertIcon-BgEbwDh4.js";import"./Initials-D-JV25WR.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
