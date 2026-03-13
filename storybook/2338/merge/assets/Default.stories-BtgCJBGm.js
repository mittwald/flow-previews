import{R as u,j as e}from"./iframe-BFddea_x.js";import{b as x,B as o}from"./Badge-Jb0Vhep2.js";import{T as i}from"./Text-B70YymId.js";import{L as m}from"./Label-Cyz25dCh.js";import{C as g,M as d}from"./MenuItem-JNwMZTFL.js";import"./ContextMenuTrigger-3uwZO5tE.js";import"./ContextMenuSection-C_9nT1gz.js";import"./flowComponent-BHBUnD7I.js";import{u as h}from"./useOverlayController-D1CCctag.js";import{S as f}from"./StoryBackground-tUdtaYjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-DmFob37h.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./Button-uqpwtIjO.js";import"./utils-D-aZUMcZ.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-BLAWmMpV.js";import"./useStatic-4M_8h910.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./Popover-BbCf_utC.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./Switch-RNfkf9Un.js";import"./useFieldComponent-DrOhnKye.js";import"./useToggleState-hE4ermpf.js";import"./useFormReset-C1U9nA2s.js";import"./OverlayTrigger-Yb2ddAp1.js";const Ie={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Te=["Default","WithScope","WithOnPress","WithOnClose","WithContextMenu"];export{t as Default,a as WithContextMenu,p as WithOnClose,n as WithOnPress,s as WithScope,Te as __namedExportsOrder,Ie as default};
