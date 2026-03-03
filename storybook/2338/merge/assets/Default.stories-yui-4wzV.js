import{j as e}from"./iframe-BZ1p44Xs.js";import{F as o}from"./FileCard-Bj5WG3b4.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{C as h,M as x}from"./MenuItem-BgzEiv_9.js";import"./ContextMenuTrigger-rOh1KcX0.js";import"./ContextMenuSection-FMJg67QM.js";import{L as f}from"./Label-HK0aVnMe.js";import{P as C}from"./ProgressBar-CPz1Fa1Y.js";import{T as D}from"./Text-CplKG2wk.js";import{B as u}from"./Button-BXzJaHaH.js";import{F as S,e as j}from"./IconWarning-BeCXg6tW.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-WXSkv75C.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./AlertIcon-CBSVIKWa.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./Image-BdCDw9k5.js";import"./Link-CnlokJZe.js";import"./utils-Cc2PUaBi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-O4gnqY9s.js";import"./usePress-CQ2PTrK5.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./OptionsButton-BWO0jioz.js";import"./ButtonView-BwTEXUNO.js";import"./ContextMenuTriggerView-Cz8K08k4.js";import"./ActionBatch-kp--iEDz.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./browser-N7XS9wRL.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./Popover-CWPz-1RW.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./Text-DOPFHCGV.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./Switch-C5Kq8j5J.js";import"./useFieldComponent-CdmiPNAX.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DudHCVeE.js";import"./useFormReset-zSbsyNkN.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./OverlayTrigger-DzQUlxLA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-D2czoISv.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./remote-BEHhGsYi.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},parameters:{controls:{exclude:["href","onDelete","onPress","imageSrc"]}},render:r=>e.jsx(o,{...r})},t={},a={args:{type:"image/png"}},n={args:{sizeInBytes:47500}},s={args:{href:"#",onDelete:()=>{d("onDelete")}}},i={render:r=>e.jsx(o,{...r,children:e.jsx(h,{children:e.jsx(x,{children:"Löschen"})})})},m={args:{imageSrc:g.imageSrc}},p={args:{onDelete:()=>{d("onDelete")},href:"#",name:void 0},parameters:{controls:{exclude:["href","onDelete","name"]}},render:r=>e.jsx(o,{...r,children:e.jsx(C,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(f,{children:"Image.png"})})})},c={render:r=>e.jsx(o,{isFailed:!0,...r,children:e.jsx(D,{children:"Upload failed"})})},l={args:{onDelete:()=>d("onDelete"),onPress:()=>d("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(u,{"aria-label":"Move up",children:e.jsx(S,{})}),e.jsx(u,{"aria-label":"Move down",children:e.jsx(j,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
