import{j as r}from"./iframe-COJ9RE48.js";import{C as n,M as m}from"./MenuItem-6Ge2i2CE.js";import{C as s}from"./ContextMenuTrigger-kuKBQI7o.js";import"./ContextMenuSection-BD_6r0jM.js";import{B as u}from"./Button-CMQanS4m.js";import a from"./Default.stories-B_kyhaA3.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BL-a0sfJ.js";import"./useOverlayController-FIUUtlCA.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./clsx-B-dksMZM.js";import"./index-D5EZb4o9.js";import"./useStatic-BccM3ree.js";import"./browser-DOjt7J27.js";import"./getActionGroupSlot-CmDqFskk.js";import"./dynamic-CTxK5DLa.js";import"./Popover-BIPjdJIA.js";import"./OverlayContextProvider-CBc03cFF.js";import"./Dialog-Bn1iAsfr.js";import"./Button-BX1Wpmoy.js";import"./utils-mqorQ4Bj.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./context-6fEx4cd5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CI06DRQW.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useFocusable-_fwbj2-b.js";import"./RSPContexts-CacVUoYW.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./Text-De8BGzPh.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./VisuallyHidden-DAPVNl2G.js";import"./IconWarning-BMwiqmvN.js";import"./remote-BHpqvLOn.js";import"./Switch-1zAbfOeR.js";import"./useFieldComponent-C2vXV8Pm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BmWJDr6D.js";import"./useFormReset-BVeU8GRO.js";import"./LoadingSpinner-CBTolouR.js";import"./OverlayTrigger-CWnPf4Dw.js";import"./Text-Bzpr-GrC.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Separator-FQu4ANsr.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./Avatar-BwHSrrrF.js";import"./AlertIcon-BTDbiAGg.js";import"./Initials-ChZARZGF.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
