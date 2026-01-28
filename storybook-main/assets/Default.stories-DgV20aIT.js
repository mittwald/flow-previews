import{j as e,R as j}from"./iframe-lb0QDBc2.js";import{b as S,B as o}from"./Badge-CCKq8BCi.js";import{T as s}from"./Text-Bvo-yLEA.js";import{L as n}from"./Label-DP_lb_cz.js";import{C as b,M as h}from"./ContextMenu-Dv-q2EAf.js";import"./ContextMenuTrigger-CmiSzFi3.js";import"./ContextMenuSection-BhdaIGz3.js";import{u as C}from"./useOverlayController-DrUwu9jx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./Button-juKgyftR.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./LoadingSpinner-D-Hn99XA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./context-DKVhGweU.js";import"./Button-D3ym-GoV.js";import"./utils-r2dAqIcX.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DBnvm8X4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgYa4G9K.js";import"./useFocus-B48NrLMU.js";import"./useFocusRing-J18h0CnC.js";import"./useFocusable-BRnBN5zK.js";import"./browser-D6xfswL2.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./Label.module-CUYTf9Jc.js";import"./Switch-CjVVIn_n.js";import"./useFieldComponent-DzHSa8uO.js";import"./useToggleState-CuJBCnJp.js";import"./useFormReset-BIwT2nL6.js";import"./useControlledState-BS6Up44I.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./Dialog-21JmjHkj.js";import"./RSPContexts-YTE8c3lP.js";import"./OverlayArrow-CyZLGayb.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./Action-4cKKicYt.js";import"./context-C_yF8yzC.js";import"./useStatic-C9kOien4.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./dynamic-oimbFEy9.js";import"./Popover-C9ioIy3o.js";import"./OverlayContextProvider-kVRdTbI-.js";import"./OverlayTrigger-DJa2X_ri.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
