import{j as e}from"./iframe-Bge_iwzq.js";import{F as o}from"./FileCard-BuMtHgCR.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{C as h,M as x}from"./MenuItem-C6wOzdwt.js";import"./ContextMenuTrigger-B3VscP1G.js";import"./ContextMenuSection-S8YrfSf7.js";import{L as f}from"./Label-DsCIDP_n.js";import{P as C}from"./ProgressBar-Bj-0RZrE.js";import{T as D}from"./Text-Bo3CKbUr.js";import{B as u}from"./Button-DYq5oiR6.js";import{F as S,e as j}from"./IconWarning-CnGwh2Y2.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-D60EbKtz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./AlertIcon-DJ3CSUsO.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Image-arBWudKN.js";import"./Link-CwcCCToL.js";import"./utils-rhPAe061.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-M-LntWI3.js";import"./usePress-BXEJU3rI.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./OptionsButton-BFu4-Biu.js";import"./ButtonView-DwzX0guQ.js";import"./ContextMenuTriggerView-DFxj9B9z.js";import"./ActionBatch-AWhYHCSY.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./browser-EEHoGSlH.js";import"./getActionGroupSlot-DLRBpctv.js";import"./dynamic-C3MU2GF_.js";import"./Popover-DH8uNurD.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./Text-70WXc8nw.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./Switch-DMfgKflI.js";import"./useFieldComponent-DrAtnMqi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ClzIwFMh.js";import"./useFormReset-CAOi_S_S.js";import"./LoadingSpinner-BWNPdeXh.js";import"./OverlayTrigger-Dvl7K4Qg.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-TVSGPckL.js";import"./EmulatedBoldText-D9nC6wju.js";import"./remote-CO23tKXG.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},parameters:{controls:{exclude:["href","onDelete","onPress","imageSrc"]}},render:r=>e.jsx(o,{...r})},t={},a={args:{type:"image/png"}},n={args:{sizeInBytes:47500}},s={args:{href:"#",onDelete:()=>{d("onDelete")}}},i={render:r=>e.jsx(o,{...r,children:e.jsx(h,{children:e.jsx(x,{children:"Löschen"})})})},m={args:{imageSrc:g.imageSrc}},p={args:{onDelete:()=>{d("onDelete")},href:"#",name:void 0},parameters:{controls:{exclude:["href","onDelete","name"]}},render:r=>e.jsx(o,{...r,children:e.jsx(C,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(f,{children:"Image.png"})})})},c={render:r=>e.jsx(o,{isFailed:!0,...r,children:e.jsx(D,{children:"Upload failed"})})},l={args:{onDelete:()=>d("onDelete"),onPress:()=>d("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(u,{"aria-label":"Move up",children:e.jsx(S,{})}),e.jsx(u,{"aria-label":"Move down",children:e.jsx(j,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Ae=["Default","WithType","WithSize","WithActions","WithContextMenu","WithImage","WithProgressBar","Failed","WithButtons"];export{t as Default,c as Failed,s as WithActions,l as WithButtons,i as WithContextMenu,m as WithImage,p as WithProgressBar,n as WithSize,a as WithType,Ae as __namedExportsOrder,ze as default};
