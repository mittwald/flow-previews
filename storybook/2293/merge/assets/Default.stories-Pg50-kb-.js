import{j as e,R as j}from"./iframe-DCk1dltx.js";import{b as S,B as o}from"./Badge-DEAZ2BwP.js";import{T as s}from"./Text-BrHbgyhX.js";import{L as n}from"./Label-CoyrnT1D.js";import{C as b,M as h}from"./MenuItem-BJqicng5.js";import"./ContextMenuTrigger-C3DFOPM3.js";import"./ContextMenuSection-DnWeaq_7.js";import{u as C}from"./useOverlayController-ChlOSDc8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./Button-DZuynozn.js";import"./IconWarning-Dty0OPVS.js";import"./remote-DvlevvD7.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./Button-DjraAkXw.js";import"./utils-dLBbTpD9.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwKHWgOu.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useFocusable-CjQRw48Z.js";import"./browser-CviVsCbd.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./Label.module-CUYTf9Jc.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./useStatic-CBlVxf-j.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./dynamic-BisWu7fc.js";import"./Popover-D29W9ttZ.js";import"./OverlayContextProvider-D8VTtXin.js";import"./Dialog-Cwy0OKAE.js";import"./RSPContexts-DsTbr3uT.js";import"./OverlayArrow-hOch9Zrk.js";import"./useControlledState-8RsR_43b.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";import"./Switch-W4EDz7FS.js";import"./useFieldComponent-DRONwAvB.js";import"./useToggleState-cVMrwpOM.js";import"./useFormReset-BYlFqKoc.js";import"./OverlayTrigger-B_1pmhgA.js";const Oe={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:S}},render:r=>e.jsx(o,{...r,children:"Value"})},t={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},p={render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},l={render:r=>e.jsx(o,{...r,onClose:()=>{alert("closed!")},children:"Value"})},c={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},i={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]})},d={render:r=>{const g=C("ContextMenu"),x=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:x,onPress:g.open,...r,children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),e.jsxs(b,{controller:g,triggerRef:x,children:[e.jsx(h,{children:"Item 1"}),e.jsx(h,{children:"Item 2"})]})]})}},m={args:{color:"light"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"dark"}},u={args:{color:"dark"},render:r=>e.jsxs(o,{...r,onPress:()=>{alert("pressed!")},children:[e.jsx(n,{children:"Scope"}),e.jsx(s,{children:"Value"})]}),globals:{backgrounds:"light"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const We=["Default","WithScope","WithOnPress","WithOnClose","WithScopeAndOnClose","WithOnPressAndOnClose","WithContextMenu","Light","Dark"];export{u as Dark,t as Default,m as Light,d as WithContextMenu,l as WithOnClose,p as WithOnPress,i as WithOnPressAndOnClose,a as WithScope,c as WithScopeAndOnClose,We as __namedExportsOrder,Oe as default};
