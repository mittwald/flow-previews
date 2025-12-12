import{j as r,r as F}from"./iframe-C7yh_Fu5.js";import{L as l}from"./Label-oyZIArrA.js";import{q as t,v as f,g as h}from"./TimeField-Dy-rfgDv.js";import{B as o}from"./Button-BwVKQ9X7.js";import{S as x}from"./Section-eGYkYIra.js";import{g as S,C as j}from"./IconWarning-U8_aSafZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-EG-5z2.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./context-CEhtXY7m.js";import"./ProgressBar-hejX-OOI.js";import"./utils-BIDryOLh.js";import"./Hidden-Du0bIFmN.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-D4DEJSnq.js";import"./dynamic-BAOBaIPk.js";import"./ActionGroup-DnTsE6iz.js";import"./Alert-BD9-BdYZ.js";import"./AlertIcon-2MV1Vkb6.js";import"./AlertBadge-D2DN6G_u.js";import"./Text-CSanHafV.js";import"./browser-DU0Se26V.js";import"./EmulatedBoldText-CiGN-vVw.js";import"./Align-H7fb-fs1.js";import"./Popover-CQFnWxW5.js";import"./context-w3GWYnpb.js";import"./Button-iBtMEWbi.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./RSPContexts-DMbDFkhS.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./useStatic-BPJ4UqdO.js";import"./OverlayTrigger-D2xYBiFg.js";import"./TableFooterRow-CVFXLu5s.js";import"./SkeletonText-DnggfzER.js";import"./Avatar-CxKCuxf-.js";import"./AvatarStack-CuhKRn3f.js";import"./Badge-CrGIL66e.js";import"./BigNumber-DhmUzvWc.js";import"./Breadcrumb-0czp_nKF.js";import"./Link-DWHk52qz.js";import"./Heading-gezzzJQU.js";import"./Legend-CBzh6EDX.js";import"./FileCardList-BcFGfAyG.js";import"./Image-CciUOm_j.js";import"./Color-B2lIhlIc.js";import"./Content-CL7mIcPh.js";import"./ContextualHelpTrigger-B1UysYmx.js";import"./CounterBadge-DOJFQA8N.js";import"./DonutChart-PBUZonP2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-VCS6qRmj.js";import"./Header-C9QET4gC.js";import"./Initials-28ES132L.js";import"./InlineCode-xv-tSnAa.js";import"./PopoverTrigger-C9LEo84-.js";import"./LoadingSpinner-4S8XnzlY.js";import"./Separator-oc_HtEXN.js";import"./Message-BiBJDh9p.js";import"./MessageSeparator-DJOJRQwh.js";import"./NavigationGroup-kwM4BGZf.js";import"./Notification-DLYTxmIW.js";import"./NotificationProvider-BR-b_KFd.js";import"./ProgressBar-BczdTP0z.js";import"./Rating-DCrUaEZd.js";import"./Skeleton-fkyP2s-f.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
