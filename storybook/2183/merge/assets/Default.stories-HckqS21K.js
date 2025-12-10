import{j as e,R as j}from"./iframe-6jyXgxue.js";import{b as S,B as o}from"./Badge-WZr49ZKv.js";import{T as s}from"./Text-Dlqenc2H.js";import{L as t}from"./Label-ChCKJV3V.js";import{e as b,f as h}from"./TimeField-BWhC3HpL.js";import"./FileCardList-B0iLEsKd.js";import"./Section-H3gIqLfl.js";import{u as C}from"./Popover-D8d0zPXi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./Button-C79y5FLr.js";import"./IconWarning-C-gwxPU9.js";import"./remote-D3kJiMg-.js";import"./LoadingSpinner-D7O-q36Z.js";import"./Button-DvSQe7YO.js";import"./utils-gjysgmBz.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-JQMt_ZQS.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./browser-BMGdvove.js";import"./EmulatedBoldText-BIdH-rcf.js";import"./Accordion-fULoH9xe.js";import"./dynamic-DCXw5NHQ.js";import"./ActionGroup-CzskHu9f.js";import"./Alert-DrBylAny.js";import"./AlertIcon-CE8OjIho.js";import"./AlertBadge-DgAWcThQ.js";import"./Align-BzUcMv_f.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./TableFooterRow-DpjTUBn1.js";import"./SkeletonText-6_21vf5Q.js";import"./RSPContexts-B8t3YJD-.js";import"./SelectionIndicator-B4LTYmXz.js";import"./context-DHByHAd4.js";import"./Separator-DRruZlSn.js";import"./useStatic-D2icMmWp.js";import"./Avatar-C1mA-DAE.js";import"./AvatarStack-BqyIa6ad.js";import"./BigNumber-C54ZRNi7.js";import"./Breadcrumb-Cwl4tYyc.js";import"./Link-D0jiVju_.js";import"./Heading-CJE26UUg.js";import"./Legend-WIvdEy4p.js";import"./Color-JgwV0I9-.js";import"./Content-BVhQmARn.js";import"./OverlayTrigger-C4RVAI_V.js";import"./ContextualHelpTrigger-CJ7SzJu0.js";import"./CounterBadge-D4Tjgl8K.js";import"./DonutChart-6sh_E6SJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CRpXUc1l.js";import"./Header-BSNdFr4b.js";import"./Image-COP6xYUW.js";import"./Initials-prUY4cPn.js";import"./InlineCode-Czh4dmVv.js";import"./PopoverTrigger-Dz8Taoga.js";import"./Separator-BU3gQHFS.js";import"./Message-f3EcTgP_.js";import"./MessageSeparator-D_xNlPF-.js";import"./NavigationGroup-C98vmueH.js";import"./Notification-DPFB18oq.js";import"./NotificationProvider-Ce0Lip3J.js";import"./ProgressBar-uMhxME4A.js";import"./Rating-DbrK3hf3.js";import"./Skeleton-Dm-B8LNv.js";const Ne={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
