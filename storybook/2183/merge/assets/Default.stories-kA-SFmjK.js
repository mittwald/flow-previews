import{j as e,R as j}from"./iframe-V6WnBfM7.js";import{b as S,B as o}from"./Badge-B0nQxBw6.js";import{T as s}from"./Text-BOvroeJC.js";import{L as t}from"./Label-DEwwG9Jt.js";import{C as b,M as h}from"./MenuItem-BODViIux.js";import{u as C}from"./useOverlayController-Bh-DL5d8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./Button-RYsAGsBp.js";import"./IconApp-Dy8CvIso.js";import"./remote-BEdoHpvj.js";import"./IconX-DudELXV7.js";import"./IconCheck-C4i47zDQ.js";import"./LoadingSpinner-B8i510y1.js";import"./ariaLive-IMmTuqYB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./context-LYg4mQF7.js";import"./Button-X5JzQY6M.js";import"./utils-XXCohoWw.js";import"./ProgressBar-DGuSqhT6.js";import"./Label-CXxg3a67.js";import"./Hidden-CdYZU9wP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-EvuRJYDK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8kRQmXV.js";import"./useFocus-CBAz-6m6.js";import"./useFocusRing-ffR2xJu-.js";import"./useFocusable-Cu8jcZF4.js";import"./IconClose-BEs5SvfC.js";import"./browser-DYYNnrYB.js";import"./EmulatedBoldText-C80B2tZx.js";import"./Text-D3RRQUEj.js";import"./Label.module-CUYTf9Jc.js";import"./Action-B-oQDmqe.js";import"./useStatic-BS6-BQsW.js";import"./getActionGroupSlot-BOc6vLFR.js";import"./context-D5s5gcMw.js";import"./dynamic-DY2czHtX.js";import"./lib-90ocxLs-.js";import"./Popover-j1dEi1Qt.js";import"./OverlayContextProvider-ClHtugeD.js";import"./Dialog-C89akVID.js";import"./RSPContexts-Bt_iJ6go.js";import"./OverlayArrow-Cit__A6Y.js";import"./useControlledState-CthGvIJy.js";import"./Collection-z9VX5kUn.js";import"./CollectionBuilder-DFDOtDir.js";import"./SelectionIndicator-D4v-q-K9.js";import"./Separator-BqbnfN10.js";import"./SelectionManager-BQeEKp2X.js";import"./useEvent-DIPTDlyA.js";import"./useCollator-Dg7pOOpD.js";import"./FocusScope-CBJcWxYD.js";import"./VisuallyHidden-Cv44kzCG.js";import"./IconCheckboxEmpty-BjhAr56L.js";import"./IconRadioOn-SJrqsMGn.js";import"./Switch-jN2nLWYp.js";import"./IconCheck-BJdR0rMB.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./useToggleState-BRwP5MsK.js";import"./useFormReset-C3fVW2xK.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ae=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Ae as __namedExportsOrder,De as default};
