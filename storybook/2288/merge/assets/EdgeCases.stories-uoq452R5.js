import{j as r}from"./iframe-K4Kgzs5d.js";import{C as n,M as e}from"./MenuItem-muIDpS2g.js";import{C as s}from"./ContextMenuTrigger-l4j2BFdl.js";import"./ContextMenuSection-BbQjr4t3.js";import{B as u}from"./Button-CLdF1xvY.js";import a from"./Default.stories-DXV7wawP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./clsx-B-dksMZM.js";import"./index-C1Cqv2DY.js";import"./useStatic-DUE7vdEn.js";import"./browser-9MG5lDdh.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./dynamic-d4gvBHma.js";import"./Popover-B6jJOXre.js";import"./useOverlayController-lRtmjR_K.js";import"./OverlayContextProvider-BLXdSW9X.js";import"./Dialog-D9y6Gm5p.js";import"./Button-B9p48ORM.js";import"./utils--XC5cWbY.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./context-BHsz5d3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bsv_-vru.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./Text-DhK76AHe.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./VisuallyHidden-DOfAC-AS.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./Switch-BstPq9tg.js";import"./useFieldComponent-XDoLqUAT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BmAlosTU.js";import"./useFormReset-Bu0cPn5B.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./OverlayTrigger-B8uZhBMV.js";import"./Text-BPEkrilU.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Separator-CnXjt8HR.js";import"./Heading-DvNGAwaU.js";import"./Heading-BKtqva_S.js";import"./Avatar-CSU8qQ26.js";import"./AlertIcon-Bh0Qf_48.js";import"./Initials-DdYXNudL.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
