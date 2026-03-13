import{R as u,j as e}from"./iframe-CtEjVB66.js";import{b as x,B as o}from"./Badge-COE-ORBX.js";import{T as i}from"./Text-QCKh6xRo.js";import{L as m}from"./Label-CvAjEv-1.js";import{C as g,M as d}from"./MenuItem-wH73rdaM.js";import"./ContextMenuTrigger-Dvm-yCzh.js";import"./ContextMenuSection-COxyh1Te.js";import"./flowComponent-CBkS5ERE.js";import{u as h}from"./useOverlayController-BctbVInN.js";import{S as f}from"./StoryBackground-Da6n33FO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-BbnjmOHy.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./Button-Bk9_EddI.js";import"./utils-BuEQZICT.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-CDzJz977.js";import"./useStatic-DVJZwH2g.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./Popover-fmzRw_jU.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./Dialog-vhqDwDKM.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./Switch-DFBGVKQx.js";import"./useFieldComponent-B7HNchXP.js";import"./useToggleState-CL5C9z_j.js";import"./useFormReset-2RZyXaKm.js";import"./OverlayTrigger-B8jwjQmG.js";const Ie={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Te=["Default","WithScope","WithOnPress","WithOnClose","WithContextMenu"];export{t as Default,a as WithContextMenu,p as WithOnClose,n as WithOnPress,s as WithScope,Te as __namedExportsOrder,Ie as default};
