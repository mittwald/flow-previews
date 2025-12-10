import{j as r,r as F}from"./iframe-BaRURXeF.js";import{L as l}from"./Label-CpPOvDoZ.js";import{q as t,v as f,g as h}from"./TimeField-DEmi22Cp.js";import{B as o}from"./Button-BjAgJLRT.js";import{S as x}from"./Section-CfuTaxA1.js";import{g as S,B as j}from"./IconWarning-G7PHo1OD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKQsAkKj.js";import"./mergeRefs-CGRzoa_B.js";import"./index-BhlYqO80.js";import"./useLocalizedStringFormatter-yUHQIKaT.js";import"./context-CYqmZhth.js";import"./ProgressBar-CbCQbUzb.js";import"./utils-DLb-qyNT.js";import"./Hidden-4QxVQfrM.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-DkBEZ7j6.js";import"./dynamic-LiyYElAE.js";import"./ActionGroup-BqTo77Ty.js";import"./Alert-RHiIiWHO.js";import"./AlertIcon-C9siGvOC.js";import"./AlertBadge-CBeycHMc.js";import"./Text-BMdRX-ix.js";import"./browser-CM47kAFn.js";import"./EmulatedBoldText-DsXTzWmB.js";import"./Align-DsDp8vGU.js";import"./Popover-DoWZP4BQ.js";import"./context-CODOobiJ.js";import"./Button-DbzxAUZp.js";import"./useFocusRing-Yd8LsoRn.js";import"./useFocusable-Dn7zfyGG.js";import"./RSPContexts-DmKb4WxY.js";import"./Collection-43nLtjEw.js";import"./CollectionBuilder-Dy7CTaNG.js";import"./SelectionIndicator-BZ3vqlEj.js";import"./Separator-cqbaw05v.js";import"./useStatic-CNK9zRwr.js";import"./OverlayTrigger-DFb3iraJ.js";import"./TableFooterRow-BxDD7_XF.js";import"./SkeletonText-Bt_cfZBE.js";import"./Avatar-1SCvSi8v.js";import"./AvatarStack-DuV7PUnh.js";import"./Badge-DRN_LKUg.js";import"./BigNumber-Ci6wTEcF.js";import"./Breadcrumb-Bd90eB5U.js";import"./Link-CWq94S9a.js";import"./Heading-BwlLLsXH.js";import"./Legend-D_JENtdo.js";import"./FileCardList-3twRSReA.js";import"./Image-B_c5xt_D.js";import"./Color-DkHd8LXz.js";import"./Content-XdBLbNrv.js";import"./ContextualHelpTrigger-HbivXqDu.js";import"./CounterBadge-w2O-pKbc.js";import"./remote-EuXJkqzN.js";import"./DonutChart-ijRk1-wk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dbt83k4-.js";import"./Header-BQdYbaW-.js";import"./Initials-CE2vMNu3.js";import"./InlineCode-CvuJDjkP.js";import"./PopoverTrigger-Brf0WlCq.js";import"./LoadingSpinner-BDiYNwtM.js";import"./Separator-BCTCUtVH.js";import"./Message-xiisQYm4.js";import"./MessageSeparator-DUGderQ8.js";import"./NavigationGroup-Q3YJa56w.js";import"./Notification-BRKgriQg.js";import"./NotificationProvider-CiuSUFHe.js";import"./ProgressBar-xPSdXL8f.js";import"./Rating-BSWRSES9.js";import"./Skeleton-Cmq3II1T.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
