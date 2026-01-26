import{j as e,R as j}from"./iframe-DqoQz6HB.js";import{b as S,B as o}from"./Badge-CDiBI9Gq.js";import{T as s}from"./Text-CYiIq5CT.js";import{L as n}from"./Label-Bciq9MXz.js";import{C as b,M as h}from"./ContextMenu-COPqvDsm.js";import"./ContextMenuTrigger-Cde5B6R6.js";import"./ContextMenuSection-Bjk6b3v9.js";import{u as C}from"./useOverlayController-rufURv7M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./index-BvQFjuk4.js";import"./Button-TzxOXnkY.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./LoadingSpinner-DERXhFNJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./context-BlYILeGE.js";import"./Button-CY3jZXsw.js";import"./utils-OqNg9teq.js";import"./ProgressBar-C57Cfwin.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CCbYr5fG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./browser-CwaVi4T-.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./Text-78LD2Kdh.js";import"./Label.module-CUYTf9Jc.js";import"./Switch-Cdvr7Xo1.js";import"./useFieldComponent-X8YFoMoP.js";import"./useToggleState-ovMXZ6WD.js";import"./useFormReset-BpNr6OOM.js";import"./useControlledState-CN54iNBt.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./Dialog-D_XSL9SB.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./Action-DgtVbOuJ.js";import"./context-DlAFKpyv.js";import"./useStatic-DhkP1cmF.js";import"./getActionGroupSlot-6JauDhjj.js";import"./dynamic-uyvUxMs1.js";import"./Popover-Cy3iouQi.js";import"./OverlayContextProvider-D9Ss5hpb.js";import"./OverlayTrigger-DI9kGsc2.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
