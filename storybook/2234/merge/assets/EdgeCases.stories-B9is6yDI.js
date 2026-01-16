import{j as r}from"./iframe-DZ4teeW0.js";import{C as n,M as e}from"./ContextMenu-BlWs3f9C.js";import{C as s}from"./ContextMenuTrigger-DaYyEAiy.js";import"./ContextMenuSection-NaF-svH4.js";import{B as u}from"./Button-DKoFnNBZ.js";import a from"./Default.stories-D_5oJORP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./Switch-DWY9n4FY.js";import"./useFieldComponent-D07Wu5hH.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CmR_RyV0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-Cwscwg90.js";import"./useFormReset-CHb94_Ie.js";import"./usePress-DM-2A3ZD.js";import"./useFocus-DPzONbd_.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";import"./useControlledState-CE05dG3o.js";import"./VisuallyHidden-DG5gzPUr.js";import"./Dialog-mp_BsC5B.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./useLabel-CN_YQU3T.js";import"./context-CZC3VL3b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./Text-BkVlga5W.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./Action-IUgUGwCY.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./browser-BOIGtlkn.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./dynamic-DLpaDBxN.js";import"./Popover-O3EK8S3M.js";import"./useOverlayController-CclcYwrc.js";import"./OverlayContextProvider-Bp1oUVk4.js";import"./OverlayTrigger-DrQSWpcn.js";import"./Text-C4YBtGrU.js";import"./EmulatedBoldText-D386c9ln.js";import"./LoadingSpinner-DJRFuNH9.js";import"./Separator-CiNDnKrS.js";import"./Heading-DmKF-kzC.js";import"./Heading-OLDiOTzf.js";import"./Avatar-Bonfp6V7.js";import"./AlertIcon-Dng1V2P2.js";import"./Initials-DHrD28lT.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
