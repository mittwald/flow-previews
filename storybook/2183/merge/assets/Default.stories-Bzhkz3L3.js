import{j as e,R as j}from"./iframe-CN4G8qqm.js";import{b as S,B as o}from"./Badge-C2d-g6jh.js";import{T as s}from"./Text-0Ubm83r2.js";import{L as n}from"./Label-SrhLxamV.js";import{C as b,M as h}from"./MenuItem-Bs_2Ghnl.js";import{u as C}from"./useOverlayController-CzXHiyE9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-4OAE62jj.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./Button-Bq80dFyw.js";import"./IconChevronDown-oGa76fM6.js";import"./remote-DWrodQTa.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./utils-DbmEdXKf.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./IconClose-91D_EWrB.js";import"./browser-TeUtxSTm.js";import"./EmulatedBoldText-moUjmeps.js";import"./Label.module-lamhxTiw.js";import"./Action-Cfr2BBp2.js";import"./useStatic-CM9-VZa7.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./context-CQHW5bQg.js";import"./RSPContexts-DE5X9chL.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./dynamic-D9oGWwUs.js";import"./lib-90ocxLs-.js";import"./Popover-ro5fYKAY.js";import"./OverlayContextProvider-HOHtpdM6.js";import"./IconCheckboxEmpty-DHcZCbzA.js";import"./IconRadioOn-Buauz5Nc.js";import"./Switch-B-HG7A5W.js";import"./IconCheck-6V3JMSVE.js";import"./useFieldComponent-TTf0ydYE.js";import"./Activity-BEbOvIp9.js";import"./TranslationProvider-D4PNRj4s.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./useToggleState-D7LYRA75.js";import"./useFormReset-CiTTEZ9A.js";const Be={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Le=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Le as __namedExportsOrder,Be as default};
