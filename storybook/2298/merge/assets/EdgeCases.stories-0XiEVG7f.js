import{j as r}from"./iframe-CTX0Bv2_.js";import{C as n,M as e}from"./MenuItem-DYNpxOrQ.js";import{C as s}from"./ContextMenuTrigger-C788Are4.js";import"./ContextMenuSection-B5km2Fq1.js";import{B as u}from"./Button--JyduJMj.js";import a from"./Default.stories-DQtl9Uje.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-IRtc2zB7.js";import"./context-DDqdITge.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./clsx-B-dksMZM.js";import"./index-Cuy-twEi.js";import"./useStatic-CPXlsR2u.js";import"./browser-NwcAgtgI.js";import"./getActionGroupSlot-CcrxUumb.js";import"./dynamic-izZr6sj3.js";import"./Popover-CrXi74XC.js";import"./useOverlayController-DZ6rN5UT.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./Dialog-B47KQ7WD.js";import"./Button-C6E7IXzn.js";import"./utils-DEP6wxfF.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./context-BlMA_qTH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBVfaVqb.js";import"./useFocus-Brpf5vcF.js";import"./useFocusRing-jdOUMH5T.js";import"./useFocusable-C46UWCUq.js";import"./RSPContexts-FayjYhqz.js";import"./OverlayArrow-B_Rckldo.js";import"./useControlledState-BSzbNF-6.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./Text-CfE4Vxx5.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./VisuallyHidden-DBqpLolF.js";import"./IconWarning-nHMyX661.js";import"./remote-Dp_KpE6s.js";import"./Switch-DCUH1Ng1.js";import"./useFieldComponent-mADlv6K1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CVw6H8q9.js";import"./useFormReset-CFaexdLs.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./OverlayTrigger-DD_Axl8O.js";import"./Text-DLhfgo2a.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Separator-BxKwj8bk.js";import"./Heading-Dk_R5Gok.js";import"./Heading-BWaAz6go.js";import"./Avatar-BO_eDNXJ.js";import"./AlertIcon-CvLHNETq.js";import"./Initials-CaG43U1w.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
