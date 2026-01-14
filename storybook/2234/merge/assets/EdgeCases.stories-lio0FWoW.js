import{j as r}from"./iframe-ByN7k_Da.js";import{C as n,M as e}from"./ContextMenu-D9Hif_44.js";import{C as s}from"./ContextMenuTrigger-CTAmPMks.js";import"./ContextMenuSection-Cx4PBQo5.js";import{B as u}from"./Button-DLduC619.js";import a from"./Default.stories-DQO5wbV1.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./index-bUl7c0HC.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./Switch-CJiZENhq.js";import"./useFieldComponent-DAKvP2zf.js";import"./Label.module-CUYTf9Jc.js";import"./utils-D8xEYOuW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-B8ewhbJx.js";import"./useFormReset-Bc5cKrWY.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./useControlledState-kSDz6lD9.js";import"./VisuallyHidden-CV3OLvgc.js";import"./Dialog-Cvkq5YiV.js";import"./Button-CAFU8pmb.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./useLabel-x0Vjylpp.js";import"./context-rGL7bC8_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./Text-j0nufsIB.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./Action-BmGz2Z1M.js";import"./context-D7USXnL-.js";import"./useStatic-BKQ_69l_.js";import"./browser-Co1wUnJx.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./dynamic-CwJG9Kct.js";import"./Popover-C4a2YCNk.js";import"./useOverlayController-B-zt5KRt.js";import"./OverlayContextProvider-CJmTzcIB.js";import"./OverlayTrigger-CEg2Xl2L.js";import"./Text-Cb-8LAS5.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./Separator-nV82Wl7D.js";import"./Heading-CXqr_WQ4.js";import"./Heading-Ds7RnOJz.js";import"./Avatar-cDa1cC-0.js";import"./AlertIcon-5K33k8fm.js";import"./Initials-ejgndrZx.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
