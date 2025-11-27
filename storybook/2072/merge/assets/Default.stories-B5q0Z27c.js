import{j as r,r as F}from"./iframe-DP8YDTL2.js";import{L as l}from"./Label-DHXZY79j.js";import{q as t,v as f,g as h}from"./TimeField-B4EG23Nt.js";import{B as o}from"./Button-B0W1yT72.js";import{S as x}from"./Section-Co64I5rb.js";import{g as S,C as j}from"./IconWarning-Bww0inpG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3HMXUKZ.js";import"./mergeRefs-DsuNZd-H.js";import"./index-CpbCmUJ7.js";import"./useLocalizedStringFormatter-CJMUKkFM.js";import"./context-02tevN2j.js";import"./ProgressBar-tqMwcDQP.js";import"./utils-Dm1zmrBW.js";import"./Hidden-DNrH43oS.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-HcBanqJd.js";import"./dynamic-BTJXp5gG.js";import"./ActionGroup-H4Md62tw.js";import"./Alert-rrP5Gy9B.js";import"./AlertIcon-DVh6pESV.js";import"./AlertBadge-DweOtEPJ.js";import"./Text-D-QDVbYg.js";import"./browser-SpSM5C6g.js";import"./EmulatedBoldText-Crt4TFM2.js";import"./Align-BxTc4ez8.js";import"./Popover-CQf2aBwQ.js";import"./context-BtDomXbz.js";import"./Button-DyaOfmyD.js";import"./useFocusRing-DixPSib4.js";import"./useFocusable-CgaYGH8g.js";import"./RSPContexts-BogeclaT.js";import"./Collection-CPT1vu3H.js";import"./CollectionBuilder-Dz9u6crH.js";import"./SelectionIndicator-YAID1d9m.js";import"./Separator-BJVU84qu.js";import"./useStatic-oAu8wkWB.js";import"./OverlayTrigger-B2YRG83_.js";import"./TableFooterRow-DOkZ36FW.js";import"./SkeletonText-DYVowVbT.js";import"./Avatar-CRCuFFh3.js";import"./AvatarStack-CxmOjPug.js";import"./Badge-DB4ZdCrx.js";import"./BigNumber-Cgbcuj9W.js";import"./Breadcrumb-B-drEY1z.js";import"./Link-DgZD2-cc.js";import"./Heading-DQ_JsPVE.js";import"./Legend-CfYbvXbX.js";import"./FileCardList-BkjUaEeO.js";import"./Image-Ckc0BKol.js";import"./Color-CCS7cSNH.js";import"./Content-6_dFeFDF.js";import"./ContextualHelpTrigger-BADDKsT4.js";import"./CounterBadge-CLIpLOvV.js";import"./DonutChart-Bhgjv56J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8Deauvc.js";import"./Header-Ba8EoW9O.js";import"./Initials-DulEZZDu.js";import"./InlineCode-B5Ery-yk.js";import"./PopoverTrigger-BJQfALxW.js";import"./LoadingSpinner-CpfR1KV-.js";import"./Separator-KhxpKn3e.js";import"./Message-DCnkeZUC.js";import"./MessageSeparator-D1DZsiYE.js";import"./NavigationGroup-BUzA88tA.js";import"./Notification-cR9AaDvT.js";import"./NotificationProvider-Ci8ufUj9.js";import"./ProgressBar-BocbUUX5.js";import"./Rating-lsHc3-9S.js";import"./Skeleton-CLwkgNOY.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
