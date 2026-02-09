import{j as r}from"./iframe-BwTc9KkQ.js";import{C as n,M as e}from"./MenuItem-Cmfl0u0q.js";import{C as s}from"./ContextMenuTrigger-dW6z12Kq.js";import"./ContextMenuSection-LW48IjXN.js";import{B as u}from"./Button-Ckvz-MCb.js";import a from"./Default.stories-BzivYdSk.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BhNW5Llg.js";import"./context-BTkxUDR7.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./clsx-B-dksMZM.js";import"./index-C6-tpPRF.js";import"./useStatic-D7wzuZGA.js";import"./browser-vKZ8hCbx.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./dynamic-BE4DvzFx.js";import"./Popover-BUM7xHoq.js";import"./useOverlayController-DcbIZot8.js";import"./OverlayContextProvider-aDhVlP4w.js";import"./Dialog-DfJHDuJ2.js";import"./Button-DqSxrgNL.js";import"./utils-CBQcEIVx.js";import"./ProgressBar-CaYu3rjO.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./context-BwyA9HG-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CJeMKVhz.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useFocusable-B00zaX18.js";import"./RSPContexts-DUJ8CZ2M.js";import"./OverlayArrow-DC7WkuhA.js";import"./useControlledState-DJoARPq6.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./Text-DngMYAZH.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./VisuallyHidden-BgOZVVaM.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./Switch-CnQUUnNr.js";import"./useFieldComponent-D1bp3yFp.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cml1ZYmi.js";import"./useFormReset-38634gnl.js";import"./LoadingSpinner-lc_9xcB8.js";import"./OverlayTrigger-D7e37rU3.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Separator-BaPMbZG-.js";import"./Heading-DdwcYqWJ.js";import"./Heading-DshP_5_D.js";import"./Avatar-D0Q-f-7d.js";import"./AlertIcon-B9dP4NVD.js";import"./Initials-DSN5_vLM.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
