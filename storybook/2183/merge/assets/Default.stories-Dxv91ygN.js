import{j as r,r as F}from"./iframe-DpK2T2Nf.js";import{L as l}from"./Label-Dg6bYAOF.js";import{q as t,v as f,g as h}from"./TimeField-BgQf6oTj.js";import{B as o}from"./Button-KfPOVuM-.js";import{S as x}from"./Section-kGcYQ44e.js";import{g as S,B as j}from"./IconWarning-Cg4y-Lel.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hxBwTeBf.js";import"./mergeRefs-dZVNHuSH.js";import"./index-Cxqu85Zl.js";import"./useLocalizedStringFormatter-CTYggBE6.js";import"./context-CrPZXd5J.js";import"./ProgressBar-BP1RROy1.js";import"./utils-5sSs2C2Q.js";import"./Hidden-BSBCwIf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-AedciLQh.js";import"./dynamic-CdnvgWlT.js";import"./ActionGroup-CLHBsVX4.js";import"./Alert-DHDG4MsT.js";import"./AlertIcon-05dXw9V_.js";import"./AlertBadge-CiTXQfnp.js";import"./Text-ClluuiBD.js";import"./browser-Ckyi0rpL.js";import"./EmulatedBoldText-Bc0AgoG-.js";import"./Align-BSBJJ5zM.js";import"./Popover-BkpsMHU6.js";import"./context-CPEq1qsE.js";import"./Button--HL08e3g.js";import"./useFocusRing-XJTDMv14.js";import"./useFocusable-BDOA7VsR.js";import"./RSPContexts-7V3qTNb_.js";import"./Collection-C-I12dkD.js";import"./CollectionBuilder-DnacpWim.js";import"./SelectionIndicator-D-pfjXW7.js";import"./Separator-Dg6KLd5_.js";import"./useStatic-3aliboqk.js";import"./OverlayTrigger-Dvz2NSVn.js";import"./TableFooterRow-CnVEUuwp.js";import"./SkeletonText-DSV460fR.js";import"./Avatar-BrVjDT-U.js";import"./AvatarStack-45n5MqLA.js";import"./Badge-DcxmWiGs.js";import"./BigNumber-Cq7hcHwo.js";import"./Breadcrumb-B1G9czV2.js";import"./Link-CNUblXN_.js";import"./Heading-CcD2dsF3.js";import"./Legend-CEh7Zw0y.js";import"./FileCardList-vN5JX68X.js";import"./Image-C1ftWFwl.js";import"./Color-DQzo7sAT.js";import"./Content-9dvKA7Z7.js";import"./ContextualHelpTrigger-CBiXLQUX.js";import"./CounterBadge-C-xbOE4o.js";import"./remote-Cox__P30.js";import"./DonutChart-DJ670UUe.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCNzeETN.js";import"./Header-eZj9M83o.js";import"./Initials-DhFZ0NCC.js";import"./InlineCode-08Yq6ux1.js";import"./PopoverTrigger-DK96Ugpl.js";import"./LoadingSpinner-BQl4MMkz.js";import"./Separator-EDbsgt1x.js";import"./Message-C8l33cRQ.js";import"./MessageSeparator-B4es_r1t.js";import"./NavigationGroup-CzqtYd5z.js";import"./Notification-DFv7qa6j.js";import"./NotificationProvider-mo_Pr_YX.js";import"./ProgressBar-COfErnlM.js";import"./Rating-BjEvYZAj.js";import"./Skeleton-Dv7muKa-.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};const Ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Ar as __namedExportsOrder,zr as default};
