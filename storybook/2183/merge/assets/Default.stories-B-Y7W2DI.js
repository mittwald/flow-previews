import{j as e,R as j}from"./iframe-CLIUsYfM.js";import{b as S,B as o}from"./Badge-wa7Q7exv.js";import{T as s}from"./Text-D2QQWQR9.js";import{L as t}from"./Label-BWOWtuZ4.js";import{e as b,f as h}from"./TimeField-CTW-J0Nw.js";import"./FileCardList-Cv3K9cZ_.js";import"./Section-Dkz1Z9Gc.js";import{u as C}from"./Popover-CVmaaSmy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./Button-C446Wk0s.js";import"./IconWarning-DzQ9tJI9.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./utils-Duab__sA.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CpkmeH1J.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./browser-D_3azSPf.js";import"./EmulatedBoldText-BUnoqqKP.js";import"./Accordion-RPWmaaUv.js";import"./dynamic-BTR_FaAn.js";import"./ActionGroup-CCnftHDn.js";import"./Alert-BpD9EZoZ.js";import"./AlertIcon-NB0p5Yms.js";import"./AlertBadge-BvA3n6JX.js";import"./Align-DgVh2Xmx.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./TableFooterRow-C-QuWcfV.js";import"./SkeletonText-CVzDSYQ1.js";import"./RSPContexts-DWZje-yD.js";import"./SelectionIndicator-CU9wCljV.js";import"./context-C4TkkEyw.js";import"./Separator-BM0WI_Oi.js";import"./useStatic-BzUzXPh5.js";import"./Avatar-h_Ki0CZ6.js";import"./AvatarStack-Gf9f-fzG.js";import"./BigNumber-2Pst3keg.js";import"./Breadcrumb-DyIGAk3l.js";import"./Link-D5lmNW05.js";import"./Heading-CKk-OBgv.js";import"./Legend-CZYYogSE.js";import"./Color-BQDcjbxD.js";import"./Content-DCrZtXyx.js";import"./OverlayTrigger-e2PcLUgP.js";import"./ContextualHelpTrigger-B6boF4gV.js";import"./CounterBadge-DHmpw-7k.js";import"./DonutChart-BpGWb-78.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CGKrdI05.js";import"./Header-DwUPlhMJ.js";import"./Image-BPJGpCrO.js";import"./Initials-Bx2ekm4G.js";import"./InlineCode-7D8-c4AY.js";import"./PopoverTrigger-pI4ezi-o.js";import"./Separator-BIDSmay0.js";import"./Message-DAsbqRnX.js";import"./MessageSeparator-BIyH-kjr.js";import"./NavigationGroup-BdpT5He2.js";import"./Notification-B6oOrQsf.js";import"./NotificationProvider-D7dh6xuQ.js";import"./ProgressBar-CpJVreoe.js";import"./Rating-cf68lLg4.js";import"./Skeleton-C6zvhWXN.js";const Fe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ne=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,c as WithOnPressAndOnClose,a as WithScope,i as WithScopeAndOnClose,Ne as __namedExportsOrder,Fe as default};
