import{j as e,R as j}from"./iframe-C9fRvTrj.js";import{b as S,B as o}from"./Badge-Cl4NAQM1.js";import{T as s}from"./Text-D323xmXD.js";import{L as t}from"./Label-BRzY6dIy.js";import{C as b,M as h}from"./MenuItem-BDwyVfuz.js";import{u as C}from"./useOverlayController-MVFXohJh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./Button-BYUXEkA_.js";import"./IconChevronDown-D_WjmewV.js";import"./remote-BH-MD2MY.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./context-Bv4btMDO.js";import"./Button-CwWpYEN0.js";import"./utils-CPkfOZj3.js";import"./ProgressBar-DI2IDnVu.js";import"./Label-DetJ9FyC.js";import"./Hidden-D46P9k-k.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./IconClose-v67z94v5.js";import"./browser-CUSAF5aW.js";import"./EmulatedBoldText-CPA2fMYQ.js";import"./Text-BRNikD3K.js";import"./Label.module-CUYTf9Jc.js";import"./Action-DsOzwT3Y.js";import"./useStatic-0FUtvL5U.js";import"./getActionGroupSlot-Dhkl0Gym.js";import"./context-CrKYMuPA.js";import"./dynamic-C1VXiIMv.js";import"./lib-90ocxLs-.js";import"./Popover-DDuwRsLL.js";import"./OverlayContextProvider-CHFdaBg3.js";import"./Dialog-CyDp-GbU.js";import"./RSPContexts-CUBdls5w.js";import"./OverlayArrow-iEWyRd5r.js";import"./useControlledState-BGzazcEz.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useEvent-CG8oG6I6.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";import"./IconCheckboxEmpty-vYtyRov2.js";import"./IconRadioOn-B2csJADA.js";import"./Switch-Dl932Ejz.js";import"./IconCheck-CJKAe1X5.js";import"./useFieldComponent-jGlg5Icl.js";import"./useToggleState-CMXYs8Gp.js";import"./useFormReset-CS_NLM25.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
