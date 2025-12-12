import{j as e,R as j}from"./iframe-Cun9xEvG.js";import{b as S,B as o}from"./Badge-EPhAECZq.js";import{T as s}from"./Text-46CNKReN.js";import{L as t}from"./Label-TZZHTJSd.js";import{e as b,f as h}from"./TimeField-BGefC99t.js";import"./FileCardList-DwvB7YNF.js";import"./Section-DpYYQ4ld.js";import{u as C}from"./Popover-5hFlpbJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cd0rcWBc.js";import"./mergeRefs-BXtjeRnl.js";import"./index-Bf8buJG0.js";import"./Button-Be9JkCpV.js";import"./IconWarning-CPVRn4jW.js";import"./remote-BgISxXks.js";import"./LoadingSpinner-BiAtSGtu.js";import"./Button-D2k4TCQe.js";import"./utils-S5M_7oVk.js";import"./ProgressBar-c76aO61i.js";import"./Hidden-BJOAuytn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CTkEoG47.js";import"./useFocusRing-DD5EcUfr.js";import"./useFocusable-C8NsMmkc.js";import"./useLocalizedStringFormatter-BWJekubh.js";import"./browser-BgnuhwhB.js";import"./EmulatedBoldText-2bJ0isTU.js";import"./Accordion-Cdni6XcU.js";import"./dynamic-Bm0M0-O-.js";import"./ActionGroup-CgFwCvu8.js";import"./Alert-4wPBFwsv.js";import"./AlertIcon-BYwbyTte.js";import"./AlertBadge-CvD56Z7r.js";import"./Align-B9GNgo2e.js";import"./Collection-Tg2L3ks0.js";import"./CollectionBuilder-CdiRFq1v.js";import"./TableFooterRow-003QdVoj.js";import"./SkeletonText-CmWS1NKM.js";import"./RSPContexts-DVf4IkrV.js";import"./SelectionIndicator-MYqiPo_p.js";import"./context-DiBM2o-y.js";import"./Separator-CR4CvoS_.js";import"./useStatic-fkJ5iy3g.js";import"./Avatar-JpJgtP-K.js";import"./AvatarStack-CbaO4bzk.js";import"./BigNumber-BNm1-qZc.js";import"./Breadcrumb-DoQvOC0E.js";import"./Link-C9__0RQZ.js";import"./Heading-Bz0fxZKP.js";import"./Legend-C6YyRaO2.js";import"./Color-BXoGRGl8.js";import"./Content-dmvs88C5.js";import"./OverlayTrigger-DKCqdxLC.js";import"./ContextualHelpTrigger-2IHKY-I1.js";import"./CounterBadge-uqhuCsZh.js";import"./DonutChart-Cj-oFqap.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CpOeYIRy.js";import"./Header-xba_U-tz.js";import"./Image-8vZX0aCN.js";import"./Initials-BQFGk1hN.js";import"./InlineCode-Cy0P-BMe.js";import"./PopoverTrigger-Cx-yVyab.js";import"./Separator-DEE4s9X8.js";import"./Message-Dm2-PPq3.js";import"./MessageSeparator-5qm7ji2U.js";import"./NavigationGroup-yrrTCNaJ.js";import"./Notification-CPdts9a5.js";import"./NotificationProvider-J10LZgU2.js";import"./ProgressBar-BnIkde9y.js";import"./Rating-Cz8jym0U.js";import"./Skeleton-D4LiAhc6.js";const Ne={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const qe=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,c as WithOnPressAndOnClose,a as WithScope,i as WithScopeAndOnClose,qe as __namedExportsOrder,Ne as default};
