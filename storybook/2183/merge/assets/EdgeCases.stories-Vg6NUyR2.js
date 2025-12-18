import{j as r}from"./iframe-CgWIZppF.js";import{C as n,M as e}from"./MenuItem-BVcJA2OA.js";import{C as s}from"./ContextMenuTrigger-Dz5Ek0-I.js";import"./ContextMenuSection-BUslXVLP.js";import{B as u}from"./Button-B2z86NVg.js";import a from"./Default.stories-B9iA_VX3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-ChgPhfJd.js";import"./context-B2MrOWQ_.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./clsx-B-dksMZM.js";import"./index-D8vpbAff.js";import"./useStatic-CFKrTcwu.js";import"./browser-C8d3FCf4.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./dynamic-BqY2cEs-.js";import"./Popover-1Hxb36ee.js";import"./useOverlayController-CUfZ3j8o.js";import"./OverlayContextProvider-BJpURIjJ.js";import"./Dialog-R-LZrA7I.js";import"./Button-C_sZyB84.js";import"./utils-CqFMFg3g.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./context-DG5uy-SY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoCxa2CI.js";import"./useFocus-ClWOKyYK.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./Text-C3p6npBl.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./VisuallyHidden-BDyUoc3v.js";import"./IconWarning-CJrmQcXC.js";import"./remote-DVGHPh_8.js";import"./Switch-D2m78o0q.js";import"./useFieldComponent-BZyKlvwh.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CzInoV4z.js";import"./useFormReset-BEtHvHxA.js";import"./OverlayTrigger-Ch4_MWoX.js";import"./Text-B7pZrZSG.js";import"./EmulatedBoldText-iMswxomY.js";import"./LoadingSpinner-nmzfTpX1.js";import"./Separator-P0wq4yE3.js";import"./Heading-CfRE4X5D.js";import"./Heading-DOQpztPl.js";import"./Avatar-WSdPbpuj.js";import"./AlertIcon-D3MSf42O.js";import"./Initials-B3e07IdU.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
