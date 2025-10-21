import{j as e,R as j}from"./iframe-CPZmCQj-.js";import{b as S,B as o}from"./Badge-Evcgq9dM.js";import{T as s}from"./Text-cGw-MBFK.js";import{L as t}from"./Label-Cl3ovliO.js";import{C as b,M as h}from"./MenuItem-B0niEcq2.js";import"./ContextMenuTrigger-CC_b7EJi.js";import"./ContextMenuSection-Dto6kOnn.js";import{u as C}from"./useOverlayController-DCVLgcvS.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./Button-CO0ZKbGC.js";import"./IconWarning-BHYwQlMQ.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./Button-BLjAzLtk.js";import"./utils-DbTuSxgD.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./Label.module-CUYTf9Jc.js";import"./Action-C3sEJruT.js";import"./context-7pI23nLQ.js";import"./useStatic-BEtxpUKF.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./dynamic-C0WBJwRj.js";import"./Popover-B5_3Py3v.js";import"./OverlayContextProvider-Bz_eXqqG.js";import"./Dialog-DJw1jmu7.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./ClearPropsContext-DZV6h8aR.js";import"./Switch-DWBf4OAI.js";import"./useFieldComponent-ZdrCImE8.js";import"./react-children-utilities-BpPrmtLj.js";import"./useMakeFocusable-BIcdpqxH.js";import"./useToggleState-CgU4ubbL.js";import"./useFormReset-BZ0LqTvh.js";import"./OverlayTrigger-Cze0ok7i.js";import"./ControlledNotification-EmmTuegF.js";const Ie={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const De=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,De as __namedExportsOrder,Ie as default};
