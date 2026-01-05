import{j as r}from"./iframe-CnrbHwTe.js";import{C as n,M as e}from"./MenuItem-BYe6H14B.js";import{C as s}from"./ContextMenuTrigger-CDkRQJws.js";import"./ContextMenuSection-JoSq6Aah.js";import{B as u}from"./Button-DoJYz9nf.js";import a from"./Default.stories-aHHq4QQu.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-Csai7jBT.js";import"./context-BuaNu4Hn.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./clsx-B-dksMZM.js";import"./index-CUZGjyPT.js";import"./useStatic-D1Vs9fsX.js";import"./browser-TZQakXKU.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./dynamic-D-DaJWqs.js";import"./Popover-tLLFCijH.js";import"./useOverlayController-CZACBNcH.js";import"./OverlayContextProvider-DyMWHvaJ.js";import"./Dialog-CsKt9ioo.js";import"./Button-CDvqfYYW.js";import"./utils-r4y_43wh.js";import"./ProgressBar-VG7_xCrZ.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dn56kI8F.js";import"./context-B7MLny9I.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoQNUybf.js";import"./useFocus-CW3ebFsS.js";import"./useFocusRing-CRQTw2D7.js";import"./useFocusable-DrwEzR41.js";import"./RSPContexts-CU1Sv8RV.js";import"./OverlayArrow-CJqqEQZv.js";import"./useControlledState-CcfbhOaY.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./Text-nMrjd92_.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./IconWarning-DgLNPfaL.js";import"./remote-CmycR9zC.js";import"./Switch-DCK5k0l0.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-iYimYvHh.js";import"./useFormReset-n7eHOhOu.js";import"./OverlayTrigger-QfzKXgOG.js";import"./Text-eTz9hgbN.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./LoadingSpinner-BfrmZLfO.js";import"./Separator-BnggOc9S.js";import"./Heading-4nCu50xU.js";import"./Heading-7TXA4VJI.js";import"./Avatar-Ce-jaDT0.js";import"./AlertIcon-kkftxocV.js";import"./Initials-bZ9wpSvN.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
