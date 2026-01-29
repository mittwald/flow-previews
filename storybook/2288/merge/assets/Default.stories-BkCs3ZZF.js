import{j as e,R as j}from"./iframe-CdVpWnc8.js";import{b as S,B as o}from"./Badge-DiNx5ulU.js";import{T as s}from"./Text-KDInGMjK.js";import{L as n}from"./Label-CQQzXuOB.js";import{C as b,M as h}from"./MenuItem-bNR6SRDN.js";import"./ContextMenuTrigger-Cr6GC5zX.js";import"./ContextMenuSection-CBva2Bvf.js";import{u as C}from"./useOverlayController-BFg7GYyz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./Button-BYd_Eo9F.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./Button-skPPmItL.js";import"./utils-ClIic5nH.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./Label.module-CUYTf9Jc.js";import"./Action-eeXzbiuZ.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./dynamic-Dpbpwd3I.js";import"./Popover-CKAofXvl.js";import"./OverlayContextProvider-CG_F_ZAP.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./Switch-BMkIUrjc.js";import"./useFieldComponent-pH8UQhzW.js";import"./useToggleState-5on0PfsK.js";import"./useFormReset-D5EHipFr.js";import"./OverlayTrigger-DZLdxrfo.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
