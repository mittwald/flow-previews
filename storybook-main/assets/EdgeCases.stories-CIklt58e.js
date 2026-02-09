import{j as r}from"./iframe-BTP_Z9Sf.js";import{C as n,M as e}from"./MenuItem-wWijrMD7.js";import{C as s}from"./ContextMenuTrigger-CpPTP_VY.js";import"./ContextMenuSection-De_H5Wjl.js";import{B as u}from"./Button-er0RkDrE.js";import a from"./Default.stories-CV35aLbw.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./clsx-B-dksMZM.js";import"./index-E_qagHnK.js";import"./useStatic-kc5QKD7I.js";import"./browser-eyJ8FPIK.js";import"./getActionGroupSlot-V7kcySO7.js";import"./dynamic-LcJrXyvC.js";import"./Popover-6hqQcqfJ.js";import"./useOverlayController-BkO0277u.js";import"./OverlayContextProvider-qUQ07J32.js";import"./Dialog-DITwbnCq.js";import"./Button-DgJw7YNb.js";import"./utils-DP1LA6WE.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./context-BBaC2IfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BnZLj0Nc.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./Text-CZ1YR4oj.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./Switch-nTWd4UMx.js";import"./useFieldComponent-Da-vFXDP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BvD2wu9z.js";import"./useFormReset-Bo1Ib9da.js";import"./LoadingSpinner-Cv-igvht.js";import"./OverlayTrigger-B5XE0ce4.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Separator-CP9PIYgv.js";import"./Heading-tBPre37B.js";import"./Heading-CcadeVc2.js";import"./Avatar-BMyoTHcf.js";import"./AlertIcon-BLTDYNdz.js";import"./Initials-6k25oIbw.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
