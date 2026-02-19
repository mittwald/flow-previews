import{j as r}from"./iframe-DepdzLEL.js";import{C as n,M as m}from"./MenuItem-BAI8GON0.js";import{C as s}from"./ContextMenuTrigger-QCL_t8W6.js";import"./ContextMenuSection-DuMO6oHS.js";import{B as u}from"./Button-CNIywMH8.js";import a from"./Default.stories-CJZ349GZ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-CxGdjV-j.js";import"./useOverlayController-Br9LJhfN.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./clsx-B-dksMZM.js";import"./index-QBVvmMGX.js";import"./useStatic-D2N_z3eO.js";import"./browser-DxvLCkxH.js";import"./getActionGroupSlot-DngwkT4-.js";import"./dynamic-DyShJQHT.js";import"./Popover-D-HE80pU.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./Dialog-pPKxFXOM.js";import"./Button-BTig9cwD.js";import"./utils-7tdA0jB4.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B2Boz_gi.js";import"./context-BDIAQ50e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BqHqHS4f.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useFocusable-Cun53ew4.js";import"./RSPContexts-C4BguXQB.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./Text-CHX4WGB5.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./VisuallyHidden-msEuPEko.js";import"./IconWarning-DzJyip11.js";import"./remote-BQ4RO_kW.js";import"./Switch-CTtGRWsg.js";import"./useFieldComponent-PSzBC9V7.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-3lRe43ig.js";import"./useFormReset-BQp6BNc9.js";import"./LoadingSpinner-CFbq72U2.js";import"./OverlayTrigger-BeYMVPU4.js";import"./Text-DQklyFH_.js";import"./EmulatedBoldText-MhUupop4.js";import"./Separator-BbBbtO3R.js";import"./Heading-BfiUETdQ.js";import"./Heading-Dfg4FmbO.js";import"./Avatar-BMKO7wRD.js";import"./AlertIcon-CRbLFRY9.js";import"./Initials-orGShNbS.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
