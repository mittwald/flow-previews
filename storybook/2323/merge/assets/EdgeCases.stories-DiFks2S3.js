import{j as r}from"./iframe-BwxXT37i.js";import{C as n,M as m}from"./MenuItem-BdKibt1d.js";import{C as s}from"./ContextMenuTrigger-BMQPrhy2.js";import"./ContextMenuSection-DLmcvkG_.js";import{B as u}from"./Button-BPaKVUIt.js";import a from"./Default.stories-1HJo6qp6.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BYAp_qkn.js";import"./useOverlayController-Clvgh-dL.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./clsx-B-dksMZM.js";import"./index-DuE4n7_M.js";import"./useStatic-DbyoNtmr.js";import"./browser-DWx5NGhf.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./dynamic-dswMj1gt.js";import"./Popover-CGrzjmtZ.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./Dialog-B0vuTUBy.js";import"./Button-Cy0UoRmV.js";import"./utils-CJgL2cA6.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./Text-CMM9EMAj.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./VisuallyHidden-BP4pgppw.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./Switch-Bw-Ftgxc.js";import"./useFieldComponent-CUBWvnpR.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CU0nZqEv.js";import"./useFormReset-BZECQBSr.js";import"./LoadingSpinner-C1b88oeC.js";import"./OverlayTrigger-DDMtWs7A.js";import"./Text-COIxE5M6.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Separator-BZKFLuAN.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./Avatar-BEASWQ_4.js";import"./AlertIcon-DLpjaGh3.js";import"./Initials-m7sDTQ3r.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Ar=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Ar as __namedExportsOrder,Lr as default};
