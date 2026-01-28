import{j as r}from"./iframe-CFLRrV9_.js";import{C as n,M as e}from"./MenuItem-DTB20trc.js";import{C as s}from"./ContextMenuTrigger-vpjNUd2U.js";import"./ContextMenuSection-KLSTc6el.js";import{B as u}from"./Button-C6DtPvCF.js";import a from"./Default.stories--R9j8njr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action--cE17EXA.js";import"./context-CslVSGqZ.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./clsx-B-dksMZM.js";import"./index-24zjo-Kb.js";import"./useStatic-Bo06Q_Yy.js";import"./browser-6ZyX-izP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./dynamic-CfUvB6Rc.js";import"./Popover-Dnnhcr9k.js";import"./useOverlayController-yVCc_ngp.js";import"./OverlayContextProvider-0OCnXaQU.js";import"./Dialog-CsaxLO_h.js";import"./Button-CQ9x5Ymh.js";import"./utils-9RAZgTTl.js";import"./ProgressBar-CAwZsQPk.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./context-bb3yZDI9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-LdOf-GEu.js";import"./useFocus-DD1T6bJ4.js";import"./useFocusRing-DRVonXEI.js";import"./useFocusable-CQU1ZNCF.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./useControlledState-BS0DqA_d.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./Text-DCjLwlBM.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./VisuallyHidden-DH38u7VP.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./Switch-x4Es3Dv3.js";import"./useFieldComponent-CywuRKF5.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-TrvDOe8C.js";import"./useFormReset-BcY6_uyQ.js";import"./LoadingSpinner-D6sn6dKn.js";import"./OverlayTrigger-C2fP4BlG.js";import"./Text-DEmvrg4f.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Separator-4vRC-Omk.js";import"./Heading-1o2wH2IP.js";import"./Heading-CD-g7ugM.js";import"./Avatar-DDdo7mib.js";import"./AlertIcon-Dk-GLzZT.js";import"./Initials-DilJNK3n.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
