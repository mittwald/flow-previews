import{j as e,R as j}from"./iframe-CLDMeli7.js";import{b as S,B as o}from"./Badge-Dbg7GgT4.js";import{T as s}from"./Text-CP7Ip6pC.js";import{L as n}from"./Label-B6NnPYhK.js";import{C as b,M as h}from"./MenuItem-C6vt10dx.js";import"./ContextMenuTrigger-44VHRqHU.js";import"./ContextMenuSection-BNGygWDz.js";import{u as C}from"./useOverlayController-CfvFaHFD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./Button-BzVheXKP.js";import"./IconWarning-p4W4x8Yn.js";import"./remote-B4IT0gy2.js";import"./LoadingSpinner-DoDeCRPK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./context-CJeO-2nS.js";import"./Button-DkOX4zii.js";import"./utils-CeJP1xg2.js";import"./ProgressBar-DFW8NzQ8.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5-cRdm9R.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useFocusable-B-HKy_Nj.js";import"./browser-DchrXhwC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./Text-Doo8ujkC.js";import"./Label.module-CUYTf9Jc.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./dynamic-CQUXTbxb.js";import"./Popover-PjJ853r6.js";import"./OverlayContextProvider-D58HtU5y.js";import"./Dialog-BqnORwX4.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./VisuallyHidden--NZ_Ses-.js";import"./Switch-oaPEra7E.js";import"./useFieldComponent-BtEJhhry.js";import"./useToggleState-BJLDzOzG.js";import"./useFormReset-BkQU1ELB.js";import"./OverlayTrigger-BIW3wf-9.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
