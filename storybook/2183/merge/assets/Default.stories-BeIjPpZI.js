import{j as e,R as j}from"./iframe-UtMdsYXa.js";import{b as S,B as o}from"./Badge-7DP0N5SI.js";import{T as s}from"./Text-TG940Z8h.js";import{L as t}from"./Label-CXp4zhoD.js";import{C as b,M as h}from"./MenuItem-Dx9E60BR.js";import{u as C}from"./useOverlayController-BCXLE78B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./index-BrcrHHEG.js";import"./Button-pSxy78IN.js";import"./IconChevronDown-DitnVNWB.js";import"./remote-YAokn8An.js";import"./IconX-DVdUYCtj.js";import"./IconCheck-Bw85iPm6.js";import"./LoadingSpinner-AaC_xRXA.js";import"./ariaLive-K_SPQRtg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./context-BpPaGDcf.js";import"./Button-DZZrikYU.js";import"./utils-43m9YPYy.js";import"./ProgressBar-BxQgVB3L.js";import"./Label-GMp5wGdV.js";import"./Hidden-Bs3uTZuz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtsciHmS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NZb7prl9.js";import"./useFocus-BaPf3vXr.js";import"./useFocusRing-C5G5IFoS.js";import"./useFocusable-DoTzQtzG.js";import"./IconClose-D5SksBt0.js";import"./browser-DFxdAZBn.js";import"./EmulatedBoldText-CWBgkHDb.js";import"./Text-3HTz8ZLb.js";import"./Label.module-CUYTf9Jc.js";import"./Action-BA-MmHGl.js";import"./useStatic-CvZMYmSw.js";import"./getActionGroupSlot-COea1xII.js";import"./context-BLALRgjO.js";import"./dynamic-JAnuGjI7.js";import"./lib-90ocxLs-.js";import"./Popover-ClMUWpbW.js";import"./OverlayContextProvider-WN6o_2cy.js";import"./Dialog-BGnO5-Kp.js";import"./RSPContexts-CAfmMSBB.js";import"./OverlayArrow-DHpPSdaa.js";import"./useControlledState-DYYNjqGW.js";import"./Collection-5zvqan3L.js";import"./CollectionBuilder-D_G3_Vuz.js";import"./SelectionIndicator-D63gvTNu.js";import"./Separator-BuVWMkAV.js";import"./SelectionManager-DB_XnTm4.js";import"./useEvent-CJ7SBUWT.js";import"./useCollator-BSunnwIT.js";import"./FocusScope-ZZQ9tzAD.js";import"./VisuallyHidden-DNcxVgpY.js";import"./IconCheckboxEmpty-Dm3YqqLO.js";import"./IconRadioOn-CmHJXNMK.js";import"./Switch-lgT8Oibx.js";import"./IconCheck-Cokct5fz.js";import"./useFieldComponent-CylG0yj1.js";import"./useToggleState-Du7GqUPH.js";import"./useFormReset-ZjFHD53Q.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
