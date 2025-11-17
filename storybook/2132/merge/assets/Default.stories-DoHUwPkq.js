import{j as e,R as j}from"./iframe-DjMRZ933.js";import{b as S,B as o}from"./Badge-BN0x96Ky.js";import{T as s}from"./Text-HqedTJ3_.js";import{L as t}from"./Label-DE4OEFg-.js";import{e as b,f as h}from"./TimeField-B0eJEEhW.js";import"./FileCardList-TQMS-z_x.js";import"./Section-Cfn_XoWh.js";import{u as C}from"./Popover-C5QNOwBo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./Button-DcZikGPu.js";import"./IconWarning-15BQJDPi.js";import"./LoadingSpinner-fSHKWhSv.js";import"./Button-CVSjku2L.js";import"./utils-ChD4yM7Z.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMNm5Xu1.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./browser-CRatz6fZ.js";import"./EmulatedBoldText-B3brdLrg.js";import"./Accordion-BZmsZnOt.js";import"./dynamic-xmc70gpV.js";import"./ActionGroup-7rrFpHFJ.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./useStatic-CBLHZfUJ.js";import"./Alert-BcobEuUM.js";import"./AlertIcon-DmCm2LWR.js";import"./AlertBadge-CHwJpuCJ.js";import"./Align-BzDEdRIo.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./TableFooterRow-B6PT5pbR.js";import"./SkeletonText-CI93CBea.js";import"./RSPContexts-xVWKxYWV.js";import"./SelectionIndicator-Be-dMYOv.js";import"./context-o3mGNPxn.js";import"./Separator-CDRx1yir.js";import"./Avatar-BB63liah.js";import"./AvatarStack-B8FhdVad.js";import"./BigNumber-BSqhFP9i.js";import"./Breadcrumb-nMuJg0z4.js";import"./Link-ejox3cBD.js";import"./Heading-BgHZ1ILD.js";import"./Legend-DF5rtCao.js";import"./Color-BWZ1Dr8p.js";import"./Content-Bcc-jBqm.js";import"./OverlayTrigger-CrRJgUZu.js";import"./ContextualHelpTrigger-CYoOPEVY.js";import"./CounterBadge-CAliY95s.js";import"./DonutChart-DDKsyr_O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrAWYJ7k.js";import"./Header-DCu3M0y9.js";import"./Image-wUfga1_8.js";import"./Initials-TwtEiJm8.js";import"./InlineCode-CKS5wrww.js";import"./PopoverTrigger-DbAiM7NS.js";import"./Separator-sHJV27kT.js";import"./Message-DoIB20zo.js";import"./MessageSeparator-l8_oHDYV.js";import"./NavigationGroup-DRmGCyXC.js";import"./Notification-DGagkD2g.js";import"./NotificationProvider-BQSRGQyP.js";import"./ProgressBar-BaViBzGB.js";import"./Rating-CYR_1TdL.js";import"./Skeleton-IgaQ_QZW.js";const Ne={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
