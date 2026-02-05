import{j as r}from"./iframe-DJlgDtsR.js";import{C as n,M as e}from"./MenuItem-n1E6LY_G.js";import{C as s}from"./ContextMenuTrigger-tKwsdOZD.js";import"./ContextMenuSection-BF9OA7h1.js";import{B as u}from"./Button-B5mEMvcP.js";import a from"./Default.stories-kJTwml6r.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BHdfveoT.js";import"./context-TnNtslmb.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./clsx-B-dksMZM.js";import"./index-Ds6_MS6L.js";import"./useStatic-kKtkdJS1.js";import"./browser-C6YBs1UC.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./dynamic-BhViPMj5.js";import"./Popover-Cjed0IxS.js";import"./useOverlayController-BccrWtDH.js";import"./OverlayContextProvider-CVHBadgO.js";import"./Dialog-BOJlWGO4.js";import"./Button-DjTNcQDc.js";import"./utils-xFKhKznh.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./context-XFPr5nuV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CWKDBuw6.js";import"./useFocus-oMd_AJz-.js";import"./useFocusRing-BhR5IplG.js";import"./useFocusable-CsEyjS4C.js";import"./RSPContexts-CxGwKclm.js";import"./OverlayArrow-BjaGoVRT.js";import"./useControlledState-C0KUsyk2.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./Text-DD0-81CT.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./Switch-CcrNsicY.js";import"./useFieldComponent-Bmr1JhS0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CM_n9fyv.js";import"./useFormReset-yK5dVmLs.js";import"./LoadingSpinner-DvQzlWjD.js";import"./OverlayTrigger-02q3wf6R.js";import"./Text-B6SLv6do.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Separator-xqX_Hz7Q.js";import"./Heading-CCdNJUMi.js";import"./Heading-CTyW73LR.js";import"./Avatar-Cml40zwQ.js";import"./AlertIcon-nCFQHvgi.js";import"./Initials-B-1ptCfj.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
