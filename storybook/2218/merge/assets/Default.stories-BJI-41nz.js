import{j as e,R as j}from"./iframe-VTkEMv55.js";import{b as S,B as o}from"./Badge-DZZemTZ2.js";import{T as s}from"./Text-DlbRcSah.js";import{L as n}from"./Label-DwQEy05E.js";import{C as b,M as h}from"./MenuItem-BPSEa1n5.js";import"./ContextMenuTrigger-DZUBcdZH.js";import"./ContextMenuSection-CWe96eWW.js";import{u as C}from"./useOverlayController-BPG62MgI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./index-D_xlAiD1.js";import"./Button-B9lvy9yg.js";import"./IconWarning-D408DR62.js";import"./remote-pRnbNSGs.js";import"./LoadingSpinner-BWeGH-7c.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./context-BVezW8pN.js";import"./Button-BKfoJr1S.js";import"./utils-DPKXOmt2.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cb2XrqKT.js";import"./useFocus-JgmAf8eL.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./browser-_Qir5MkB.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./Text-DB2BTtqM.js";import"./Label.module-CUYTf9Jc.js";import"./Action-DV-QBt8x.js";import"./context-CeKSAP77.js";import"./useStatic-OVy-y77u.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./dynamic-BSd9oB0r.js";import"./Popover-DMia4ia0.js";import"./OverlayContextProvider-CbIHT6gb.js";import"./Dialog-Qb8RaXBy.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./VisuallyHidden-DjbItwE4.js";import"./Switch-BaU8B2ak.js";import"./useFieldComponent-CicShoBh.js";import"./useToggleState-5L8hNIKq.js";import"./useFormReset-DRm0nHwN.js";import"./OverlayTrigger-DkpyXFVa.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      Value
    </Badge>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  globals: {
    backgrounds: "dark"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>,
  globals: {
    backgrounds: "light"
  }
}`,...u.parameters?.docs?.source}}};const We=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,We as __namedExportsOrder,Oe as default};
