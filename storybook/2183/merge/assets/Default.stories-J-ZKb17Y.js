import{j as r,r as F}from"./iframe-DJotDYDy.js";import{L as l}from"./Label-DswoIiqU.js";import{q as t,v as f,g as h}from"./TimeField-BlAfO89Z.js";import{B as o}from"./Button-CQDQfA67.js";import{S as x}from"./Section-Bz15vzU3.js";import{g as S,B as j}from"./IconWarning-B2TzUZi8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C8D7pSNe.js";import"./mergeRefs-TkKWhRS-.js";import"./index-ebT-aqWZ.js";import"./useLocalizedStringFormatter-BEYdlta5.js";import"./context-BRylSH4L.js";import"./ProgressBar-Bd3Cq33t.js";import"./utils-C6pspRr_.js";import"./Hidden-W-9e78A-.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-zR5eFsCn.js";import"./dynamic-D8klVav1.js";import"./ActionGroup-C7fdOZLN.js";import"./Alert-DLOSTbSN.js";import"./AlertIcon-CudStmFb.js";import"./AlertBadge-hHuvqtIQ.js";import"./Text-D93KUIkM.js";import"./browser-D3MZEWQb.js";import"./EmulatedBoldText-DL9TulOO.js";import"./Align-Dk0iJg5X.js";import"./Popover-CTYLH_EU.js";import"./context-OUVwQ3_j.js";import"./Button-Dv79gn0L.js";import"./useFocusRing-C6VIijHL.js";import"./useFocusable-CiM2gaeN.js";import"./RSPContexts-CU0-oOpl.js";import"./Collection-BohX5TfD.js";import"./CollectionBuilder-BdsPzAgw.js";import"./SelectionIndicator-CS7AIL_l.js";import"./Separator-D2bXbcR5.js";import"./useStatic-Dv4cIFiB.js";import"./OverlayTrigger-Ba9XbFcO.js";import"./TableFooterRow-DVt43RQ5.js";import"./SkeletonText-Ca5w9B9h.js";import"./Avatar-CanBm8d9.js";import"./AvatarStack-CkGqbJia.js";import"./Badge-D6gkAHgL.js";import"./BigNumber-CoSdM1jp.js";import"./Breadcrumb-OJI6AK0i.js";import"./Link-Br48FmRg.js";import"./Heading-C_Kr3DP-.js";import"./Legend-BG_Ok682.js";import"./FileCardList-BHXDHcva.js";import"./Image-DuNd2GJV.js";import"./Color-DSNVJGOK.js";import"./Content-Cmsz75X5.js";import"./ContextualHelpTrigger-C6QZhAxg.js";import"./CounterBadge-DIAsQ6Mo.js";import"./remote-C1ZUFjaQ.js";import"./DonutChart-CDa6nqpQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CShNVj2X.js";import"./Header-LVC8PwXi.js";import"./Initials-Dpb5-Mu6.js";import"./InlineCode-CS-pupFg.js";import"./PopoverTrigger-CTOjZswe.js";import"./LoadingSpinner-C00dVMXY.js";import"./Separator-DdvEDZlm.js";import"./Message-BphMRukK.js";import"./MessageSeparator-DL5Mtc4a.js";import"./NavigationGroup-GlfagvwS.js";import"./Notification-Bfz10Opj.js";import"./NotificationProvider-BEeuteXk.js";import"./ProgressBar-DEoqe-N6.js";import"./Rating-1LXSamgX.js";import"./Skeleton-DH-hjyZA.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
