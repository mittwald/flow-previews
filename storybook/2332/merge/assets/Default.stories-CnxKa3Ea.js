import{j as e,R as j}from"./iframe-CDsKaBRg.js";import{b as S,B as o}from"./Badge-BsgGUhwZ.js";import{T as s}from"./Text-BC05_GH2.js";import{L as n}from"./Label-D5EyKl2G.js";import{C as b,M as h}from"./MenuItem-BKQBPm9F.js";import"./ContextMenuTrigger-CsUJdiI4.js";import"./ContextMenuSection-BtR3HXLs.js";import"./flowComponent-CuU7ZQj2.js";import{u as C}from"./useOverlayController-B7-u35xe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-DrVGXfuQ.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./LoadingSpinner-COR3vr_l.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./Button-BshsCdLp.js";import"./utils-D_LVRUjq.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dan0bPtD.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-Jyp25YdZ.js";import"./useStatic-B_kqalTp.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./dynamic-CtOpUuGK.js";import"./Popover-EJFu47Qz.js";import"./OverlayContextProvider-C6_d12zo.js";import"./Dialog-C4SGct0D.js";import"./RSPContexts-B8A9jPpa.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";import"./Switch-DhWZ-yCv.js";import"./useFieldComponent-CC8SHRwT.js";import"./useToggleState-CldrOvnp.js";import"./useFormReset-CxPQXG_K.js";import"./OverlayTrigger-CHFi1X1A.js";const Me={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
