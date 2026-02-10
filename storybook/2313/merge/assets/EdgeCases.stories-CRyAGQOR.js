import{j as r}from"./iframe-HxmydubW.js";import{C as n,M as e}from"./MenuItem-zkJNXfI0.js";import{C as s}from"./ContextMenuTrigger-6_7qmb3j.js";import"./ContextMenuSection-DBGHgVvh.js";import{B as u}from"./Button-CfZWs4w7.js";import a from"./Default.stories-DRW9_ixb.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-ChYSHCOJ.js";import"./context-I_ID-Cd_.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./clsx-B-dksMZM.js";import"./index-CEuE-GZL.js";import"./useStatic-ffXkYFOn.js";import"./browser-XpDtWA4a.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./dynamic-D7w-3Mi4.js";import"./Popover-Dc_4CAsZ.js";import"./useOverlayController-CICFPSY8.js";import"./OverlayContextProvider-e8rtjnFo.js";import"./Dialog-BZeO2Xjo.js";import"./Button-B_Zn8gpO.js";import"./utils-QtLN3P4K.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./context-CAIZZp13.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-yluX3X-J.js";import"./useFocus-AF-IcVAt.js";import"./useFocusRing-CAJt6BJw.js";import"./useFocusable-H6SSWU_B.js";import"./RSPContexts-Cjdg_leM.js";import"./OverlayArrow-CRirkybg.js";import"./useControlledState-N-j6hnQm.js";import"./Collection-Dh0U_T2u.js";import"./CollectionBuilder-DZvSqS6p.js";import"./SelectionIndicator-dYnAwztx.js";import"./Separator-D3qRtCTd.js";import"./Text-CyO0jXov.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./useCollator-qjE4hkog.js";import"./FocusScope-D_FLL8Ht.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./VisuallyHidden-BPW-z4K2.js";import"./IconWarning-C9xwJqAl.js";import"./remote-fubbDoJI.js";import"./Switch-CBAxDBE4.js";import"./useFieldComponent-Bahj-THY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BE0q7bB3.js";import"./useFormReset-C2bi11DR.js";import"./LoadingSpinner-CzIk11gH.js";import"./OverlayTrigger-DvKHyWhH.js";import"./Text-CUJOJiDD.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Separator-C4E_xlKb.js";import"./Heading-C9JwdE7Y.js";import"./Heading-B7f00fHt.js";import"./Avatar-BbAtdfTe.js";import"./AlertIcon-BFPz9yZd.js";import"./Initials-DV7ZWGC5.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
