import{j as e,R as j}from"./iframe-BBX1MRm7.js";import{b as S,B as o}from"./Badge-BOYoF-1L.js";import{T as s}from"./Text-bZjB6G95.js";import{L as n}from"./Label-rzq6PBW8.js";import{C as b,M as h}from"./MenuItem-DjAOAz9U.js";import"./ContextMenuTrigger--sg0Xb-F.js";import"./ContextMenuSection-C-rpOjJk.js";import{u as C}from"./useOverlayController-UE1-I0TE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./index-CaVys9ny.js";import"./Button-BqkPfHUM.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./LoadingSpinner-D7vBft_f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./context-CZSumH6g.js";import"./Button-BJia7Ggt.js";import"./utils-BavrKavc.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C19iJYYn.js";import"./useFocus-CEW7w8cP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocusable-DP1OjJqD.js";import"./browser-94--rh0I.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./Label.module-CUYTf9Jc.js";import"./Action-NfMU4pZQ.js";import"./context-CbNZJEnz.js";import"./useStatic-eT6_SwdI.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./dynamic-CGdtYp29.js";import"./Popover-DfKYmgoY.js";import"./OverlayContextProvider-CeB4MDIB.js";import"./Dialog-DxFT1h3e.js";import"./RSPContexts-Bzvj4RyS.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useControlledState-hVcOsExM.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./useCollator-BBRvdoV2.js";import"./FocusScope-geYyY5OG.js";import"./VisuallyHidden-B0NnPUX1.js";import"./Switch-Do-NLtXd.js";import"./useFieldComponent-B_qWTKJx.js";import"./useToggleState-DCsKB4PK.js";import"./useFormReset--Sx8IrxJ.js";import"./OverlayTrigger-D5NXWXDN.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
