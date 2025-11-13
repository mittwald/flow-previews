import{j as e}from"./iframe-DBT7gULD.js";import{d as o}from"./FileCardList-DKqY5nDG.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{g as D,h as f}from"./Modal-BDM5GHUs.js";import"./Section-D6BoVeKj.js";import{L as C}from"./Label-CB-Jrcob.js";import{P as S}from"./ProgressBar-DwVQ0bzm.js";import{T as W}from"./Text-BcenBV84.js";import{B as h}from"./Button-CCcVMCFh.js";import{F as j,c as B}from"./IconWarning-BUJnRJXc.js";import"./index-nuYtCEEu.js";import"./Avatar-D4XiVYbq.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./index-pYm4_kYT.js";import"./AlertIcon-B2G5YJ_h.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./Image-DK0DVEvL.js";import"./Link-hErBzw1I.js";import"./utils-D0uB-Zwx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./context-D6D-GlPg.js";import"./Button-C-UpDsRO.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./RSPContexts-Dom4UWqx.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";import"./browser-DvkhEBxs.js";import"./useStatic-CqxwceTm.js";import"./ControlledNotification-BggQqaRM.js";import"./dynamic-DeRu_afx.js";import"./LoadingSpinner-UyNbbNkS.js";import"./LayoutCard-yF4LQl2s.js";import"./Accordion-DbrfaGK3.js";import"./ActionGroup-BaRaSr0H.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./Alert-BVpQpQXk.js";import"./AlertBadge-C-4v8xNv.js";import"./Align-DkyK3rk7.js";import"./AvatarStack-5oER6YSZ.js";import"./BigNumber-ByEBpfDg.js";import"./Breadcrumb-C9tjsQdJ.js";import"./Heading-CxhJw16G.js";import"./Legend-BSuRheR8.js";import"./Color-CfsSCbKc.js";import"./TableFooterRow-B5ePBGv6.js";import"./SkeletonText-yAbLh4O6.js";import"./Content-BNSFZdxK.js";import"./CounterBadge-C-EdT-Ua.js";import"./DonutChart-BfLW1k2r.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CCV8_Obm.js";import"./Header-DF0mjguX.js";import"./Initials-CLL_WJIt.js";import"./InlineCode-CHkCj2DF.js";import"./Separator-DSZggq8J.js";import"./MessageSeparator-DKc-7GUt.js";import"./NavigationGroup-CtWNzX63.js";import"./Notification-CgJLhaIj.js";import"./NotificationProvider-BBWQX6wG.js";import"./Rating-DhxcEvbm.js";import"./Skeleton-HhO4ThtG.js";import"./EmulatedBoldText-Cn-N7_G4.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
