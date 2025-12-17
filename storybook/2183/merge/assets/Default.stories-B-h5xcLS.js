import{j as e,R as j}from"./iframe-B7RREkGu.js";import{b as S,B as o}from"./Badge-XURceODo.js";import{T as s}from"./Text-DoQtsqjx.js";import{L as t}from"./Label-DJkUDzdc.js";import{C as b,M as h}from"./MenuItem-Db_n-iRw.js";import{u as C}from"./useOverlayController-CZleQSK6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./index-C8g7-GlJ.js";import"./Button-TsdLobX9.js";import"./IconChevronDown-D-2czTjO.js";import"./remote-Ba-TbkWY.js";import"./IconX-B38mn789.js";import"./IconCheck-KHnf6U2_.js";import"./LoadingSpinner-BcPCL_oT.js";import"./ariaLive-Cy4z0itg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./context-Bh5Je-Bl.js";import"./Button-0GEfT2Oo.js";import"./utils-IlafnyMI.js";import"./ProgressBar-DnQzXKKa.js";import"./Label-B5AW6xg7.js";import"./Hidden-zIyTGZgm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Br_94_1T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4dOiegp.js";import"./useFocus-BaUOkNoz.js";import"./useFocusRing-BOQTp4b_.js";import"./useFocusable-BSgkjvKf.js";import"./IconClose-lC7f9WFw.js";import"./browser-DkVC7uJT.js";import"./EmulatedBoldText-Coo_6hrl.js";import"./Text-CPOpiDMW.js";import"./Label.module-CUYTf9Jc.js";import"./Action-BcGzUsr7.js";import"./useStatic-tA9-ZYDd.js";import"./getActionGroupSlot-DiF9Ne2F.js";import"./context-BZ5WwvCq.js";import"./dynamic-CWl0hyOW.js";import"./lib-90ocxLs-.js";import"./Popover-Ckf8prcf.js";import"./OverlayContextProvider-BF32Wl14.js";import"./Dialog-DUDQW2g7.js";import"./RSPContexts-ByjogFSB.js";import"./OverlayArrow-CQB6hAQJ.js";import"./useControlledState-CfgggjdY.js";import"./Collection-D4FMjQ2t.js";import"./CollectionBuilder-CqiHWup6.js";import"./SelectionIndicator-BAdp0X2f.js";import"./Separator-BITuXniK.js";import"./SelectionManager-DVNQ1E_K.js";import"./useEvent-I95ZQAll.js";import"./useCollator-DB2PW37J.js";import"./FocusScope-BWn7UZVq.js";import"./VisuallyHidden-BevTIdSp.js";import"./IconCheckboxEmpty-Bsl84OFR.js";import"./IconRadioOn-xa25KhDQ.js";import"./Switch-BSkDoYCY.js";import"./IconCheck-BpEx1tJ-.js";import"./useFieldComponent-B2EVEjTj.js";import"./useToggleState-B-FPV6Gm.js";import"./useFormReset-OFQGg9Qq.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
