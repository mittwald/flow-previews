import{j as r}from"./iframe-B-_izELn.js";import{C as n,M as e}from"./ContextMenu-PvF5Gfl6.js";import{C as s}from"./ContextMenuTrigger-DTXkuttU.js";import"./ContextMenuSection-Cd3ymo9B.js";import{B as u}from"./Button-rB1lHab_.js";import a from"./Default.stories-Byb4VmaE.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./Switch-BVcAR7hN.js";import"./useFieldComponent-Kyt2SdHG.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CTzaLK4l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-C7JUTu28.js";import"./useFormReset-BUoUtOhQ.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./useControlledState-tdUQVzVH.js";import"./VisuallyHidden-DwaExAJM.js";import"./Dialog-C6Hf8kgU.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./useLabel-DZiDffWU.js";import"./context-CP_ivtNk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./Text-Cbq-V_qs.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./Action-CmZvSofW.js";import"./context--GYGv0Su.js";import"./useStatic-k4uG0_kr.js";import"./browser-C9rDHpHO.js";import"./getActionGroupSlot-DlereTwl.js";import"./dynamic-bdsqC1kS.js";import"./Popover-BgKMlpHY.js";import"./useOverlayController-DRATrlGn.js";import"./OverlayContextProvider-CZWz1i-_.js";import"./OverlayTrigger-DaYOrCfk.js";import"./Text-B9UK706u.js";import"./EmulatedBoldText-DO19SLv9.js";import"./LoadingSpinner-BCeR-IPA.js";import"./Separator-BlqSgaz1.js";import"./Heading-BAMsaaGA.js";import"./Heading-DVKq7Ots.js";import"./Avatar-Bs5eRb-P.js";import"./AlertIcon-DHh3kTXL.js";import"./Initials-DZ5gq8Kv.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
