import{j as r}from"./iframe-DoM-BIwg.js";import{C as n,M as e}from"./ContextMenu-DUoeFJuf.js";import{C as s}from"./ContextMenuTrigger-uZXkOw7N.js";import"./ContextMenuSection-fUiEQtti.js";import{B as u}from"./Button-CT5Y8uWS.js";import a from"./Default.stories-Ck61l3PN.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./Switch-Da0k57Hq.js";import"./useFieldComponent-CZ4YFclL.js";import"./Label.module-CUYTf9Jc.js";import"./utils-D5il_mPj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-ix8SyQp2.js";import"./useFormReset-DsbUUfuN.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./useControlledState--GEywRyg.js";import"./VisuallyHidden-GPtOnQVg.js";import"./Dialog-BESdyj17.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./useLabel-Cp7FQmHU.js";import"./context-CSqA08Z3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./Text-CiXcXSql.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./Action-KkrISRwO.js";import"./context-DP2lyaT2.js";import"./useStatic-BCI8JZji.js";import"./browser-COZAGKbB.js";import"./getActionGroupSlot-CjJPVShT.js";import"./dynamic-CkeXur7S.js";import"./Popover-Cl8R87oW.js";import"./useOverlayController-DJQxd8wz.js";import"./OverlayContextProvider-Evthga4H.js";import"./OverlayTrigger-6Bd8m9uJ.js";import"./Text-lsEUOuuk.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./LoadingSpinner-CPr3D27j.js";import"./Separator-CY9QjN0Z.js";import"./Heading-BBlWC_ix.js";import"./Heading-Bf3wZM4z.js";import"./Avatar-_EfPfu08.js";import"./AlertIcon-Mg7Q3zgv.js";import"./Initials-DJc5mQAn.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
