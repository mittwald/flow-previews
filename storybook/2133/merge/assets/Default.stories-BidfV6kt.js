import{j as e,R as j}from"./iframe-tJv_x5rY.js";import{f as S,B as o,u as b,g as C,h}from"./Modal-C5nUCLYg.js";import{T as s}from"./Text-Dguu0ahS.js";import{L as t}from"./Label-RjTzOsfv.js";import"./FileCardList-xvc84fPF.js";import"./Section-C3zFkOR2.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-D0IhEVDX.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./index-zslH_nwp.js";import"./context-B6V5mJe_.js";import"./Button-DANMsRvu.js";import"./utils-CzbxkoY8.js";import"./ProgressBar-DMZ3QrgP.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DzrJfCbv.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./RSPContexts-B20KOh4s.js";import"./Collection-avSZv3ZD.js";import"./CollectionBuilder-SdndXulF.js";import"./SelectionIndicator-tJZm1Uu-.js";import"./Separator-PZWkpAPz.js";import"./browser-TdwBVE6G.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./useStatic-ChHmkVJf.js";import"./LoadingSpinner-Bcrzivl8.js";import"./IconWarning-3nJf9pka.js";import"./Button-BFrhyxcx.js";import"./LayoutCard-FaDrJ9hh.js";import"./Accordion-BkjCzJbI.js";import"./ActionGroup-ofmp5p0b.js";import"./getActionGroupSlot-Bx9-2150.js";import"./Alert-BSKDhqn2.js";import"./AlertIcon-BmIRgy9X.js";import"./AlertBadge-DwpbJvbe.js";import"./Align-CwffRYKZ.js";import"./Avatar-DCjhmqbI.js";import"./AvatarStack-Dk_NcqSD.js";import"./BigNumber-CVotIBh9.js";import"./Breadcrumb-CqycGyzj.js";import"./Link-CNQmH85M.js";import"./Heading-DBV7hltH.js";import"./Legend-DwZKxd2C.js";import"./Color-DCrxZZxn.js";import"./TableFooterRow-CTXom9Ef.js";import"./SkeletonText-D85nAxtU.js";import"./Content-B6i-pyoJ.js";import"./CounterBadge-C7SQltDy.js";import"./DonutChart-BF3qOkbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5HLqNns.js";import"./Header-DsWh8L6x.js";import"./Image-BsEx4Gyw.js";import"./Initials-WnEx4zz5.js";import"./InlineCode-B62lvli0.js";import"./Separator-CYyKLl0S.js";import"./MessageSeparator-DELmev1y.js";import"./NavigationGroup-DtKUP1MG.js";import"./Notification-kUETDS4p.js";import"./NotificationProvider-Cl16zYR0.js";import"./ControlledNotification-Bf-cHYr4.js";import"./ProgressBar-4Q8djMZo.js";import"./Rating-BBipw1Rp.js";import"./Skeleton-DtEBxlD8.js";import"./EmulatedBoldText-BtPGtFYn.js";const ve={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=b("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(C,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ee=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,c as WithOnPressAndOnClose,a as WithScope,i as WithScopeAndOnClose,Ee as __namedExportsOrder,ve as default};
