import{R as u,j as e}from"./iframe-Bge_iwzq.js";import{b as x,B as o}from"./Badge-Bh1cbKsC.js";import{T as i}from"./Text-Bo3CKbUr.js";import{L as m}from"./Label-DsCIDP_n.js";import{C as g,M as d}from"./MenuItem-C6wOzdwt.js";import"./ContextMenuTrigger-B3VscP1G.js";import"./ContextMenuSection-S8YrfSf7.js";import"./flowComponent-MzGAW5sa.js";import{u as h}from"./useOverlayController-wivVBOVc.js";import{S as f}from"./StoryBackground-Bt6nVvMb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-DYq5oiR6.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./Button-0WCxpm2-.js";import"./utils-rhPAe061.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-AWhYHCSY.js";import"./useStatic-CNeEScnJ.js";import"./getActionGroupSlot-DLRBpctv.js";import"./dynamic-C3MU2GF_.js";import"./Popover-DH8uNurD.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./Dialog-BA7SIyML.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./Switch-DMfgKflI.js";import"./useFieldComponent-DrAtnMqi.js";import"./useToggleState-ClzIwFMh.js";import"./useFormReset-CAOi_S_S.js";import"./OverlayTrigger-Dvl7K4Qg.js";const be={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
