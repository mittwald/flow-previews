import{j as r}from"./iframe-BbsOAs33.js";import{C as n,M as e}from"./ContextMenu-Dg-dsMVY.js";import{C as s}from"./ContextMenuTrigger-CNa88teJ.js";import"./ContextMenuSection-Dt_P0EQ4.js";import{B as u}from"./Button-CAGXh9YY.js";import a from"./Default.stories-DMipSg-1.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./Switch-BVNfvCEp.js";import"./useFieldComponent-c0I5eEtM.js";import"./Label.module-CUYTf9Jc.js";import"./utils-d4vW56Wr.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-CquJo8pa.js";import"./useFormReset-eAh5gylf.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocus-8sJeBC00.js";import"./usePress-CuEkD-Mt.js";import"./useFocusable-CRykt1O9.js";import"./useControlledState-QxMMjnNS.js";import"./VisuallyHidden-D-GMXsu-.js";import"./Dialog-Ch_CeJ5E.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./useLabel-BZoz0BQC.js";import"./context-DDHwgpv7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DfamIfkg.js";import"./OverlayArrow-N6t0bVoH.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./Text-C1_k2kAR.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./Action-BXhMVvh_.js";import"./context-_vxrJXzy.js";import"./useStatic-PZIJlmDl.js";import"./browser-6_CJeJSO.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./dynamic-CoVYgUcD.js";import"./Popover-BeKDLuBK.js";import"./useOverlayController-DeIZdXjQ.js";import"./OverlayContextProvider-Byu7izWK.js";import"./OverlayTrigger-C8Sbeft1.js";import"./Text-BYxWYBBY.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./LoadingSpinner-CNcanuZc.js";import"./Separator-3l4JzLG0.js";import"./Heading-BC6iu52J.js";import"./Heading-Delp_XvT.js";import"./Avatar-ByU92Suh.js";import"./AlertIcon-B34gK9Vj.js";import"./Initials-CDqMNgB4.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
