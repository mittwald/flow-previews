import{j as r}from"./iframe-DALqHAyB.js";import{C as n,M as e}from"./MenuItem-COpjurPp.js";import{C as s}from"./ContextMenuTrigger-aeKlUVWS.js";import"./ContextMenuSection-BiaSnVoU.js";import{B as u}from"./Button-BbfkfOCO.js";import a from"./Default.stories-DgOWiBkU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./Action-yEvGmIpX.js";import"./context-CWEo3fLe.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./useStatic-WJbJZsQS.js";import"./browser-pVqjrops.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./dynamic-aVFvjRkA.js";import"./Popover-CrnBVe2l.js";import"./useOverlayController-DLM_LHaF.js";import"./OverlayContextProvider-DuttmE5t.js";import"./Dialog-bs1AaCOv.js";import"./Button-B6bWdLOu.js";import"./utils-C0MA_VWy.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./context-aw0dYPtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./Text-vTixOjUz.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./VisuallyHidden-BkwE9NAp.js";import"./ClearPropsContextView-BSXhUQ8g.js";import"./ClearPropsContext-frWmeUQW.js";import"./IconWarning-CcDUp5xj.js";import"./Switch-BaDq03Gc.js";import"./useFieldComponent-CuLkv2Wr.js";import"./react-children-utilities-C1NF1MDP.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./useToggleState-D_bLNmdj.js";import"./useFormReset-C8DxwuW7.js";import"./OverlayTrigger-DCsddSuz.js";import"./ControlledNotification-CAzCaSM8.js";import"./Text-BxJmp77a.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./LoadingSpinner-K4oR_LJz.js";import"./Separator-B49_ybeu.js";import"./Heading-lDiFG-iI.js";import"./Heading-BEFcq9oy.js";import"./Avatar-D9OXafuu.js";import"./AlertIcon-DFMR_FFq.js";import"./Initials-D9kBnY90.js";const wr={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Sr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Sr as __namedExportsOrder,wr as default};
