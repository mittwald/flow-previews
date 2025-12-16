import{j as e,R as j}from"./iframe-DlUIOFNy.js";import{b as S,B as o}from"./Badge-DdMnAK3G.js";import{T as s}from"./Text-D41gwIdF.js";import{L as t}from"./Label-CGwVPH1O.js";import{C as b,M as h}from"./MenuItem-Badeb0vl.js";import{u as C}from"./useOverlayController-BohxaX_S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./Button-Dl6JLVXM.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Button-Dr7P9UDM.js";import"./utils-D5WuX1D5.js";import"./ProgressBar-D4eaRwno.js";import"./Label-BWWfC27r.js";import"./Hidden-DbzQNSr6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./IconClose-3AFdREu1.js";import"./browser-CY6W5xXv.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./Label.module-CUYTf9Jc.js";import"./Action-DzYQUuQL.js";import"./useStatic-DqJu_u90.js";import"./getActionGroupSlot-WDsmZJCA.js";import"./context-C1nEnAeo.js";import"./dynamic-C-FseJcp.js";import"./lib-90ocxLs-.js";import"./Popover-Dfl3inpo.js";import"./OverlayContextProvider-Dbmlj_yb.js";import"./Dialog-DGrRsJNk.js";import"./RSPContexts-C5mxBSfV.js";import"./OverlayArrow-s4mQFeA0.js";import"./useControlledState-UrSorjA0.js";import"./Collection-D_tRRyiE.js";import"./CollectionBuilder-BlmCb_Ne.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./Separator-DsGP9-jg.js";import"./SelectionManager-d7GSdIRe.js";import"./useEvent-D0ZZFMyT.js";import"./useCollator-eBEmYcKu.js";import"./FocusScope-DE5dWl6n.js";import"./VisuallyHidden-DYOAHIEH.js";import"./IconCheckboxEmpty-BTYyU-Jf.js";import"./IconRadioOn-DjrLrKpN.js";import"./Switch-FB-qc6AA.js";import"./IconCheck-BP1aOYb9.js";import"./useFieldComponent-BCd2OtQE.js";import"./useToggleState-C8b8cMvf.js";import"./useFormReset-Bdg2NgY2.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ae=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Ae as __namedExportsOrder,De as default};
