import{j as e}from"./iframe-CtEjVB66.js";import{F as o}from"./FileCard-DIqxA9Tm.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{C as h,M as x}from"./MenuItem-wH73rdaM.js";import"./ContextMenuTrigger-Dvm-yCzh.js";import"./ContextMenuSection-COxyh1Te.js";import{L as f}from"./Label-CvAjEv-1.js";import{P as C}from"./ProgressBar-I-0YQqGD.js";import{T as D}from"./Text-QCKh6xRo.js";import{B as u}from"./Button-BbnjmOHy.js";import{F as S,e as j}from"./IconWarning-1CkAUSYF.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CJ_n7NT3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./AlertIcon-BaGtIfyD.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Image-DEheCn3E.js";import"./Link-DMg6xFRD.js";import"./utils-BuEQZICT.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./usePress-Cre2k4PJ.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./OptionsButton-B_K1qgCu.js";import"./ButtonView-Ci2JAKGf.js";import"./ContextMenuTriggerView-BH2Y4clJ.js";import"./ActionBatch-CDzJz977.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./browser-CLHYf5YF.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./Popover-fmzRw_jU.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./Text-1qNOxJF7.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./Switch-DFBGVKQx.js";import"./useFieldComponent-B7HNchXP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CL5C9z_j.js";import"./useFormReset-2RZyXaKm.js";import"./LoadingSpinner-CJX4ksrz.js";import"./OverlayTrigger-B8jwjQmG.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BYjs0rPZ.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./remote-4O72-jdB.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},parameters:{controls:{exclude:["href","onDelete","onPress","imageSrc"]}},render:r=>e.jsx(o,{...r})},t={},a={args:{type:"image/png"}},n={args:{sizeInBytes:47500}},s={args:{href:"#",onDelete:()=>{d("onDelete")}}},i={render:r=>e.jsx(o,{...r,children:e.jsx(h,{children:e.jsx(x,{children:"Löschen"})})})},m={args:{imageSrc:g.imageSrc}},p={args:{onDelete:()=>{d("onDelete")},href:"#",name:void 0},parameters:{controls:{exclude:["href","onDelete","name"]}},render:r=>e.jsx(o,{...r,children:e.jsx(C,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(f,{children:"Image.png"})})})},c={render:r=>e.jsx(o,{isFailed:!0,...r,children:e.jsx(D,{children:"Upload failed"})})},l={args:{onDelete:()=>d("onDelete"),onPress:()=>d("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(u,{"aria-label":"Move up",children:e.jsx(S,{})}),e.jsx(u,{"aria-label":"Move down",children:e.jsx(j,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "image/png"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sizeInBytes: 47500
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    onDelete: () => {
      action("onDelete");
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <FileCard {...props}>
      <ContextMenu>
        <MenuItem>Löschen</MenuItem>
      </ContextMenu>
    </FileCard>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: dummyText.imageSrc
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => {
      action("onDelete");
    },
    href: "#",
    name: undefined
  },
  parameters: {
    controls: {
      exclude: ["href", "onDelete", "name"]
    }
  },
  render: props => <FileCard {...props}>
      <ProgressBar value={2.1} maxValue={3.4} minValue={0} showMaxValue formatOptions={{
      style: "unit",
      unit: "megabyte"
    }}>
        <Label>Image.png</Label>
      </ProgressBar>
    </FileCard>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <FileCard isFailed {...props}>
      <Text>Upload failed</Text>
    </FileCard>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => action("onDelete"),
    onPress: () => action("onPress")
  },
  render: props => <FileCard {...props}>
      <Button aria-label="Move up">
        <IconChevronUp />
      </Button>
      <Button aria-label="Move down">
        <IconChevronDown />
      </Button>
    </FileCard>
}`,...l.parameters?.docs?.source}}};const Ee=["Default","WithType","WithSize","WithActions","WithContextMenu","WithImage","WithProgressBar","Failed","WithButtons"];export{t as Default,c as Failed,s as WithActions,l as WithButtons,i as WithContextMenu,m as WithImage,p as WithProgressBar,n as WithSize,a as WithType,Ee as __namedExportsOrder,Ae as default};
