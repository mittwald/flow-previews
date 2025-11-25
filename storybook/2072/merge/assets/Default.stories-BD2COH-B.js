import{j as e}from"./iframe-Bro-TRXt.js";import{d as o}from"./FileCardList-BvhGAyCg.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{g as D,h as f}from"./Modal-BAz5qoSA.js";import"./Section-CKMH18Z5.js";import{L as C}from"./Label-pkq-FNbp.js";import{P as S}from"./ProgressBar-Cn62z-v9.js";import{T as W}from"./Text-B-OG_Rvj.js";import{B as h}from"./Button-BNo0n626.js";import{F as j,c as B}from"./IconWarning-ZXxnaCRz.js";import"./index-nuYtCEEu.js";import"./Avatar-CpIxO7l4.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGhBjY7C.js";import"./index-BTAhO2ke.js";import"./index-Dv_aaVf5.js";import"./AlertIcon-BdNXmUtu.js";import"./useLocalizedStringFormatter-7nMsqE9H.js";import"./context-oX2aAP76.js";import"./Image-Bz5j-oXf.js";import"./Link-B4JntqcC.js";import"./utils-D8amqiwx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D0VZgEB2.js";import"./useFocusable-CZGxuR_3.js";import"./context-DwPS9Zpq.js";import"./Button-DWgdDAXN.js";import"./ProgressBar--uLuv8cx.js";import"./Hidden-B42NMqJG.js";import"./RSPContexts-Wp0EcsrM.js";import"./Collection-CYc71k62.js";import"./CollectionBuilder-CI1hg_cw.js";import"./SelectionIndicator-D-s_o7Qk.js";import"./Separator-BuskP0K-.js";import"./browser-BxJL1VR2.js";import"./useStatic-D7gqpLQ0.js";import"./ControlledNotification-DXrTnOuI.js";import"./dynamic-DkblynAy.js";import"./LoadingSpinner--4B2tKnD.js";import"./Flex-T77zVCqz.js";import"./Accordion-DhsRg8DT.js";import"./ActionGroup-z-m9HiSR.js";import"./Alert-rw15k5_3.js";import"./AlertBadge-BSU1Y84l.js";import"./Align-CRqQdHdC.js";import"./AvatarStack-Hi6fzEFf.js";import"./BigNumber-CuSywnor.js";import"./Breadcrumb-B3OUi1q-.js";import"./Heading-Dja--NLn.js";import"./Legend-BF5dTZhq.js";import"./Color-BbW_7Fl-.js";import"./TableFooterRow-BWpGavXP.js";import"./SkeletonText-C_FVkMiy.js";import"./Content-DoFaAGQT.js";import"./CounterBadge-DnkcQuYH.js";import"./DonutChart-CGXbZnO6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BMKLJb1J.js";import"./Header-BBPSlw9V.js";import"./Initials-DpnqvnKg.js";import"./InlineCode-Cs1b_Cap.js";import"./LayoutCard-DTXM4eOW.js";import"./Separator-CYXscYsC.js";import"./MessageSeparator-D0goDhVZ.js";import"./NavigationGroup-6he7-QRX.js";import"./Notification-C1IUJMls.js";import"./NotificationProvider-BO0E7EIH.js";import"./Rating-DnR4ClCl.js";import"./Skeleton-NzyvVlYM.js";import"./EmulatedBoldText-CJ_mmdOc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Ee=["Default","WithType","WithSize","WithOnDelete","WithLink","WithLinkAndOnDelete","WithContextMenu","WithImage","WithProgressBar","Failed","WithButtons"];export{n as Default,u as Failed,g as WithButtons,c as WithContextMenu,d as WithImage,m as WithLink,p as WithLinkAndOnDelete,i as WithOnDelete,l as WithProgressBar,a as WithSize,s as WithType,Ee as __namedExportsOrder,Ae as default};
