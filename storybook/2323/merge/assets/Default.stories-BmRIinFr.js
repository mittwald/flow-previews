import{j as e}from"./iframe-CIhdjqSz.js";import{F as o}from"./FileCard-JbG_KYRl.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{C as D,M as f}from"./MenuItem-JBoS3pEj.js";import"./ContextMenuTrigger-CCML0O9_.js";import"./ContextMenuSection-B32Hv_M2.js";import{L as C}from"./Label-DvNJKWaN.js";import{P as S}from"./ProgressBar-h7Lv1aFt.js";import{T as W}from"./Text-DgrqnOua.js";import{B as h}from"./Button--NFWCTgK.js";import{C as j,n as B}from"./IconWarning-NrGPSND5.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-dxv8AFxx.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./index-D2Zvq_HV.js";import"./AlertIcon-DlNCugjU.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./context-C9Id__Ro.js";import"./Image-BDWGEQ5x.js";import"./Link-PpAdeeeE.js";import"./utils-3Ll5mTsj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CB1MjZml.js";import"./usePress-BAXbDaCF.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./OptionsButton-Bv344USv.js";import"./ButtonView-DCesTJ_4.js";import"./ContextMenuTriggerView-ChKMmT80.js";import"./ActionBatch-DvjVnKvH.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./browser-BTfojbbK.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./dynamic-DC2aGj60.js";import"./Popover-BtssMKQJ.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./useLabel-wcYinYgg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./Text-BWZGL9q7.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./VisuallyHidden-Szd7uPuS.js";import"./Switch-C36cgj48.js";import"./useFieldComponent-BDBEatho.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BgmV9dKe.js";import"./useFormReset-CCc0UGFI.js";import"./LoadingSpinner-CnQRgWlh.js";import"./OverlayTrigger-DlE73CJz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CnNTR2wR.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./remote-C6ukCFNy.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ee={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
