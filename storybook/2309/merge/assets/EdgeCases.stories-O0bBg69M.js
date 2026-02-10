import{j as r}from"./iframe--WfF81Kk.js";import{C as n,M as e}from"./MenuItem-Ciujc6nw.js";import{C as s}from"./ContextMenuTrigger-C5teqR94.js";import"./ContextMenuSection-BxJIjSzE.js";import{B as u}from"./Button-Csb2zbZD.js";import a from"./Default.stories-nf8_zAe-.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-B7MToOoF.js";import"./context-BQE_egpR.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./clsx-B-dksMZM.js";import"./index-C06vQZsJ.js";import"./useStatic-DJuRNbYT.js";import"./browser-DaXQhhrD.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./dynamic-3udm1Ueo.js";import"./Popover-B5ewr3nw.js";import"./useOverlayController-CPgvQG2b.js";import"./OverlayContextProvider-HfoRPLvl.js";import"./Dialog-C_VjyLol.js";import"./Button-cdObnXIw.js";import"./utils-DjCd38Rb.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./context-BGH-DtkU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CuA8A2Wl.js";import"./useFocus-BstfIGzX.js";import"./useFocusRing-xiCVrDfg.js";import"./useFocusable-CYWdX1lX.js";import"./RSPContexts-D6CGk5en.js";import"./OverlayArrow-zU7WmGPw.js";import"./useControlledState-33z9BU53.js";import"./Collection-WxHe4g5S.js";import"./CollectionBuilder-D8350JFC.js";import"./SelectionIndicator-BGWzSObI.js";import"./Separator-C9zEzG3T.js";import"./Text-2H1diUJp.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./useCollator-lImoFu1C.js";import"./FocusScope-D57rWz_c.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./VisuallyHidden-BWpEL0hX.js";import"./IconWarning-BCj0akvL.js";import"./remote-BYVMC2eP.js";import"./Switch-BKX9jQq5.js";import"./useFieldComponent-DtaSYFu8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D1UzoBwi.js";import"./useFormReset-B7XwhHp1.js";import"./LoadingSpinner-BoJLilDa.js";import"./OverlayTrigger-CvMg_PBm.js";import"./Text-BQUBTPZI.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Separator-CntWr27f.js";import"./Heading-CQM1gGXf.js";import"./Heading-DpPfmaJp.js";import"./Avatar-BehruE7U.js";import"./AlertIcon-Bc0kQsAW.js";import"./Initials-PcMPNCt3.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
