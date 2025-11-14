import{j as r,r as F}from"./iframe-D4i-5dyB.js";import{L as l}from"./Label-CEhfQve0.js";import{r as t,w as f,g as h}from"./TimeField-CIDukiAs.js";import{B as o}from"./Button-C5iEQf44.js";import{S as x}from"./Section-B45bmdbE.js";import{g as S,C as j}from"./IconWarning-CMFXnZAS.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./context-C76p02_s.js";import"./ProgressBar-B4smC8yo.js";import"./utils-BWp3lM8P.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-Dj0W5Sm2.js";import"./dynamic-l-Dsj5TR.js";import"./ActionGroup-DfaF4Ihs.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./useStatic-CrV_XbcB.js";import"./Alert-BxysIfVE.js";import"./AlertIcon-CoWnPqgJ.js";import"./AlertBadge-BCJFFVr-.js";import"./Text-D-HEhYG-.js";import"./browser-Cwp7r97w.js";import"./EmulatedBoldText-wsap70PU.js";import"./Align-CocHRqnc.js";import"./Popover-DY1u_i9c.js";import"./context-JCcCR3kh.js";import"./Button-BNk2Wifn.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./RSPContexts-BOewTbeY.js";import"./Collection-E-HFRfBJ.js";import"./CollectionBuilder-C89H_4E6.js";import"./SelectionIndicator-BSmnnWZO.js";import"./Separator-BscBbSvj.js";import"./OverlayTrigger-D7YNoZK9.js";import"./TableFooterRow-BiDC_eis.js";import"./SkeletonText-BbzzKkxz.js";import"./Avatar-DYMDRQ8r.js";import"./AvatarStack-DbQ018zr.js";import"./Badge-DGIykoPb.js";import"./BigNumber-RSRBZBqi.js";import"./Breadcrumb-BFthghoN.js";import"./Link-BEGF2rB2.js";import"./Heading-CqgoaxDG.js";import"./Legend-KRzBJzCP.js";import"./FileCardList-BQXii2c7.js";import"./Image-BTNoRYQ7.js";import"./Color-Bghgw0aE.js";import"./Content-BMj6l0HC.js";import"./ContextualHelpTrigger-BRqpivsA.js";import"./CounterBadge-BbpTGMEL.js";import"./DonutChart-BnHSOvbV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-x47jZjZe.js";import"./Header-1VErbdaO.js";import"./Initials-CFmamtSv.js";import"./InlineCode-DaIVko3u.js";import"./PopoverTrigger-CYaHO_51.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Separator-D1GKViit.js";import"./Message-DJ9Qzwt8.js";import"./MessageSeparator-W1fEMKQv.js";import"./NavigationGroup-Di6mJdeB.js";import"./Notification-t1-j9nZN.js";import"./NotificationProvider-BqX1J7Mu.js";import"./ProgressBar-Def5jKMV.js";import"./Rating-DvqvLdBT.js";import"./Skeleton-B565HWGQ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
