import{j as e,R as j}from"./iframe-DjKJp4LH.js";import{b as S,B as o}from"./Badge-COyJNId2.js";import{T as s}from"./Text-DIX_PQ8a.js";import{L as n}from"./Label-CIoe3s2x.js";import{C as b,M as h}from"./ContextMenu-Bi4-Rrdr.js";import"./ContextMenuTrigger-bYBn2D1O.js";import"./ContextMenuSection-D6Byc7PS.js";import{u as C}from"./useOverlayController-CN88K5mF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./index-PXjpOTa6.js";import"./Button-BDEZ1Pgg.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./LoadingSpinner-pyPoMdb7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./context-CaWPG6rd.js";import"./Button-DheLTGmH.js";import"./utils-DyC1AhIW.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel--MzsjFNv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cba7eTZL.js";import"./useFocus-DfQL19Qh.js";import"./useFocusRing-BGVhnkul.js";import"./useFocusable-Cypk5WsB.js";import"./browser-DP-AFXYC.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./Label.module-CUYTf9Jc.js";import"./Switch-mP0ECEeM.js";import"./useFieldComponent-7yFtRUym.js";import"./useToggleState-DZbD7mMm.js";import"./useFormReset-BtBZQ9D7.js";import"./useControlledState-B7AKSDvs.js";import"./VisuallyHidden-BM-dzb4f.js";import"./Dialog-B6ze-qTj.js";import"./RSPContexts-BW0AZj1S.js";import"./OverlayArrow-NBjjGcXc.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./Action-CS8Seurr.js";import"./context-BJ5dxW4L.js";import"./useStatic-DSbbnRPw.js";import"./getActionGroupSlot-BcFDPTef.js";import"./dynamic-Cwgd_SYw.js";import"./Popover-DZdPgP5E.js";import"./OverlayContextProvider-x3mZph6J.js";import"./OverlayTrigger-JCWGSatN.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
