import{j as r}from"./iframe-YnzBkBP1.js";import{C as n,M as e}from"./ContextMenu-B2Kv-ADC.js";import{C as s}from"./ContextMenuTrigger-a2bNZsOh.js";import"./ContextMenuSection-Bzcd8RVm.js";import{B as u}from"./Button-BvFsSv02.js";import a from"./Default.stories-z8koxYwq.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./IconWarning-CfrgrK5w.js";import"./remote-psJ_k7Km.js";import"./Switch-WPEHj1yJ.js";import"./useFieldComponent-BnDxVRXr.js";import"./Label.module-CUYTf9Jc.js";import"./utils-CRkRQkMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-yPblB1_u.js";import"./useFormReset-3oD77Uyk.js";import"./usePress-NgaP4MvP.js";import"./useFocus-CEJfh5Ox.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocusable-BIzKoTBr.js";import"./useControlledState-DwL8StHF.js";import"./VisuallyHidden-BsENeWhO.js";import"./Dialog-971pU4tV.js";import"./Button-DfMPCk5A.js";import"./ProgressBar-139JbARe.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./useLabel-DyCvkQuz.js";import"./context-Dc351FW_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-Mp6syAgQ.js";import"./OverlayArrow--71CUfvh.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./Text-C_7kOqPJ.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./Action-DDQNlr1F.js";import"./context-CGFBFC28.js";import"./useStatic-9o3ywd_N.js";import"./browser-Sf85iaAd.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./dynamic-DAiG6Vmq.js";import"./Popover-BfimHfgr.js";import"./useOverlayController-BBC78SET.js";import"./OverlayContextProvider-JV42Gzf_.js";import"./OverlayTrigger-B11Ab0Yr.js";import"./Text-CErt044E.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./LoadingSpinner-z9BQWCCX.js";import"./Separator-DH8bSJzl.js";import"./Heading-BiUnALLM.js";import"./Heading-ChrBU0Of.js";import"./Avatar-iwY6Vaoc.js";import"./AlertIcon-DE5OYWVT.js";import"./Initials-_T8OONVX.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
