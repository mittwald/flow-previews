import{R as u,j as e}from"./iframe-CEWg6_IX.js";import{b as x,B as o}from"./Badge-_G7MlIgi.js";import{T as i}from"./Text-Bw_cIJde.js";import{L as m}from"./Label-BaJSnICs.js";import{C as g,M as d}from"./MenuItem-DxoPi8dd.js";import"./ContextMenuTrigger-NQQLpLoe.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./flowComponent-BozMiJR4.js";import{u as h}from"./useOverlayController-BjtWEYCu.js";import{S as f}from"./StoryBackground-CwixjfvR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-CA6AkUR_.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./Button-Dhdc5WDI.js";import"./utils-VWmQzJjV.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./Label.module-CUYTf9Jc.js";import"./ActionBatch-CnX-7Tzc.js";import"./useStatic-B6Ppl0UQ.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./dynamic-JOnDgprM.js";import"./Popover-CBq8Jp6I.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./Dialog-0Ix26WHm.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./Switch-DWHYvKIq.js";import"./useFieldComponent-BOMK2S5G.js";import"./useToggleState-PGBw0AOX.js";import"./useFormReset-D1AT4nVs.js";import"./OverlayTrigger-DGu3y4_r.js";const be={title:"Status/Badge",component:o,parameters:{controls:{exclude:["className"]}},args:{color:"neutral",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:x}},render:r=>e.jsx(f,{color:r.color,children:e.jsx(o,{...r,children:"Value"})})},t={},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},n={render:r=>e.jsx(o,{...r,onPress:()=>{alert("pressed!")},children:"Value"})},p={render:r=>e.jsxs(o,{...r,onClose:()=>{alert("closed!")},onPress:()=>{alert("pressed!")},children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]})},a={render:r=>{const l=h("ContextMenu"),c=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{ref:c,onPress:l.open,...r,children:[e.jsx(m,{children:"Scope"}),e.jsx(i,{children:"Value"})]}),e.jsxs(g,{controller:l,triggerRef:c,children:[e.jsx(d,{children:"Item 1"}),e.jsx(d,{children:"Item 2"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
