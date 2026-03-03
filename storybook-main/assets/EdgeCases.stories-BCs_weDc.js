import{j as r}from"./iframe-DjjV-bH6.js";import{C as n,M as m}from"./MenuItem-BIKtJpks.js";import{C as s}from"./ContextMenuTrigger-XBcxcB2V.js";import"./ContextMenuSection-DWXh8VII.js";import{B as u}from"./Button-B7eEYP7w.js";import a from"./Default.stories-Bw7L0D2G.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-YJb9tMXC.js";import"./useOverlayController-DPRYSY6a.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./clsx-B-dksMZM.js";import"./index-CaIAbEHH.js";import"./useStatic-xFolvGTK.js";import"./browser-DMwaewkm.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./dynamic-BXsvgyJR.js";import"./Popover-BLR3Up5v.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./Dialog-Ok_9Edtl.js";import"./Button-DXnJuiQ-.js";import"./utils-Wzr-xt4Q.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./context-CVfxZLio.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoT418ij.js";import"./useFocus-C98Vumo7.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocusable-BB_F7Uj3.js";import"./RSPContexts-C5x5s972.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./Text-BylF3jjX.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./VisuallyHidden-CG1EK-5C.js";import"./IconWarning-BVYK-jeQ.js";import"./remote-BKpn4CGf.js";import"./Switch-AIigrr2P.js";import"./useFieldComponent-DlP24hgD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz5gkyTQ.js";import"./useFormReset-DovS_sbG.js";import"./LoadingSpinner-DTU1PYFj.js";import"./OverlayTrigger-CcgdKfuo.js";import"./Text-B3EwbE0r.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Separator-CytTQhyZ.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./Avatar-Dn3GkagS.js";import"./AlertIcon-DcWT0T9A.js";import"./Initials-BZ_GTNMg.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
