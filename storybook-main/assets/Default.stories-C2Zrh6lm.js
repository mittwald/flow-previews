import{j as r,r as F}from"./iframe-GdgkclWs.js";import{L as l}from"./Label-ChEMpQPE.js";import{q as t,v as f,g as h}from"./TimeField-CVigSgag.js";import{B as o}from"./Button-B0JEmBNK.js";import{S as x}from"./Section-VLscJ2rL.js";import{g as S,C as j}from"./IconWarning-CGOSGhfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CVn6a-Br.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./context-G4rNg2r5.js";import"./ProgressBar-BByvzxb3.js";import"./utils-DoU55v00.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-CIHbFerH.js";import"./dynamic-PnYMfd4f.js";import"./ActionGroup-C82CNpK6.js";import"./Alert-Ghfdqzqq.js";import"./AlertIcon-BHK-Daud.js";import"./AlertBadge-B0j6vp5K.js";import"./Text-Cto25n51.js";import"./browser-CClwHdx_.js";import"./EmulatedBoldText-Ddlneh35.js";import"./Align-D7FVyJEv.js";import"./Popover-DCEEmw0P.js";import"./context-C_Ye8hEJ.js";import"./Button-9ssRHwLo.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./RSPContexts-Ih3Q_XqN.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./useStatic-CV3hAC_1.js";import"./OverlayTrigger-FDfyad1h.js";import"./TableFooterRow-DkhcovOF.js";import"./SkeletonText-BC3QvNYs.js";import"./Avatar-BdEExudS.js";import"./AvatarStack-D83q2IaA.js";import"./Badge-CULYHS4O.js";import"./BigNumber-CQ1o5YVg.js";import"./Breadcrumb-Bmgceg6h.js";import"./Link-D6Y7USyN.js";import"./Heading-C8_gRcPp.js";import"./Legend-814CjWqc.js";import"./FileCardList-u01e7SGm.js";import"./Image-DvuZYehV.js";import"./Color-C5h7DqqR.js";import"./Content-JCMb0S3J.js";import"./ContextualHelpTrigger-xDG4yDFQ.js";import"./CounterBadge-gaV0X7ON.js";import"./DonutChart-DGD5BRbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dt1P96u5.js";import"./Header-Dg8MvpqU.js";import"./Initials-5h9DQSHl.js";import"./InlineCode-B9Q3OiFc.js";import"./PopoverTrigger-BDzk5u7s.js";import"./LoadingSpinner-ChMWC-CB.js";import"./Separator-i6qBYsms.js";import"./Message-CeGAy6Zn.js";import"./MessageSeparator-CRScGEmn.js";import"./NavigationGroup-CdsshAOA.js";import"./Notification-B5P2NapB.js";import"./NotificationProvider-DTKoqy3M.js";import"./ProgressBar-8ZDZDqcE.js";import"./Rating-BSkiv03r.js";import"./Skeleton-CcRzeFAV.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
