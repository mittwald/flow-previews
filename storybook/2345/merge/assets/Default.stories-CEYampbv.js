import{j as e,R as j}from"./iframe-CAK8FS83.js";import{b as S,B as o}from"./Badge-DzU0ZO5F.js";import{T as s}from"./Text-DLuRhlhH.js";import{L as n}from"./Label-B8vv94Ak.js";import{C as b,M as h}from"./MenuItem-BnW9Lg8D.js";import"./ContextMenuTrigger-DHcLaObj.js";import"./ContextMenuSection-gHmxmSmE.js";import"./flowComponent-BWp16SNy.js";import{u as C}from"./useOverlayController-Cgn9MX8W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-itgufTCs.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./LoadingSpinner-BC7xHqe0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./Button-Bm8bnERu.js";import"./utils-th26LVD6.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYhFSapw.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-BT7PEprG.js";import"./useStatic-CRQBoMuN.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./dynamic-D8OXR4zz.js";import"./Popover-BcIzS5Zx.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./Dialog-Bg78UE4C.js";import"./RSPContexts-B_v10Iug.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./Switch-CVJT33-Q.js";import"./useFieldComponent-DkAI1nDB.js";import"./useToggleState--Lsum0qS.js";import"./useFormReset-ClNM6Kah.js";import"./OverlayTrigger-YvJHasJp.js";const Me={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Oe=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,Oe as __namedExportsOrder,Me as default};
