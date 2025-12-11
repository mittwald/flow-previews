import{j as r,r as F}from"./iframe-Bo-CC4om.js";import{L as l}from"./Label-DRQE_3kZ.js";import{q as t,v as f,g as h}from"./TimeField-C-GOyraa.js";import{B as o}from"./Button-DsbAYxy6.js";import{S as x}from"./Section-BSzb61PI.js";import{g as S,B as j}from"./IconWarning-B7qIXHf5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./ProgressBar-1VAtpU2v.js";import"./utils-BE4vzmGc.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-9Le9yhf_.js";import"./dynamic-DI9mkNr1.js";import"./ActionGroup-DmuV-_zy.js";import"./Alert-Dt_4j8QW.js";import"./AlertIcon-mGxxCUjy.js";import"./AlertBadge-BIsElKxu.js";import"./Text-FWtYFqa_.js";import"./browser-CQUdwXOL.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./Align-2Rvfe-vL.js";import"./Popover-CuQlxumw.js";import"./context-Dp75aXTI.js";import"./Button-DEzwtm5X.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./useStatic-CUzdYRpB.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./TableFooterRow-rYWUUYPE.js";import"./SkeletonText-Cawt_Liw.js";import"./Avatar-DZgOazPv.js";import"./AvatarStack-CK7V-CZy.js";import"./Badge-KHAUUQ1g.js";import"./BigNumber-BPcM1V5W.js";import"./Breadcrumb-BdPm70-C.js";import"./Link-Cjmbqaeu.js";import"./Heading-BHjCTnZi.js";import"./Legend-BJJJjizN.js";import"./FileCardList-Ns0-bzlM.js";import"./Image-DWyBIzwU.js";import"./Color-B9W2SphA.js";import"./Content-DkmAOWWJ.js";import"./ContextualHelpTrigger-qV88HZ0Q.js";import"./CounterBadge-DrxirSEd.js";import"./remote-B4cOsRJO.js";import"./DonutChart-r4Ym1MHi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvV3W6_m.js";import"./Header-DX79Odlg.js";import"./Initials-c31qSACO.js";import"./InlineCode-WgY9VQ0d.js";import"./PopoverTrigger--EGMIntl.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Separator-Tuz6Qj0k.js";import"./Message-DwvTL-MT.js";import"./MessageSeparator-BmmOSADd.js";import"./NavigationGroup-BfArZJF_.js";import"./Notification-CxiWXGjP.js";import"./NotificationProvider-ev7yt2lS.js";import"./ProgressBar-Y54IGAK3.js";import"./Rating-D6chMOWs.js";import"./Skeleton-Bnf_ayGA.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
