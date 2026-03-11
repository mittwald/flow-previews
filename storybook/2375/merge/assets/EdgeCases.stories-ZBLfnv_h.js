import{j as r}from"./iframe-C0EFV5oe.js";import{C as n,M as m}from"./MenuItem-DOcffqKI.js";import{C as s}from"./ContextMenuTrigger-RXQqOYFx.js";import"./ContextMenuSection-CeWW7BcO.js";import{B as u}from"./Button-BqN-Pb_Z.js";import a from"./Default.stories-DiPh94JP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./ActionBatch-BKp4oeCQ.js";import"./useOverlayController-DSjMGOL2.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./clsx-B-dksMZM.js";import"./index-CT8mMXvE.js";import"./useStatic-BaJc0e4A.js";import"./browser-yoNZwNd3.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./dynamic-DNPsW2Gv.js";import"./Popover-CLY6HSe2.js";import"./OverlayContextProvider-CfXne1yD.js";import"./Dialog-DJ2-3VRx.js";import"./Button-DHla6nGC.js";import"./utils-BH6nMpvt.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./context-8WtOcV7b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-KZK5hlL_.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./RSPContexts-DN9Cbb61.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./Text-BncBp0aM.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./VisuallyHidden-BtDJhMaH.js";import"./IconWarning-Xp-mdAXG.js";import"./remote-CJHR20lz.js";import"./Switch-CGDsTKBH.js";import"./useFieldComponent-Becw-9Qv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-exBklheb.js";import"./useFormReset-D0RWbzMx.js";import"./LoadingSpinner-AXwRYWdI.js";import"./OverlayTrigger-Dw0FnMHR.js";import"./Text-DOyzWtc3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Separator-t8zEAXTA.js";import"./Heading-CZ1StJHC.js";import"./Heading-B3GE8mEs.js";import"./Avatar-W0uNQuG9.js";import"./AlertIcon-C23FUlLu.js";import"./Initials-CiUJG5wi.js";import"./index-BcxSEo57.js";const Lr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...e,children:Array(20).fill("").map((d,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
