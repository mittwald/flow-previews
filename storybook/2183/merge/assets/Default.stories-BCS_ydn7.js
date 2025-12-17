import{j as e,R as j}from"./iframe-Eg8-wFCR.js";import{b as S,B as o}from"./Badge-CA5DgsYE.js";import{T as s}from"./Text-cFe2oWr9.js";import{L as t}from"./Label-1lc8IvKU.js";import{C as b,M as h}from"./MenuItem-C9EmNEoJ.js";import{u as C}from"./useOverlayController-D2lpnQmk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./Button-bx6caw1c.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./Button-DrB4xT8J.js";import"./utils-DpUmHG9o.js";import"./ProgressBar-BDU9deru.js";import"./Label-ayphvmky.js";import"./Hidden-CPM5AGUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./IconClose-REzIHW0P.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./Label.module-CUYTf9Jc.js";import"./Action-DV4LdD_S.js";import"./useStatic-BFryEnnL.js";import"./getActionGroupSlot-Dz1zi_Ez.js";import"./context-W5o617c2.js";import"./dynamic-DS6EBQ3r.js";import"./lib-90ocxLs-.js";import"./Popover-k3YNshBd.js";import"./OverlayContextProvider-BxKFxtc4.js";import"./Dialog-BIruH5Sw.js";import"./RSPContexts-ajqDrbBU.js";import"./OverlayArrow-CDko6Bkl.js";import"./useControlledState-B4vwiKN6.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useEvent-Cv81pFWJ.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";import"./IconCheckboxEmpty-D7ndyRPz.js";import"./IconRadioOn-BemFTLqF.js";import"./Switch-96cTbo6Y.js";import"./IconCheck-3BTsaJJu.js";import"./useFieldComponent-CePCnb_B.js";import"./useToggleState-CdAii31f.js";import"./useFormReset-BOxw_xUS.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
