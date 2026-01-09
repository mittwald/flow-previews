import{j as e,R as j}from"./iframe-tI_lG94_.js";import{b as S,B as o}from"./Badge-DQj0atGW.js";import{T as s}from"./Text-DDIuCQxA.js";import{L as n}from"./Label-CdVUwStZ.js";import{C as b,M as h}from"./MenuItem-Dmw5_dv8.js";import"./ContextMenuTrigger-6yymgrse.js";import"./ContextMenuSection-Co6pbj1l.js";import{u as C}from"./useOverlayController-B_c7Bk6_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./Button-WUI-ZJ9l.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./LoadingSpinner-KbaLfraT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./Button-EHR8zEQX.js";import"./utils-bmh-HeLH.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./Label.module-CUYTf9Jc.js";import"./Action-CkhZi8kw.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./getActionGroupSlot-DPvye52P.js";import"./dynamic-DqOiE30k.js";import"./Popover-DkoOxFI-.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./Dialog-Bo5p_Zqr.js";import"./RSPContexts-C1ceWNax.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./Switch-BFeIDSHe.js";import"./useFieldComponent-_Dyiwxtg.js";import"./useToggleState-BjZuw9A6.js";import"./useFormReset-LNt8buNd.js";import"./OverlayTrigger-CuZ4GO5W.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
