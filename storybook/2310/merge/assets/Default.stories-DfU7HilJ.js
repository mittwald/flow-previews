import{j as e}from"./iframe-DYxqCFL4.js";import{F as o}from"./FileCard-CSWmnLui.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{C as D,M as f}from"./MenuItem-C471GIy8.js";import"./ContextMenuTrigger-3VQSDPR2.js";import"./ContextMenuSection-BPGq4V6i.js";import{L as C}from"./Label-DuKZtpj_.js";import{P as S}from"./ProgressBar-CQgH6jU2.js";import{T as W}from"./Text-BnII0mKt.js";import{B as h}from"./Button-DGbEpLIN.js";import{C as j,n as B}from"./IconWarning-BGRYHRhg.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DbaVCiQx.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./index-DJ6wSCwd.js";import"./AlertIcon-B9fJ359s.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./context-CfMfa2C9.js";import"./Image-B-kiAWRg.js";import"./Link-BIzdt31l.js";import"./utils-C1fpOvwY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C6GqelOx.js";import"./usePress-DMR80VPZ.js";import"./useFocusRing-Byzp35A7.js";import"./useFocusable-8bvqGkWP.js";import"./OptionsButton-DtJcN8ku.js";import"./ButtonView-CL1jDIH8.js";import"./ContextMenuTriggerView-Bqqkx99G.js";import"./ActionBatch-BfjBVLTQ.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./browser-CmbZy-PD.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./dynamic-C8CcPw_G.js";import"./Popover-DlFp-eS3.js";import"./OverlayContextProvider-tFRc17qj.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./useLabel-mobDYg92.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-DXUT3Wo8.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./Text-B3xsuc84.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";import"./Switch-DO-T4Vyb.js";import"./useFieldComponent-DjSvrfgm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-dw2qq8cb.js";import"./useFormReset-VwcIZGsw.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./OverlayTrigger-B4TdY9D0.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CEGnL0yH.js";import"./EmulatedBoldText-D6xSemQT.js";import"./remote-WwxW7fyl.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ee={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
