import{j as e,R as j}from"./iframe-Bl94pFC8.js";import{b as S,B as o}from"./Badge-CWRZ3wRS.js";import{T as s}from"./Text-DCRPGY0z.js";import{L as t}from"./Label-DSusOXDR.js";import{e as b,f as h}from"./TimeField-Dr4KQ3tF.js";import"./FileCardList-BKpHqFCP.js";import"./Section-LN95lzay.js";import{u as C}from"./Popover-Vgu8QpdP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQui21V8.js";import"./mergeRefs-BiBjcigA.js";import"./index-DsFLFuyK.js";import"./Button-AfVTn90Y.js";import"./IconWarning-SCcj4Iql.js";import"./LoadingSpinner-CJ6B7oAG.js";import"./Button-Bw0lcVwr.js";import"./utils-zKD0YG1w.js";import"./ProgressBar-C-lIvLR2.js";import"./Hidden-BS8eNNR-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DhigdGAb.js";import"./useFocusRing-_izhPlj5.js";import"./useFocusable-BC3ywUsf.js";import"./useLocalizedStringFormatter-Cy6aSMx0.js";import"./browser-BA3Ei853.js";import"./EmulatedBoldText-CCSVbhNW.js";import"./Accordion-CCFKHcUe.js";import"./dynamic-CIZa5yke.js";import"./ActionGroup-CYfLKjjP.js";import"./Alert-DXgIB8vT.js";import"./AlertIcon-KdhHTMr9.js";import"./AlertBadge-Bsnm1FW5.js";import"./Align-vdE1Hw63.js";import"./Collection-Bsn8m2mI.js";import"./CollectionBuilder-D14md_BA.js";import"./TableFooterRow-yXwprf4A.js";import"./SkeletonText-BxAwRS8K.js";import"./RSPContexts-CHIkVN0y.js";import"./SelectionIndicator-Bx-x-xLH.js";import"./context-BpghOljr.js";import"./Separator-R67wGb_t.js";import"./useStatic-gdaW8QxK.js";import"./Avatar-CBi98t6a.js";import"./AvatarStack-BCyimaIH.js";import"./BigNumber-BOmO8_9H.js";import"./Breadcrumb-qLsGxUTH.js";import"./Link-CxjACdrd.js";import"./Heading-gu5HE-XK.js";import"./Legend-Bk5heO9K.js";import"./Color-BEk31k5R.js";import"./Content-CFmPNCl8.js";import"./OverlayTrigger-CoDb3nvg.js";import"./ContextualHelpTrigger-CUwhkzFI.js";import"./CounterBadge-Dy2ngnrh.js";import"./DonutChart-DyH97w7v.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Doe0mmHM.js";import"./Header-DENQ7Dxk.js";import"./Image-zwt55Zy5.js";import"./Initials-TwvVZF9j.js";import"./InlineCode-CTUORIgt.js";import"./PopoverTrigger-om_tcJyU.js";import"./Separator-F44i8CmN.js";import"./Message-CzqxdJ5a.js";import"./MessageSeparator-DcMZZRKU.js";import"./NavigationGroup-CUhbVSuu.js";import"./Notification-bDPr6UcS.js";import"./NotificationProvider-BFKLdZBe.js";import"./ProgressBar-BdgJs4zS.js";import"./Rating-DCow-Fra.js";import"./Skeleton-BOcdA3Th.js";const Fe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
