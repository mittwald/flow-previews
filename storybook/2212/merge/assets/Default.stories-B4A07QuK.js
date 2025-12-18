import{j as e,R as j}from"./iframe-DRHo_LWV.js";import{b as S,B as o}from"./Badge-BJlVMabo.js";import{T as s}from"./Text-C8Z4-t3h.js";import{L as t}from"./Label-AMkNKrE4.js";import{e as b,f as h}from"./TimeField-B_HIbzDf.js";import"./FileCardList-DyPlSIwt.js";import"./Section-BepYC6c-.js";import{u as C}from"./Popover-BQgBoj25.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./Button-CoKi_833.js";import"./IconWarning-DOCSYVJb.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./Button-CPvHspkD.js";import"./utils-BMeX6kjI.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./browser-BUXnAcqH.js";import"./EmulatedBoldText-B9Wwr1Zx.js";import"./Accordion-Droib5ZD.js";import"./dynamic-D3Z_5L-h.js";import"./ActionGroup-BJPHeF0U.js";import"./Alert-BrLW18t8.js";import"./AlertIcon-Db-Zh-lA.js";import"./AlertBadge-D9yH7rZh.js";import"./Align-6v3SCJ3p.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./TableFooterRow-CBxQ079v.js";import"./SkeletonText-CvydbgeP.js";import"./RSPContexts-CCSm4UT8.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./context-B26OnoB_.js";import"./Separator-BclQH7dY.js";import"./useStatic-DSG2Vd8Y.js";import"./Avatar-_7zeFz8_.js";import"./AvatarStack-CBG1tO2U.js";import"./BigNumber-CJ9-Wooc.js";import"./Breadcrumb-BVcz-IL9.js";import"./Link-C63VPDP4.js";import"./Heading-DXCu3xfs.js";import"./Legend-B9gsZERq.js";import"./Color-CDrqKcSm.js";import"./Content-hq-FzB-y.js";import"./OverlayTrigger-DqaZeyEn.js";import"./ContextualHelpTrigger-DKjAVjgi.js";import"./CounterBadge-fUD2-v8M.js";import"./DonutChart-Dyw35JTN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-6-OTG4lb.js";import"./Header-DxKAYmWZ.js";import"./Image-DxrW6BFv.js";import"./Initials-DwskPZku.js";import"./InlineCode-BLBJzgMQ.js";import"./PopoverTrigger-RQrqTxsS.js";import"./Separator-BgjeAa1-.js";import"./Message-Ji74Yk1U.js";import"./MessageSeparator-DIqoqc2T.js";import"./NavigationGroup-D8tcv3W_.js";import"./Notification-C8xMDKXr.js";import"./NotificationProvider-yYltR2ZZ.js";import"./ProgressBar-13l5oasV.js";import"./Rating-UxQEt7zP.js";import"./Skeleton-DUrZDWEK.js";const Fe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
