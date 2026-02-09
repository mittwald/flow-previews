import{j as r}from"./iframe-D6IogGzN.js";import{C as n,M as e}from"./MenuItem-yPR6aEP7.js";import{C as s}from"./ContextMenuTrigger-BdFOlCHV.js";import"./ContextMenuSection-DtXi0ARF.js";import{B as u}from"./Button-4bsuig8G.js";import a from"./Default.stories-Bq-14s0G.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CdCNq_o6.js";import"./context-C3OW4m7r.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./clsx-B-dksMZM.js";import"./index-D5OmXbhN.js";import"./useStatic-BI3MLON7.js";import"./browser-JB3DJ3rF.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./dynamic-DOTSgjbA.js";import"./Popover-Bko44XEP.js";import"./useOverlayController-wzkI43Df.js";import"./OverlayContextProvider-V3LFD1Iu.js";import"./Dialog-SQEPLKiU.js";import"./Button-BjufwbKz.js";import"./utils-DGVDGTqS.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./context-D_0iO3JE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-OPUq1uX5.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useFocusable-CqeTIxtx.js";import"./RSPContexts-Y8HBeOxz.js";import"./OverlayArrow-AHInXUcQ.js";import"./useControlledState-DoPmGGFu.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./Text-CSz0hkcR.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./VisuallyHidden-CtfXU_Om.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./Switch-BnRPZ99w.js";import"./useFieldComponent-DWOteHG6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-AllAErbL.js";import"./useFormReset-zYUel0fa.js";import"./LoadingSpinner-BmFbjzPt.js";import"./OverlayTrigger-IpTzHf0r.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Separator-qIHLWGx1.js";import"./Heading-DudhsRUa.js";import"./Heading-BP-CAVCT.js";import"./Avatar-D68T1hIN.js";import"./AlertIcon-BzliTC0_.js";import"./Initials-D-97ud2q.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
