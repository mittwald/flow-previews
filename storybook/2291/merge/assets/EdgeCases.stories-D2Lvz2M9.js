import{j as r}from"./iframe-BrRYKFNZ.js";import{C as n,M as e}from"./MenuItem-JsMD3fFQ.js";import{C as s}from"./ContextMenuTrigger-BYCzA1th.js";import"./ContextMenuSection-CWAGy83O.js";import{B as u}from"./Button-C60cqGfK.js";import a from"./Default.stories-DXRG0UV0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-D8nw7HFc.js";import"./context-CrKKxYCQ.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./clsx-B-dksMZM.js";import"./index--DYCSdQe.js";import"./useStatic-CMNgov9B.js";import"./browser-rpb3JyGK.js";import"./getActionGroupSlot-BX1oqOED.js";import"./dynamic-CVEHQCEx.js";import"./Popover-C9Fh-oR7.js";import"./useOverlayController-Okmjmi6H.js";import"./OverlayContextProvider-Cf_qIYKP.js";import"./Dialog-CrRUDPQZ.js";import"./Button-B8owV-WL.js";import"./utils-B1YhIU5r.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./context-CNZG124A.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-fw0Lqzwn.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocusable-NfSEA2Af.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./Text-C7DedtDs.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./VisuallyHidden-VjzJwiBh.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./Switch-BVlfE34l.js";import"./useFieldComponent-D0nvFHA9.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CxSzAxcM.js";import"./useFormReset-9TaX9dD_.js";import"./LoadingSpinner-Djs3hRtr.js";import"./OverlayTrigger-D29G-Fo8.js";import"./Text-BQhotjr-.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Separator-BMSAdI-R.js";import"./Heading-BEvNp9N_.js";import"./Heading-DT_vZFGH.js";import"./Avatar-DQBZ_YZj.js";import"./AlertIcon-B-O3oopm.js";import"./Initials-DESoKOOn.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
