import{j as e,R as j}from"./iframe-QQgxjfU-.js";import{b as S,B as o}from"./Badge-ChI4R4GK.js";import{T as s}from"./Text-CRs-OO-e.js";import{L as t}from"./Label-TUk01fEf.js";import{C as b,M as h}from"./MenuItem-BYgn9L54.js";import"./ContextMenuTrigger-PKqcZi61.js";import"./ContextMenuSection-BZb_tlaR.js";import{u as C}from"./useOverlayController-nxYv6OIh.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./index-3NdHptBj.js";import"./Button-BWu_s2A1.js";import"./IconWarning-CSQYjrC1.js";import"./LoadingSpinner-DsHmX75T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./context-CRx6Bs8B.js";import"./Button-D9YKuqRT.js";import"./utils-DhA81qjX.js";import"./ProgressBar-DarvvV7I.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BVJbXyTi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIrX7kgo.js";import"./useFocus-0cMRA2DE.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocusable-ClkP-4lm.js";import"./browser-CvCNE6Dh.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Text-D_WC5Uss.js";import"./Label.module-CUYTf9Jc.js";import"./Action-DetrUASE.js";import"./context-C73KBwIX.js";import"./useStatic-B5jRDwsJ.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./dynamic-BjF6TIyL.js";import"./Popover-6OcPTHJw.js";import"./OverlayContextProvider-DVG4wpYy.js";import"./Dialog-D5kgP22k.js";import"./RSPContexts-CsH1Ib1c.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useControlledState-CkoNAxF1.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./VisuallyHidden-B95C2FUL.js";import"./ClearPropsContextView-DUKOvykV.js";import"./ClearPropsContext-C1xOcMSE.js";import"./Switch-BOSrZvlT.js";import"./useFieldComponent-B5mMljfV.js";import"./react-children-utilities-2-HBtGkG.js";import"./useMakeFocusable-DfOzNy-a.js";import"./useToggleState-waVL2aEM.js";import"./useFormReset-C3QpCCH-.js";import"./OverlayTrigger-Kv_JLhIy.js";import"./ControlledNotification-BZ0xiENt.js";const Ie={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const De=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,n as Default,d as Light,m as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,De as __namedExportsOrder,Ie as default};
