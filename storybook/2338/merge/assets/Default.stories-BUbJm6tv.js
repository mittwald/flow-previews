import{j as e}from"./iframe-BFddea_x.js";import{F as o}from"./FileCard-qaO_sT2W.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{C as h,M as x}from"./MenuItem-JNwMZTFL.js";import"./ContextMenuTrigger-3uwZO5tE.js";import"./ContextMenuSection-C_9nT1gz.js";import{L as f}from"./Label-Cyz25dCh.js";import{P as C}from"./ProgressBar-CQLXCn0P.js";import{T as D}from"./Text-B70YymId.js";import{B as u}from"./Button-DmFob37h.js";import{F as S,e as j}from"./IconWarning-Cwahpn-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-jsI8Thmp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./AlertIcon-Bx7C3Aee.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Image-UDW_fzf-.js";import"./Link-DtC85Uv0.js";import"./utils-D-aZUMcZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./usePress-DZQSLH7U.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./OptionsButton-DA2bTAKR.js";import"./ButtonView-O_aZgiJ1.js";import"./ContextMenuTriggerView-BOHJmbf2.js";import"./ActionBatch-BLAWmMpV.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./browser-PH3BUHM2.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./Popover-BbCf_utC.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./Text-DndMRLn5.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./Switch-RNfkf9Un.js";import"./useFieldComponent-DrOhnKye.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-hE4ermpf.js";import"./useFormReset-C1U9nA2s.js";import"./LoadingSpinner-BTSUDAP0.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-6UMDYnpZ.js";import"./EmulatedBoldText-C15EfUg3.js";import"./remote-DmjGOFpp.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},parameters:{controls:{exclude:["href","onDelete","onPress","imageSrc"]}},render:r=>e.jsx(o,{...r})},t={},a={args:{type:"image/png"}},n={args:{sizeInBytes:47500}},s={args:{href:"#",onDelete:()=>{d("onDelete")}}},i={render:r=>e.jsx(o,{...r,children:e.jsx(h,{children:e.jsx(x,{children:"Löschen"})})})},m={args:{imageSrc:g.imageSrc}},p={args:{onDelete:()=>{d("onDelete")},href:"#",name:void 0},parameters:{controls:{exclude:["href","onDelete","name"]}},render:r=>e.jsx(o,{...r,children:e.jsx(C,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(f,{children:"Image.png"})})})},c={render:r=>e.jsx(o,{isFailed:!0,...r,children:e.jsx(D,{children:"Upload failed"})})},l={args:{onDelete:()=>d("onDelete"),onPress:()=>d("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(u,{"aria-label":"Move up",children:e.jsx(S,{})}),e.jsx(u,{"aria-label":"Move down",children:e.jsx(j,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
