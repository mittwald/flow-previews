import{j as e,R as j}from"./iframe-GtWYOLNc.js";import{b as S,B as o}from"./Badge-BYwAg8xQ.js";import{T as s}from"./Text-Bh_VtmGj.js";import{L as t}from"./Label-rRCJof1T.js";import{C as b,M as h}from"./MenuItem-DRICh8aJ.js";import"./ContextMenuTrigger-DS8mWOZA.js";import"./ContextMenuSection-BqJoKa5n.js";import{u as C}from"./useOverlayController-Cm_PeV9X.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./index-Do7K3gX4.js";import"./Button-DAMH2RQe.js";import"./IconWarning-D3qu7dXh.js";import"./LoadingSpinner-BgxzSWV-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./context-D40YBGtd.js";import"./Button-DAFfpCNE.js";import"./utils-DD5Sc9KY.js";import"./ProgressBar-CdTHAJ2Y.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3Z_0YqL.js";import"./useFocus-DFp-sRZK.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./browser-Dfdmz1Vs.js";import"./EmulatedBoldText-CB08elGP.js";import"./Text-CjcFKgn5.js";import"./Label.module-CUYTf9Jc.js";import"./Action-DgPdZSGQ.js";import"./context-B79p2l6c.js";import"./useStatic-BUau0uD4.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./dynamic-D_-LYO4W.js";import"./Popover-BloSQfLN.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./Dialog-E17SkaPF.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./Switch-B0GEED2g.js";import"./useFieldComponent-CFSDwBJf.js";import"./react-children-utilities-BE-u8eGk.js";import"./useMakeFocusable-6t1tYcWi.js";import"./useToggleState-YV7abEAU.js";import"./useFormReset-C8pOBnDM.js";import"./OverlayTrigger-C3VeFBdc.js";import"./ControlledNotification-YDt7-Pno.js";const Ie={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
