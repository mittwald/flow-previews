import{j as r}from"./iframe-BF3zk0it.js";import{C as n,M as m}from"./MenuItem-Y5_Oqunz.js";import{C as s}from"./ContextMenuTrigger-CLnx66A6.js";import"./ContextMenuSection-DmXH8tfJ.js";import{B as u}from"./Button-ZNdemegp.js";import a from"./Default.stories-B6rI_BfB.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-DvnrQlZS.js";import"./useOverlayController-CjUKcEGt.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./useStatic-B_2dxxhv.js";import"./browser-Cxel5Cqf.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./dynamic-DMyjxIhV.js";import"./Popover-CIOQTdzG.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./Dialog-IYHamviF.js";import"./Button-CioOZKSP.js";import"./utils-Ds629Okb.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./context-B_W42rBs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./RSPContexts-ssfE85JL.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./Text-CwwNB0nU.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./VisuallyHidden-P8G91P8h.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./Switch-gHfb8p7j.js";import"./useFieldComponent-Z2yLJYUo.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ZrzPMdJs.js";import"./useFormReset-Dd7cUUSK.js";import"./LoadingSpinner-BryS_W8u.js";import"./OverlayTrigger-C5NrL7-k.js";import"./Text-C9_U4GIb.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Separator-DMn_aT0z.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./Avatar-Du8K-yac.js";import"./AlertIcon-CwrMzrhG.js";import"./Initials-BnjTuqUG.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
