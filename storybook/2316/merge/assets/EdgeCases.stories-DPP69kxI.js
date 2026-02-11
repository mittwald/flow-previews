import{j as r}from"./iframe-Cq8OhOqi.js";import{C as n,M as e}from"./MenuItem-F7n88wNc.js";import{C as s}from"./ContextMenuTrigger-DF5HhN7k.js";import"./ContextMenuSection-C22Hcd-O.js";import{B as u}from"./Button-BU-3gGXz.js";import a from"./Default.stories-Dqo9Gg5e.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CjFX3pKp.js";import"./context-DR72ScyD.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./clsx-B-dksMZM.js";import"./index-CtMt1etx.js";import"./useStatic-Dv08VHAH.js";import"./browser-D1jWek88.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./dynamic-fC-Lgr30.js";import"./Popover-CtLlX21S.js";import"./useOverlayController-D3DcD62Z.js";import"./OverlayContextProvider-BKoB-iKb.js";import"./Dialog-BglVjZuh.js";import"./Button-RahnnKar.js";import"./utils-Bubk6yJw.js";import"./ProgressBar-pI249SR8.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./context-EUTE_30t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ChoIOqc4.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useFocusable-Cka2f_Hf.js";import"./RSPContexts-CKy-IICl.js";import"./OverlayArrow-CUm_HcTA.js";import"./useControlledState-DRmDoHXV.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./Text-BrptySpj.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./VisuallyHidden-CN_7F8uI.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./Switch-dIYf3MAL.js";import"./useFieldComponent-BYb5VnRy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DVr2YOMM.js";import"./useFormReset-B4zM24P8.js";import"./LoadingSpinner-DSK_LMeC.js";import"./OverlayTrigger-DbQZU3bz.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Separator-of9u5BMv.js";import"./Heading-Di8lkzs2.js";import"./Heading-CPXM0mEb.js";import"./Avatar-C-yNh1xP.js";import"./AlertIcon-4JwX6npd.js";import"./Initials-Bm88MQhA.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
