import{j as r,r as F}from"./iframe-Can218wR.js";import{L as l}from"./Label-B5Ra9wZk.js";import{q as t,v as f,g as h}from"./TimeField-Qf6H4lnp.js";import{B as o}from"./Button-AcWb1Ypk.js";import{S as x}from"./Section-BTVZhucR.js";import{g as S,B as j}from"./IconWarning-BNaFuPnH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./context-DZl3H9Sd.js";import"./ProgressBar-C-KA2KcW.js";import"./utils-BpZeyfMN.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-BgJpPLeZ.js";import"./dynamic-B5g7bVbH.js";import"./ActionGroup-D5JFk098.js";import"./Alert-DNx5xnLB.js";import"./AlertIcon-BzlU70Rb.js";import"./AlertBadge-BHQgXXA1.js";import"./Text-C2o8kJX0.js";import"./browser-BKQSdhjf.js";import"./EmulatedBoldText-CmVjk4cf.js";import"./Align-Axes71gv.js";import"./Popover-DKl9KM4_.js";import"./context-a0yvmfmj.js";import"./Button-DOjUwuNT.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./RSPContexts-DDMcPOu0.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./useStatic-s9qeAkES.js";import"./OverlayTrigger-B0hM9LOB.js";import"./TableFooterRow-Cft_Is3v.js";import"./SkeletonText-Bw7qmtCY.js";import"./Avatar-BfkdzloE.js";import"./AvatarStack-ipC9pyUN.js";import"./Badge-DMgarT1o.js";import"./BigNumber-Bw32ey4C.js";import"./Breadcrumb-DBxV6kjL.js";import"./Link-DNZxb3XI.js";import"./Heading-8IBs5lHH.js";import"./Legend-DjesrZkx.js";import"./FileCardList-DQKgLEdB.js";import"./Image-AqS4biBk.js";import"./Color-DxWZJ5ge.js";import"./Content-Dbq5WHJl.js";import"./ContextualHelpTrigger-B581tVEc.js";import"./CounterBadge-D_w8ES0b.js";import"./remote-CHcOizPe.js";import"./DonutChart-CbLkgRTJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bu8mFA12.js";import"./Header-6r5jIFQ1.js";import"./Initials-Bv13zVwh.js";import"./InlineCode-TSvlP2S4.js";import"./PopoverTrigger-Dwaqs-tN.js";import"./LoadingSpinner-kXbrPTzW.js";import"./Separator-peM-T1F1.js";import"./Message-DlbPq8DG.js";import"./MessageSeparator-RZcHNTnk.js";import"./NavigationGroup-Ccyet6Sq.js";import"./Notification-Bij5M0u6.js";import"./NotificationProvider-Cyooz_pt.js";import"./ProgressBar-DTzdfFR4.js";import"./Rating-BMsAHHGJ.js";import"./Skeleton-Fu0f40Js.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
