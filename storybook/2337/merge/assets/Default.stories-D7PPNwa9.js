import{j as e,R as j}from"./iframe-DepdzLEL.js";import{b as S,B as o}from"./Badge-kSYLfMI-.js";import{T as s}from"./Text-DQklyFH_.js";import{L as n}from"./Label-CprHQXm7.js";import{C as b,M as h}from"./MenuItem-BAI8GON0.js";import"./ContextMenuTrigger-QCL_t8W6.js";import"./ContextMenuSection-DuMO6oHS.js";import"./flowComponent-fKj6y8ty.js";import{u as C}from"./useOverlayController-Br9LJhfN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-CNIywMH8.js";import"./IconWarning-DzJyip11.js";import"./remote-BQ4RO_kW.js";import"./LoadingSpinner-CFbq72U2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./context-BDIAQ50e.js";import"./index-BsHBlgok.js";import"./index-QBVvmMGX.js";import"./Button-BTig9cwD.js";import"./utils-7tdA0jB4.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B2Boz_gi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqHqHS4f.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useFocusable-Cun53ew4.js";import"./browser-DxvLCkxH.js";import"./EmulatedBoldText-MhUupop4.js";import"./Text-CHX4WGB5.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-CxGdjV-j.js";import"./useStatic-D2N_z3eO.js";import"./getActionGroupSlot-DngwkT4-.js";import"./dynamic-DyShJQHT.js";import"./Popover-D-HE80pU.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./Dialog-pPKxFXOM.js";import"./RSPContexts-C4BguXQB.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./VisuallyHidden-msEuPEko.js";import"./Switch-CTtGRWsg.js";import"./useFieldComponent-PSzBC9V7.js";import"./useToggleState-3lRe43ig.js";import"./useFormReset-BQp6BNc9.js";import"./OverlayTrigger-BeYMVPU4.js";const Me={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Oe=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Oe as __namedExportsOrder,Me as default};
