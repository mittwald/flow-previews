import{j as e,R as j}from"./iframe-BTP_Z9Sf.js";import{b as S,B as o}from"./Badge-CigGtrjh.js";import{T as s}from"./Text-Cq5MQ8wu.js";import{L as n}from"./Label-Cu7NRaqa.js";import{C as b,M as h}from"./MenuItem-wWijrMD7.js";import"./ContextMenuTrigger-CpPTP_VY.js";import"./ContextMenuSection-De_H5Wjl.js";import{u as C}from"./useOverlayController-BkO0277u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./Button-er0RkDrE.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./Button-DgJw7YNb.js";import"./utils-DP1LA6WE.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BnZLj0Nc.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./browser-eyJ8FPIK.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./Label.module-CUYTf9Jc.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./useStatic-kc5QKD7I.js";import"./getActionGroupSlot-V7kcySO7.js";import"./dynamic-LcJrXyvC.js";import"./Popover-6hqQcqfJ.js";import"./OverlayContextProvider-qUQ07J32.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./Switch-nTWd4UMx.js";import"./useFieldComponent-Da-vFXDP.js";import"./useToggleState-BvD2wu9z.js";import"./useFormReset-Bo1Ib9da.js";import"./OverlayTrigger-B5XE0ce4.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
