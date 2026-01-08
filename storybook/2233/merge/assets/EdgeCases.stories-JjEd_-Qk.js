import{j as r}from"./iframe-BMquwUxp.js";import{C as n,M as e}from"./MenuItem-BtwpQWtu.js";import{C as s}from"./ContextMenuTrigger-Bzz3A5D4.js";import"./ContextMenuSection-DHh_hwVu.js";import{B as u}from"./Button-DvE0An6z.js";import a from"./Default.stories-DtsDe7sB.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-4VgG125V.js";import"./context-BbITb74L.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./useStatic-BMpae3_g.js";import"./browser-CBlt42Oy.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./dynamic-B-3tImXr.js";import"./Popover-N4AFYi9M.js";import"./useOverlayController-CAAAYEI-.js";import"./OverlayContextProvider-Box79lc0.js";import"./Dialog-Dx0VK2pV.js";import"./Button-CwpJPQ3S.js";import"./utils-C54becjs.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./context-BcuHL9mG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./Text-CPXkgTZA.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./VisuallyHidden-D31Z6xaf.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Switch-CV-3kgrO.js";import"./useFieldComponent-7OMeXUSU.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CQCmiVfi.js";import"./useFormReset-DGUxmLDL.js";import"./OverlayTrigger-C_Vz8Pl3.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./LoadingSpinner-BPW5hp_J.js";import"./Separator-BLhIyNcI.js";import"./Heading-DmFdEGik.js";import"./Heading-DxuUq0JW.js";import"./Avatar-Cj8aif8C.js";import"./AlertIcon-COvVg6Bc.js";import"./Initials-7t_TJtKc.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
