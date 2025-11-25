import{j as e}from"./iframe-DGpdmZy6.js";import{d as o}from"./FileCardList-CKzDrmKJ.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{g as D,h as f}from"./Modal-k3eojm_4.js";import"./Section-OXIXjQEc.js";import{L as C}from"./Label-PpyRVBZT.js";import{P as S}from"./ProgressBar-CeifPY35.js";import{T as W}from"./Text-BXzwFxO1.js";import{B as h}from"./Button--Vm3DJA2.js";import{F as j,c as B}from"./IconWarning-D9ML-GA0.js";import"./index-nuYtCEEu.js";import"./Avatar-DVvgb2Xm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQEf5M_T.js";import"./index-De-tUa4b.js";import"./index-CrYgLF30.js";import"./AlertIcon-Bwvtphoy.js";import"./useLocalizedStringFormatter-Zkj79Hgs.js";import"./context-GZA4a4Iz.js";import"./Image-Cn_QWKsO.js";import"./Link-CguFfPfy.js";import"./utils-CfRYmgOV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B3OG5RkS.js";import"./useFocusable-CIlqLEIw.js";import"./context-BFV2yP4B.js";import"./Button-CcaaVk2n.js";import"./ProgressBar-BRkbw9Mx.js";import"./Hidden-DBVn3F7o.js";import"./RSPContexts-C3hd5u3G.js";import"./Collection-vhKnWwMf.js";import"./CollectionBuilder-B9NCAwqd.js";import"./SelectionIndicator-xePv5RSf.js";import"./Separator-F2jO3kT9.js";import"./browser-B8HytOQQ.js";import"./useStatic-BZw01sJd.js";import"./ControlledNotification-rPJOiTKo.js";import"./dynamic-DNRDSutR.js";import"./LoadingSpinner-D-s3tm4d.js";import"./Flex-FXUr_mGC.js";import"./Accordion-CLpjyq9Z.js";import"./ActionGroup-BO_R-HXV.js";import"./Alert-DXCJPXtD.js";import"./AlertBadge-BuTdg19f.js";import"./Align-6bfVl_L9.js";import"./AvatarStack-B9hL9-8U.js";import"./BigNumber-BDnXKUew.js";import"./Breadcrumb-DERgwsy8.js";import"./Heading-D9ExrM7H.js";import"./Legend-C45L9tw3.js";import"./Color-CLgKnwGx.js";import"./TableFooterRow-D497U3pl.js";import"./SkeletonText-Ct2YzDKK.js";import"./Content-DYEeGbNd.js";import"./CounterBadge-DkSRGtKd.js";import"./DonutChart-DANJLMjV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BJrTxMO1.js";import"./Header-D_phYTs8.js";import"./Initials-IbErwSCF.js";import"./InlineCode-DttkcdFo.js";import"./LayoutCard-BmKEOMGc.js";import"./Separator-F4fQOqnh.js";import"./MessageSeparator-ZxZNVJUN.js";import"./NavigationGroup-Ci_EZV7N.js";import"./Notification-m02SjDLR.js";import"./NotificationProvider-C2jvC1ES.js";import"./Rating-DvaCapzL.js";import"./Skeleton-CQJ_ScCC.js";import"./EmulatedBoldText-CnA6n1pz.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ae={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
