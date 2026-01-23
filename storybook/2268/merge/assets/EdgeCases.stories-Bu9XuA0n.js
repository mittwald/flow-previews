import{j as r}from"./iframe-iY_Mn_oy.js";import{C as n,M as e}from"./ContextMenu-C1vsaGPq.js";import{C as s}from"./ContextMenuTrigger-Cr6Wbv0a.js";import"./ContextMenuSection-DufqnfrN.js";import{B as u}from"./Button-BXdn408E.js";import a from"./Default.stories-Bcvl3yp7.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./Switch-ubyeQV4j.js";import"./useFieldComponent-Cxjop7r-.js";import"./Label.module-CUYTf9Jc.js";import"./utils-C-pMCGM-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-BD2iW2dI.js";import"./useFormReset-DJj-QXR5.js";import"./usePress-B5dXj1sU.js";import"./useFocus-Nxno6ZgW.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";import"./useControlledState-DUH-ni6I.js";import"./VisuallyHidden-DEFkQEyo.js";import"./Dialog-BSCAVunC.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./useLabel-8EVB-03H.js";import"./context-DIbVk5_z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./Text-CktBEW1F.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./Action-iMWR4bsW.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./browser-DK9hE6UN.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./dynamic-CDOrKiJc.js";import"./Popover-CTmqafGM.js";import"./useOverlayController-B66mlXsj.js";import"./OverlayContextProvider-CEfkP99K.js";import"./OverlayTrigger-D-Sv7Auh.js";import"./Text-C2ZCo6gl.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./LoadingSpinner-C14k5CPB.js";import"./Separator-5j51brOL.js";import"./Heading-GKx2aQmx.js";import"./Heading-BsXYKZvI.js";import"./Avatar-VEmfUtB1.js";import"./AlertIcon-Dw605mNU.js";import"./Initials-DwspdtWR.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
