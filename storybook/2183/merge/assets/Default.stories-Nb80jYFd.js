import{j as e,R as j}from"./iframe-C3qryY9m.js";import{b as S,B as o}from"./Badge-Cu0blLSU.js";import{T as s}from"./Text-D-8m5QW2.js";import{L as t}from"./Label-C-0JfuKv.js";import{C as b,M as h}from"./MenuItem-BBELiHUW.js";import{u as C}from"./useOverlayController-DqQbDVt2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./index-BCGSECUV.js";import"./Button-DjS8Y37J.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./Button-DXnGr114.js";import"./utils-DpUn2o29.js";import"./ProgressBar-D4KqjXjU.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./IconClose-Ow5wPPrS.js";import"./browser-7Ut6r0Ca.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./Label.module-CUYTf9Jc.js";import"./Action-BLUuMHcv.js";import"./useStatic-CxeJCkNi.js";import"./getActionGroupSlot-BQTW5J-Z.js";import"./context-BBcvZ-pJ.js";import"./dynamic-B40s9Zwa.js";import"./lib-90ocxLs-.js";import"./Popover-DdsS2BWk.js";import"./OverlayContextProvider-VRFY-eRQ.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./useControlledState-D6tzoGpH.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useEvent-DVkloeR1.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./IconCheckboxEmpty-Cf2KA0lF.js";import"./IconRadioOn-Bt3o_cRW.js";import"./Switch-lNBrNTrE.js";import"./IconCheck-StvbSZ58.js";import"./useFieldComponent-BCb9qeqT.js";import"./useToggleState-B7PWI6oX.js";import"./useFormReset-CU22rOa5.js";const De={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},m={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},d={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(t,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
