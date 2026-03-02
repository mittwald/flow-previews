import{j as e,R as j}from"./iframe-gtGtPSGX.js";import{b as S,B as o}from"./Badge-Djt2sREs.js";import{T as s}from"./Text-QzTdDFQg.js";import{L as n}from"./Label-ezDYxAqR.js";import{C as b,M as h}from"./MenuItem-BfrZ4vbA.js";import"./ContextMenuTrigger-D1jiwTPQ.js";import"./ContextMenuSection-CDCzjc8m.js";import"./flowComponent-BXctKB_l.js";import{u as C}from"./useOverlayController-ljUuhRV3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-CvhKZeTQ.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./LoadingSpinner-DnqSg6_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./Button-Bw2A7mA1.js";import"./utils-1b_KoCGs.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ub7fcIm5.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-C6WY1Daf.js";import"./useStatic-CcUMZ2Ma.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./dynamic-CLlIyxqz.js";import"./Popover-C2tFcXbP.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./Dialog-_BBlF040.js";import"./RSPContexts-L8MWaJ6n.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./Switch-cVJrthqZ.js";import"./useFieldComponent-BaX-M8wV.js";import"./useToggleState-CNroCGEj.js";import"./useFormReset-TvJ_gIa-.js";import"./OverlayTrigger-CmRNrsxN.js";const Me={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
