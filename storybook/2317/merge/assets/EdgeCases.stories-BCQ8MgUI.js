import{j as r}from"./iframe-C_YE0yRE.js";import{C as n,M as e}from"./MenuItem-C8HSkuUG.js";import{C as s}from"./ContextMenuTrigger-G_k9Jgni.js";import"./ContextMenuSection-DRxdJG8v.js";import{B as u}from"./Button-D40FTP7t.js";import a from"./Default.stories-BVM2cTJS.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CzLuBWBI.js";import"./context-CDhP7Jox.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./clsx-B-dksMZM.js";import"./index-C1o6XGyU.js";import"./useStatic-C9zmt-CB.js";import"./browser-BLJ3u5oR.js";import"./dynamic-DNhRkZnt.js";import"./getActionGroupSlot-C_onwoh9.js";import"./Popover-BcERq8Yi.js";import"./useOverlayController-DmoYfzmu.js";import"./OverlayContextProvider-BAAkSlrq.js";import"./Dialog-BXH836dM.js";import"./Button-DRed6E24.js";import"./utils-DHqPz2V6.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./context-BsGh4Cu8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNy1k_Tf.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocusable-CsoKnWSE.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./Text-BXWHLDC_.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./VisuallyHidden-DZpEB13Q.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./Switch-ChyQ_IKG.js";import"./useFieldComponent-CWA258Fl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B8Rf9xQv.js";import"./useFormReset-CEMPEkJX.js";import"./LoadingSpinner-CWKEQFJy.js";import"./OverlayTrigger-Cf8TPiFY.js";import"./Text-DHPE0I2s.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Separator-BHY_DYho.js";import"./Heading-Bwe8YU0o.js";import"./Heading-BsEG12w_.js";import"./Avatar-BoYy0FvN.js";import"./AlertIcon-ClTjLU4k.js";import"./Initials-Bet9WOQs.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
