import{R as u,j as e}from"./iframe-BcqfzoOA.js";import{b as x,B as o}from"./Badge-V_AjlRtV.js";import{T as i}from"./Text-1XRmWCfn.js";import{L as m}from"./Label-CQjtN3Gn.js";import{C as g,M as d}from"./MenuItem-DB-rb3HN.js";import"./ContextMenuTrigger-C9u8PzU3.js";import"./ContextMenuSection-CYrr5VC5.js";import"./flowComponent-E8dWM55n.js";import{u as h}from"./useOverlayController-CrButM_3.js";import{S as f}from"./StoryBackground-CZtd7xyA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-C2msjhlA.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./Button-CG09EaR6.js";import"./utils-Bwp7PlhH.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-D231mKj-.js";import"./useStatic-feLAmThE.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./Popover-lZTmTyt9.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./Dialog-Ce_unDUt.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./Switch-CG8jmhCA.js";import"./useFieldComponent-CSNqGKWj.js";import"./useToggleState-CCPEOAsS.js";import"./useFormReset-neBkOLPK.js";import"./OverlayTrigger-CxrHdMrt.js";const be={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
