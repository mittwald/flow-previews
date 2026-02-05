import{j as r}from"./iframe-BAsHckrK.js";import{C as n,M as e}from"./MenuItem-W3IJjmZh.js";import{C as s}from"./ContextMenuTrigger-DtGLLFbz.js";import"./ContextMenuSection-BquW4vGk.js";import{B as u}from"./Button-CAoYj-yB.js";import a from"./Default.stories-L-wXuwbx.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-WxgR-8km.js";import"./context-BHkWm8Gn.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./clsx-B-dksMZM.js";import"./index-Cf_R1xcK.js";import"./useStatic-CHwNqk00.js";import"./browser-tZCM2k1B.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./dynamic-CGZuOMtH.js";import"./Popover-DEs5TtfY.js";import"./useOverlayController-BBLTL3Hv.js";import"./OverlayContextProvider-BJO-3hwU.js";import"./Dialog-BI9ufNdz.js";import"./Button-v8rEwTVX.js";import"./utils-AcXTY-LA.js";import"./ProgressBar-BYgBobO-.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Zs1yjNWV.js";import"./context-BKg0mO6Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BtuPSsUz.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./useFocusable-DEw7yEFU.js";import"./RSPContexts-CrAnBcro.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useControlledState-DIA42IR3.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./Text-CORhkzC6.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./useCollator-1De53UJM.js";import"./FocusScope-BSJXv8u1.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./VisuallyHidden-BIPiOxSh.js";import"./IconWarning-DHq1gdF3.js";import"./remote-5f3Q71VQ.js";import"./Switch-BQGrMP38.js";import"./useFieldComponent-uzP_CJXZ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cy0BigFv.js";import"./useFormReset-BBc75pQ_.js";import"./LoadingSpinner-fmonyGhO.js";import"./OverlayTrigger-DKYW-gxq.js";import"./Text-B__BY7tJ.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Separator-D048xwFE.js";import"./Heading-CuVtTPS-.js";import"./Heading-D3ETNjbu.js";import"./Avatar-DNxKhkqD.js";import"./AlertIcon-C2q1LJ0F.js";import"./Initials-D37QhiGh.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
