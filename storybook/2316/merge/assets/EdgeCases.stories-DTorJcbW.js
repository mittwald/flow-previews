import{j as r}from"./iframe-BWSm23JV.js";import{C as n,M as e}from"./MenuItem-jg1ytzsQ.js";import{C as s}from"./ContextMenuTrigger-CtGU2YVF.js";import"./ContextMenuSection-DuWXEO2a.js";import{B as u}from"./Button-B45r898z.js";import a from"./Default.stories-fYPUjdxY.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-cxW9JZWQ.js";import"./context-DzxYIN56.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./clsx-B-dksMZM.js";import"./index-D0YiHBOl.js";import"./useStatic-B14v8lYB.js";import"./browser-S_Q3Hufb.js";import"./getActionGroupSlot-BXCkrZKT.js";import"./dynamic-WPTM_TAt.js";import"./Popover-BA8B3sEd.js";import"./useOverlayController-dPOs3tXC.js";import"./OverlayContextProvider-Bxu2XFRl.js";import"./Dialog-uisnl94N.js";import"./Button-DWVSyZOa.js";import"./utils-Dla7ZNEN.js";import"./ProgressBar-CVcTQ1yy.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C6wIzqCz.js";import"./context-4oRtfVxK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_E4YsZw.js";import"./useFocus-CrlSoDhl.js";import"./useFocusRing-CI0bGTjl.js";import"./useFocusable-7cwTszGB.js";import"./RSPContexts--whDujQs.js";import"./OverlayArrow-Lv31M_SN.js";import"./useControlledState-BdTYoDdO.js";import"./Collection-7HXUzyj9.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./SelectionIndicator-2rIWK9av.js";import"./Separator-7FCd2LVI.js";import"./Text-DreghWw5.js";import"./SelectionManager-CahjVjpE.js";import"./useEvent-BAiWPb0X.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./VisuallyHidden-BTdnLv2k.js";import"./IconWarning-R37DsKRA.js";import"./remote-DcEXMbRM.js";import"./Switch-DNbMghBK.js";import"./useFieldComponent-Cr8cfCaw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D9SqIMbN.js";import"./useFormReset-DeveCpy2.js";import"./LoadingSpinner-CWXG4qcN.js";import"./OverlayTrigger-Cn0zy4Sq.js";import"./Text-BaJ5HEnd.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Separator-UMjzNHKz.js";import"./Heading-0Lq3KVQb.js";import"./Heading-Cs-78oPS.js";import"./Avatar-Cq-g2fTe.js";import"./AlertIcon-CwdoSZHL.js";import"./Initials-DMLa_oKN.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
