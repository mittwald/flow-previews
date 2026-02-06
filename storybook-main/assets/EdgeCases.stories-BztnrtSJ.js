import{j as r}from"./iframe-bYrN4iqU.js";import{C as n,M as e}from"./MenuItem-BBH1ugLq.js";import{C as s}from"./ContextMenuTrigger-De9uu2YY.js";import"./ContextMenuSection-BqvB1DY5.js";import{B as u}from"./Button-BXFpqU-p.js";import a from"./Default.stories-DdlhYUPT.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BReqqCkr.js";import"./context-CIgtX0DK.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./clsx-B-dksMZM.js";import"./index-ByZhX1CH.js";import"./useStatic-ByHvTm37.js";import"./browser-CHbB-bBA.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./dynamic-CHbvz_qx.js";import"./Popover-LLtPuoZ9.js";import"./useOverlayController-DrRVhmF6.js";import"./OverlayContextProvider-CcBeb8cT.js";import"./Dialog-CxLv1-pk.js";import"./Button-BmdWdjlP.js";import"./utils-B3voqzat.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./context-Hrlbzros.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CHP3pRkH.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./Text-Dj7c1Gq2.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./VisuallyHidden-DAWjrZx-.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Switch-CJhW4ezu.js";import"./useFieldComponent-CM1iSrAB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CM2KRk1e.js";import"./useFormReset-Cb31B_gj.js";import"./LoadingSpinner-jOE_2qaU.js";import"./OverlayTrigger-Ck0Q03CL.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Separator-Diqeq5uG.js";import"./Heading-tEMYcZaF.js";import"./Heading-CY9qodVf.js";import"./Avatar-DH9wr49V.js";import"./AlertIcon-fl_R2PKX.js";import"./Initials-BispKzAt.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
