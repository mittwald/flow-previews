import{j as r}from"./iframe-DBKYLzDC.js";import{C as n,M as e}from"./MenuItem-DWaZWsVK.js";import{C as s}from"./ContextMenuTrigger-B5RaufFV.js";import"./ContextMenuSection-DLB9FUAU.js";import{B as u}from"./Button-BFOZVdd1.js";import a from"./Default.stories-C9VBU6vO.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-CPy4r2qq.js";import"./context-Duo0MdiJ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./useStatic-DlOT-tNl.js";import"./browser-DhKn1UU2.js";import"./getActionGroupSlot-BnE40Egr.js";import"./dynamic-C4GhTGlQ.js";import"./Popover-Chm2p3nv.js";import"./useOverlayController-CTM47RfB.js";import"./OverlayContextProvider-hZPIV4rO.js";import"./Dialog-DCNro2wm.js";import"./Button-Cx-eUYHB.js";import"./utils-BUG9eo0Q.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./context-DJBj5fN2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./Text-D7rD6BG6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./VisuallyHidden-BW797Lc5.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Switch-DAvg3yPy.js";import"./useFieldComponent-DRt8IUS_.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D4OQfVOW.js";import"./useFormReset-BczjDhHV.js";import"./LoadingSpinner-CHsn4uBv.js";import"./OverlayTrigger-Db-Qe3Sn.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Separator-CGjLzgHA.js";import"./Heading-DJddY0uQ.js";import"./Heading-BsK-SIF5.js";import"./Avatar-2c7lOfO2.js";import"./AlertIcon-BOzLdeCm.js";import"./Initials-CryjT7X6.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
