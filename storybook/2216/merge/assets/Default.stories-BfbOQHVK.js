import{j as r,r as F}from"./iframe-Y3MbZLc0.js";import{L as l}from"./Label-D2MFjXEF.js";import{q as t,v as f,g as h}from"./TimeField-CWtTlsNI.js";import{B as o}from"./Button-C-4kPg6X.js";import{S as x}from"./Section-DS5qZGJz.js";import{g as S,C as j}from"./IconWarning-B3PcMPJB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./context-CS7ddlXF.js";import"./ProgressBar-B7UD30wQ.js";import"./utils-DRnq9lS5.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-C3ab7gKh.js";import"./dynamic-D67dccmA.js";import"./ActionGroup-DetklLoF.js";import"./Alert-DGdBp0Eo.js";import"./AlertIcon-CV8NrYRI.js";import"./AlertBadge-BQxMpKlM.js";import"./Text-C_4wJYC6.js";import"./browser-BiLdcyq-.js";import"./EmulatedBoldText-C3IQk-9R.js";import"./Align-BI2gFG3T.js";import"./Popover-DQwwR1G3.js";import"./context-Bj7ZL7Rk.js";import"./Button-kcvbJBhw.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./RSPContexts-q4i_V3tQ.js";import"./Collection-DMnM_9G9.js";import"./CollectionBuilder-B_T5ko0u.js";import"./SelectionIndicator-BaXUje1t.js";import"./Separator-BiaSXazW.js";import"./useStatic-DqJeeTMW.js";import"./OverlayTrigger-DWI1tl1b.js";import"./TableFooterRow-WmviDJs1.js";import"./SkeletonText-D89UTzJX.js";import"./Avatar-ClOnDFiI.js";import"./AvatarStack-LuIFslnX.js";import"./Badge-sRwXs_wN.js";import"./BigNumber-B2Z2Bi5y.js";import"./Breadcrumb-OZ807_4G.js";import"./Link-Dl5kPNf7.js";import"./Heading-CVXAzirZ.js";import"./Legend-U_MA1DUY.js";import"./FileCardList-BkZP918B.js";import"./Image-DljHCxEH.js";import"./Color-BW8N49ms.js";import"./Content-NPMXk3zl.js";import"./ContextualHelpTrigger-k9oKfs6T.js";import"./CounterBadge-ElqKVlu2.js";import"./DonutChart-CfanPbqv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-H20k2GzK.js";import"./Header-6_4AGJd2.js";import"./Initials-rKtrsRfb.js";import"./InlineCode-C13LZBrn.js";import"./PopoverTrigger-7Z8GTvAL.js";import"./LoadingSpinner-6Ne33LZp.js";import"./Separator-CfxO9pZu.js";import"./Message-BuSi_X0q.js";import"./MessageSeparator-DkBtqTdi.js";import"./NavigationGroup-BWGcL5Rx.js";import"./Notification-CsliJkcB.js";import"./NotificationProvider-amexuwTh.js";import"./ProgressBar-Dct_JOoN.js";import"./Rating-DUI-p2zk.js";import"./Skeleton-CH0G6v9C.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const zr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,zr as __namedExportsOrder,wr as default};
