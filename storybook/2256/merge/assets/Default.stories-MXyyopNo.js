import{j as e,R as j}from"./iframe-D2BYf5-g.js";import{b as S,B as o}from"./Badge-DqvMYrvR.js";import{T as s}from"./Text-D6N8Heh9.js";import{L as n}from"./Label-DC-_uf6W.js";import{C as b,M as h}from"./ContextMenu-Cn4VIt-t.js";import"./ContextMenuTrigger-DJASepmI.js";import"./ContextMenuSection-CMECFzdV.js";import{u as C}from"./useOverlayController-CdWYn5_T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./index-Bu8wVR5j.js";import"./Button-CDOjETwV.js";import"./IconWarning-BvAkc2LD.js";import"./remote-C9AuEG_9.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./context-DWMR9XE1.js";import"./Button-DuBdlowL.js";import"./utils-DHZ51AFQ.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtwWh7yV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wVuL2i-g.js";import"./useFocus-ORvRv07U.js";import"./useFocusRing-DGJLUvQM.js";import"./useFocusable-BL0hS6to.js";import"./browser-CRHYBb-w.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./Label.module-CUYTf9Jc.js";import"./Switch-BTiF-pTz.js";import"./useFieldComponent-BFOdLrJ8.js";import"./useToggleState-B2YKD4zK.js";import"./useFormReset-Dqz1EECq.js";import"./useControlledState-fyUF26L0.js";import"./VisuallyHidden-DcwEctQc.js";import"./Dialog-DmGaLGl4.js";import"./RSPContexts-Jo-zwAyH.js";import"./OverlayArrow-BMVG_KsN.js";import"./Collection-DwLf4j5H.js";import"./CollectionBuilder-BdJbggOI.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./Separator-C-Im4RIH.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./Action-DS_mMLiR.js";import"./context-DatNKEIi.js";import"./useStatic-DA3fGq-b.js";import"./getActionGroupSlot-DYtozdko.js";import"./dynamic-DsmNOmMb.js";import"./Popover-xYzPuiR6.js";import"./OverlayContextProvider-ddiXR-PL.js";import"./OverlayTrigger-BR1gsJaD.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
