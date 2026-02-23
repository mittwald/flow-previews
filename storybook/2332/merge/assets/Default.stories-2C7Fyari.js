import{j as e}from"./iframe-DunzINT4.js";import{F as o}from"./FileCard-BTZmIMgg.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{C as D,M as f}from"./MenuItem-ZmRcTmRI.js";import"./ContextMenuTrigger-CTYVWg2Y.js";import"./ContextMenuSection-BBATHhHi.js";import{L as C}from"./Label-CAkB50pb.js";import{P as S}from"./ProgressBar-DiPkLUeQ.js";import{T as W}from"./Text-DTHO_DRR.js";import{B as h}from"./Button-D4ye7DRq.js";import{C as j,n as B}from"./IconWarning-kFcnfyhN.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CtrM1JLN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./AlertIcon-Bju3yLvF.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./context-XFBu4tuG.js";import"./Image-wMV5X_K4.js";import"./Link-DHf6UEv1.js";import"./utils-B66WPIWK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CLsD99Jd.js";import"./usePress-VDpDAbVy.js";import"./useFocusRing-BpLynkPU.js";import"./useFocusable-BqXitQDl.js";import"./OptionsButton-C-pnMhjV.js";import"./ButtonView-Db2YbPTU.js";import"./ContextMenuTriggerView-B3O97pPu.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./browser-CUqULdV9.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./dynamic--RH-hhxe.js";import"./Popover-DJxHz7NJ.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./Dialog-Da1bNoxP.js";import"./Button-C6WdG1X1.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./useLabel-ClizNTl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DYG4soUM.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./Text-CMXpTIb-.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";import"./Switch-E8P1pSL6.js";import"./useFieldComponent-mGz2JkQm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CEwtgscT.js";import"./useFormReset-BCoUHfvE.js";import"./LoadingSpinner-CzZyxAnt.js";import"./OverlayTrigger-B1b7JrEs.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-By136J-n.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./remote-BHsosJBg.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ee={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "image/png"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizeInBytes: 47500
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => {
      action("onDelete");
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    onDelete: () => {
      action("onDelete");
    }
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <FileCard {...props}>
      <ContextMenu>
        <MenuItem>Löschen</MenuItem>
      </ContextMenu>
    </FileCard>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: dummyText.imageSrc
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => {
      action("onDelete");
    },
    href: "#",
    name: undefined
  },
  render: props => <FileCard {...props}>
      <ProgressBar value={2.1} maxValue={3.4} minValue={0} showMaxValue formatOptions={{
      style: "unit",
      unit: "megabyte"
    }}>
        <Label>Image.png</Label>
      </ProgressBar>
    </FileCard>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isFailed: true
  },
  render: props => <FileCard {...props}>
      <Text>Upload failed</Text>
    </FileCard>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => action("onDelete"),
    onPress: () => action("onPress")
  },
  render: props => <FileCard {...props}>
      <Button>
        <IconChevronUp />
      </Button>
      <Button>
        <IconChevronDown />
      </Button>
    </FileCard>
}`,...g.parameters?.docs?.source}}};const Re=["Default","WithType","WithSize","WithOnDelete","WithLink","WithLinkAndOnDelete","WithContextMenu","WithImage","WithProgressBar","Failed","WithButtons"];export{n as Default,u as Failed,g as WithButtons,c as WithContextMenu,d as WithImage,m as WithLink,p as WithLinkAndOnDelete,i as WithOnDelete,l as WithProgressBar,a as WithSize,s as WithType,Re as __namedExportsOrder,Ee as default};
