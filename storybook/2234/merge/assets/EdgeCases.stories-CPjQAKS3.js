import{j as r}from"./iframe-Cz8_C8zY.js";import{C as n,M as e}from"./MenuItem-m3-E5JXa.js";import{C as s}from"./ContextMenuTrigger-9SzqOGa8.js";import"./ContextMenuSection-DUguC81d.js";import{B as u}from"./Button-D15OVnQK.js";import a from"./Default.stories-CbBLh8UZ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-aXgHP_6u.js";import"./context-usF9YeFM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./clsx-B-dksMZM.js";import"./index-SrORw6vN.js";import"./useStatic-DFVrJYQp.js";import"./browser-B6rfwAqc.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./dynamic-CeA3emBk.js";import"./Popover-BRwT-TU7.js";import"./useOverlayController-BjnNyR7e.js";import"./OverlayContextProvider-DHHLRya5.js";import"./Dialog-DK4i5yRx.js";import"./Button-7cKgwoPB.js";import"./utils-BAKlH2Lm.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./context-VkDhZA-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DcZz-lB5.js";import"./useFocus-DFbFm1Xx.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocusable-CJ-4fYj7.js";import"./RSPContexts-CQQaQyDU.js";import"./OverlayArrow-CwaEkqIl.js";import"./useControlledState-C0o23ioH.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./Text-Cr087Rh_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./VisuallyHidden-7uh1Rm92.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./Switch-D-udB-Sn.js";import"./useFieldComponent--MNREdev.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DBpeo4lJ.js";import"./useFormReset-CSPeTQLr.js";import"./OverlayTrigger-KjIeYBhC.js";import"./Text-YjLUuftS.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./LoadingSpinner-ClQMAkzE.js";import"./Separator-CevQWh0Q.js";import"./Heading-4iah9onY.js";import"./Heading-DjrC0KPL.js";import"./Avatar-T8rUKbm6.js";import"./AlertIcon-ljfi56tv.js";import"./Initials-Dtk2HUs3.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
