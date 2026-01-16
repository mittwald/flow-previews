import{j as r}from"./iframe-W1iyoXhf.js";import{C as n,M as e}from"./ContextMenu-B6M1HUST.js";import{C as s}from"./ContextMenuTrigger-Cqh-K55E.js";import"./ContextMenuSection-DWjrG_wk.js";import{B as u}from"./Button-IzhK2U-6.js";import a from"./Default.stories-Bmu8YQt9.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./IconWarning-Cnnsa5dA.js";import"./remote-CbMcOagV.js";import"./Switch-DOYknjs6.js";import"./useFieldComponent-CeQ6dqWY.js";import"./Label.module-CUYTf9Jc.js";import"./utils-Co92dFN-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CpoCoou-.js";import"./useFormReset-DYb2_5Lx.js";import"./usePress-DwtcUURT.js";import"./useFocus-BF1azJZZ.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./useControlledState-BeXX8b-c.js";import"./VisuallyHidden-9GsfRhh1.js";import"./Dialog-Dwmqa2yo.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./useLabel-C8GMPbyu.js";import"./context-Dx3ASvxi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./Text-DMuz8jzh.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./Action-BaKsvCHV.js";import"./context-Cx4Tf49f.js";import"./useStatic-DFE9WV1t.js";import"./browser-D1HYvIQy.js";import"./getActionGroupSlot-nARO-zR5.js";import"./dynamic-X2nPVSXv.js";import"./Popover-ZTnfTngx.js";import"./useOverlayController-BLagNJVD.js";import"./OverlayContextProvider-CtixpOlY.js";import"./OverlayTrigger-CDdGESRy.js";import"./Text-DcDEk3cp.js";import"./EmulatedBoldText-BfE11w5D.js";import"./LoadingSpinner-BMAt0-EL.js";import"./Separator-DYMsLvsU.js";import"./Heading-CkZ0B9ED.js";import"./Heading-DW_b7ElP.js";import"./Avatar-C3c586bK.js";import"./AlertIcon-Cyqu-_3z.js";import"./Initials-BryrbiR5.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
