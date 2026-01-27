import{j as r}from"./iframe-EUG4rdOg.js";import{C as n,M as e}from"./ContextMenu-Bz7puVMH.js";import{C as s}from"./ContextMenuTrigger-_OSnRPnl.js";import"./ContextMenuSection-BWaZOiqV.js";import{B as u}from"./Button-CEake6G1.js";import a from"./Default.stories-BHQjmJ_Q.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./Switch-DvUeFtN7.js";import"./useFieldComponent-Bs969hQl.js";import"./Label.module-CUYTf9Jc.js";import"./utils-DJPQq0Ir.js";import"./filterDOMProps-BNnC3YgW.js";import"./useToggleState-Bt36YEmE.js";import"./useFormReset-BWBNxDQ8.js";import"./useFocusRing-pMATsfPY.js";import"./useFocus-Ca80QzG_.js";import"./usePress-CyxS_pZ-.js";import"./useFocusable-YuTP7Rcp.js";import"./useControlledState-DorIVmrH.js";import"./VisuallyHidden-DwLUyGt6.js";import"./Dialog-ClYDKCvQ.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./useLabel-Ddt3ftMp.js";import"./context-DxYQrQkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./Text-BNRjjFE0.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./Action-DJ1WPhSw.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./browser-Dr5hWFfi.js";import"./getActionGroupSlot-nY47Clec.js";import"./dynamic-B-NoN6qZ.js";import"./Popover-CaMCpQGe.js";import"./useOverlayController-8UNjRd9m.js";import"./OverlayContextProvider-bBBj8Jql.js";import"./OverlayTrigger-CAZY-Adw.js";import"./Text-DlICJI4S.js";import"./EmulatedBoldText-wvGqieyl.js";import"./LoadingSpinner-CJqmAtLp.js";import"./Separator-MTFfyjAY.js";import"./Heading-Bi7E6SrE.js";import"./Heading-DsDU_kOR.js";import"./Avatar-Dy4tfaM3.js";import"./AlertIcon-C4O6kAyM.js";import"./Initials-4z5iG5mi.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
