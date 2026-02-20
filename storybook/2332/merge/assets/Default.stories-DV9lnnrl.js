import{j as e,R as j}from"./iframe-B-dt22EB.js";import{b as S,B as o}from"./Badge-CfeEyY0M.js";import{T as s}from"./Text-BCqKdXYs.js";import{L as n}from"./Label-DPQ9pprY.js";import{C as b,M as h}from"./MenuItem-DE2PUUyS.js";import"./ContextMenuTrigger-CqEI6DDS.js";import"./ContextMenuSection-3gHTEPd_.js";import"./flowComponent-etctvabC.js";import{u as C}from"./useOverlayController-CgZod_MY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-Cfktl1nd.js";import"./IconWarning-BbozUbXF.js";import"./remote-D6Q14pEz.js";import"./LoadingSpinner-ISzATTs8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./Button-CjYcjBnT.js";import"./utils-DoxtMd58.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKpYilGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgYKrzfD.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./useFocusable-C0Z9ZNeY.js";import"./browser-CJi_ki0i.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./Text-vBmBwiIT.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-DMUImU48.js";import"./useStatic-CMEoTlaq.js";import"./getActionGroupSlot-DUUveJ77.js";import"./dynamic-Ci7OcZKZ.js";import"./Popover-52nhHqtt.js";import"./OverlayContextProvider-COc2hxmN.js";import"./Dialog-C7TrFuKD.js";import"./RSPContexts-pIsu_52Z.js";import"./OverlayArrow-Drn8uqTb.js";import"./useControlledState-jk51FjyI.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./Switch-N2fkKqP1.js";import"./useFieldComponent-D2j3Q6-m.js";import"./useToggleState-DTz9iBTS.js";import"./useFormReset-BwldCtpD.js";import"./OverlayTrigger-MgjR2AzX.js";const Me={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
