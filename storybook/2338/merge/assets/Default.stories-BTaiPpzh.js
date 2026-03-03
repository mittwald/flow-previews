import{R as u,j as e}from"./iframe-BZ1p44Xs.js";import{b as x,B as o}from"./Badge-asNjcpRo.js";import{T as i}from"./Text-CplKG2wk.js";import{L as m}from"./Label-HK0aVnMe.js";import{C as g,M as d}from"./MenuItem-BgzEiv_9.js";import"./ContextMenuTrigger-rOh1KcX0.js";import"./ContextMenuSection-FMJg67QM.js";import"./flowComponent-DJzVmXlH.js";import{u as h}from"./useOverlayController-Dfa0MUCA.js";import{S as f}from"./StoryBackground-B31Ag3zs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-BXzJaHaH.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./Button-DOqybSdu.js";import"./utils-Cc2PUaBi.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-kp--iEDz.js";import"./useStatic-BVYP0IGX.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./Popover-CWPz-1RW.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./Switch-C5Kq8j5J.js";import"./useFieldComponent-CdmiPNAX.js";import"./useToggleState-DudHCVeE.js";import"./useFormReset-zSbsyNkN.js";import"./OverlayTrigger-DzQUlxLA.js";const be={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onPress={() => {
    alert("pressed!");
  }}>
      Value
    </Badge>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Badge {...props} onClose={() => {
    alert("closed!");
  }} onPress={() => {
    alert("pressed!");
  }}>
      <Label>Scope</Label>
      <Text>Value</Text>
    </Badge>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Ie=["Default","WithScope","WithOnPress","WithOnClose","WithContextMenu"];export{t as Default,a as WithContextMenu,p as WithOnClose,n as WithOnPress,s as WithScope,Ie as __namedExportsOrder,be as default};
