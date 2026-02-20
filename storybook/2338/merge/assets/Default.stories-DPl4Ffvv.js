import{R as u,j as e}from"./iframe-BXGfha1q.js";import{b as x,B as o}from"./Badge-CbBinVam.js";import{T as i}from"./Text-BbFupL_Y.js";import{L as m}from"./Label-DmvSuQEb.js";import{C as g,M as d}from"./MenuItem-Dwef0UQJ.js";import"./ContextMenuTrigger-Byk7iPD-.js";import"./ContextMenuSection-DVxvJxxR.js";import"./flowComponent-C3bfeK4-.js";import{u as h}from"./useOverlayController-yGpX5sn6.js";import{S as f}from"./StoryBackground-ERSKuX9a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-DfmOHFsC.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./LoadingSpinner-CnywtlQ4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./Button-DxgvyAFC.js";import"./utils-DDzB-hS3.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-z52bmq8Z.js";import"./useStatic-BExQ1RD0.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./dynamic-Cx3iunOI.js";import"./Popover-DUbvu04K.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./Dialog-DLzuiFtz.js";import"./RSPContexts-CG0vEblW.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./Switch-Bp0NmC8t.js";import"./useFieldComponent-BBRXs3en.js";import"./useToggleState-BBpbo1Bk.js";import"./useFormReset-9RWtv4Ar.js";import"./OverlayTrigger-BPtqEArA.js";const be={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      Value
    </Badge>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("ContextMenu");
    const triggerRef = React.useRef(null);
    return <>
        <Badge ref={triggerRef} onPress={controller.open} {...props}>
          <Label>Scope</Label>
          <Text>Value</Text>
        </Badge>
        <ContextMenu controller={controller} triggerRef={triggerRef}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </ContextMenu>
      </>;
  }
}`,...a.parameters?.docs?.source}}};const Ie=["Default","WithScope","WithOnPress","WithOnClose","WithContextMenu"];export{t as Default,a as WithContextMenu,p as WithOnClose,n as WithOnPress,s as WithScope,Ie as __namedExportsOrder,be as default};
