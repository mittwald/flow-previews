import{j as e,R as j}from"./iframe-B9DmQEvm.js";import{b as S,B as o}from"./Badge-DmsrCf-1.js";import{T as s}from"./Text-DWnECR1V.js";import{L as t}from"./Label-CdjTRCcN.js";import{e as b,f as h}from"./TimeField-BCrDwFv1.js";import"./FileCardList-BAmcrG49.js";import"./Section-C_OhuZda.js";import{u as C}from"./Popover-UpR8ui09.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./Button-Dm4Gj0Ue.js";import"./IconWarning-DHbLseiS.js";import"./remote-pOc8vwOE.js";import"./LoadingSpinner-CoK93z8B.js";import"./Button-aNJWqsMX.js";import"./utils-Oe4-zNeB.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-f4__Yrtg.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./browser-B5MMVHjZ.js";import"./EmulatedBoldText-CcFQw1kW.js";import"./Accordion-D4jAtFpD.js";import"./dynamic-D9zzs7eg.js";import"./ActionGroup-BPBZMd0G.js";import"./Alert-C2lbq4BB.js";import"./AlertIcon-DNW_OXFb.js";import"./AlertBadge-C6Me14oL.js";import"./Align-DPuLyLOo.js";import"./Collection-hhJxclBU.js";import"./CollectionBuilder-BT6nUxaY.js";import"./TableFooterRow-B35Rsrml.js";import"./SkeletonText-ZPaTyog7.js";import"./RSPContexts-CotCKDbU.js";import"./SelectionIndicator-DK0swjPr.js";import"./context-CWF20r0U.js";import"./Separator-CBfW85A4.js";import"./useStatic-D5S9NXQn.js";import"./Avatar-Bx2ST7JM.js";import"./AvatarStack-_PkufGBz.js";import"./BigNumber-DHP9TJHn.js";import"./Breadcrumb-LOJeBKLO.js";import"./Link-DZQzqDqQ.js";import"./Heading-DwjnBE1G.js";import"./Legend-Bh3IkHhT.js";import"./Color-DhQB_epS.js";import"./Content-JADEg-IW.js";import"./OverlayTrigger-BPc83cwF.js";import"./ContextualHelpTrigger-dKYi-1DA.js";import"./CounterBadge-Cls8KRo_.js";import"./DonutChart-B9esqjeH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEET8u9H.js";import"./Header-DeL33C6q.js";import"./Image-BrfuIr9u.js";import"./Initials-Dn2eAsB4.js";import"./InlineCode-C2pHeQEX.js";import"./PopoverTrigger-BccW7zFf.js";import"./Separator-fewq4lm1.js";import"./Message-CS9r66Cj.js";import"./MessageSeparator-B3ZhQOA7.js";import"./NavigationGroup-bOs2Paa-.js";import"./Notification-D4DyPezB.js";import"./NotificationProvider-HN69aTqY.js";import"./ProgressBar-CZYj1IvA.js";import"./Rating-BgHH720o.js";import"./Skeleton-xhKc-iSZ.js";const Ne={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
