import{j as r,r as F}from"./iframe-D7uC-7V_.js";import{L as l}from"./Label-y1KlwDdZ.js";import{q as t,v as f,g as h}from"./TimeField-ChKcnSkk.js";import{B as o}from"./Button-DiCPbDhS.js";import{S as x}from"./Section-CzjrUr3W.js";import{g as S,C as j}from"./IconWarning-BCNTNt6q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D6ETz4eO.js";import"./mergeRefs-B2M5WDOC.js";import"./index-Bd9v0Vhf.js";import"./useLocalizedStringFormatter-CCpeSzbu.js";import"./context-77px_zVw.js";import"./ProgressBar-BjaQZGPw.js";import"./utils-DGPkAfM6.js";import"./Hidden-B7ytCKiH.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-Bnn1T4u6.js";import"./dynamic-osoyJDTl.js";import"./ActionGroup-BnlrcjLF.js";import"./Alert-YZV9z460.js";import"./AlertIcon-BcCRWTe9.js";import"./AlertBadge-BebrPRF6.js";import"./Text-BiV92KiG.js";import"./browser-BKGMjSP-.js";import"./EmulatedBoldText-Dg54gE_i.js";import"./Align-C8k1XZam.js";import"./Popover-Dwlz0jk0.js";import"./context-DmsiyyTB.js";import"./Button-Djt7NA3M.js";import"./useFocusRing-DNcE5kU2.js";import"./useFocusable-0BAeD1Xf.js";import"./RSPContexts-DX_a6o14.js";import"./Collection-DSbN1ly0.js";import"./CollectionBuilder-B1mZ5m8d.js";import"./SelectionIndicator-BfrUmlWT.js";import"./Separator-CvniWKxN.js";import"./useStatic-Bxi8RVTv.js";import"./OverlayTrigger-H7UlFHIL.js";import"./TableFooterRow-CJIkUPOT.js";import"./SkeletonText-WMJJ6TP-.js";import"./Avatar-BotNt0IR.js";import"./AvatarStack-kQt2Mvuu.js";import"./Badge-CY7C5Oi3.js";import"./BigNumber-DM5XNeaC.js";import"./Breadcrumb-LvGcUQcP.js";import"./Link-jcFfsHJW.js";import"./Heading-f_QLDsgR.js";import"./Legend-D_JnQBhX.js";import"./FileCardList-zUXBvT8Y.js";import"./Image-C-Vme5-k.js";import"./Color-B6fplESU.js";import"./Content-B1NGoO5F.js";import"./ContextualHelpTrigger-CXOGuB9Y.js";import"./CounterBadge-XdhpMb79.js";import"./DonutChart-D8VWCFcu.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r5k0CWyC.js";import"./Header-KGEBRUvg.js";import"./Initials-CcLnKcuF.js";import"./InlineCode-ZcnGdcwH.js";import"./PopoverTrigger-CjKyKtrA.js";import"./LoadingSpinner-VIxuY4J8.js";import"./Separator-BtJYxtfR.js";import"./Message-BWOh6QKG.js";import"./MessageSeparator-D2bkHsuQ.js";import"./NavigationGroup-C4DQiXAl.js";import"./Notification-wte0OMcO.js";import"./NotificationProvider-BJj6x8o-.js";import"./ProgressBar-B2IIvRjr.js";import"./Rating-CT5Wuzie.js";import"./Skeleton-CMKH9Nqe.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
