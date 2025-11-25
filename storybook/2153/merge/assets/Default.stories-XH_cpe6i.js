import{j as r,r as F}from"./iframe-B2xkRX6A.js";import{L as l}from"./Label-BUxdBOic.js";import{s as t,x as f,F as h}from"./Modal-CO2TWQss.js";import{B as o}from"./Button-dkMnbJWG.js";import{S as x}from"./Section-Dun5Ah7E.js";import{j as S,G as j}from"./IconWarning-D3UwWGLP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D639mhqg.js";import"./index-CgXs-3w1.js";import"./index-Ddwq7UUc.js";import"./useLocalizedStringFormatter-CFLWoqqs.js";import"./context-0lXYs95B.js";import"./ProgressBar-B8kHCfIw.js";import"./utils-Bn0vlKhH.js";import"./Hidden-WUyQGACH.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-D0Nrpf8a.js";import"./context-D2PnJfRR.js";import"./Button-ZZalAwAh.js";import"./useFocusRing-Bx_AG6Dt.js";import"./useFocusable-DULkbCFr.js";import"./RSPContexts-CwQQ0l-4.js";import"./Collection-Pjtcg2qL.js";import"./CollectionBuilder-VeHHQrjG.js";import"./SelectionIndicator-DaXywehL.js";import"./Separator-DixHCPqE.js";import"./browser-QmAcXv_F.js";import"./useStatic-BtgzXQ8g.js";import"./FileCardList-ClKhcOXP.js";import"./Avatar-D9obBJsL.js";import"./AlertIcon-CEpZA0Vz.js";import"./Image-DmJWYSzI.js";import"./Text-CCe4xaNb.js";import"./EmulatedBoldText-C1Q2Dtf3.js";import"./Link-BRl6hkBv.js";import"./ControlledNotification-DS-T__7q.js";import"./LoadingSpinner-kT-Lxibs.js";import"./Flex-CvnfZlCm.js";import"./Accordion-CesJn3LP.js";import"./ActionGroup-BNpn1NX2.js";import"./Alert-CEP0osH1.js";import"./AlertBadge-pEQTf4Bk.js";import"./Align-CP_BULLQ.js";import"./AvatarStack-B3-ZBtgK.js";import"./BigNumber-DSCSkpPt.js";import"./Breadcrumb-Ox30Nh91.js";import"./Heading-C47Y59gw.js";import"./Legend-CPHf_SU9.js";import"./Color-CRQqnv2Z.js";import"./TableFooterRow-BOTmu1mA.js";import"./SkeletonText-s3T3xbN2.js";import"./Content-CxihpQZ-.js";import"./CounterBadge-Cr8rMFp7.js";import"./DonutChart-DEAWEWe6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrMCUhBk.js";import"./Header-Cmx_1A0G.js";import"./Initials-CiGsvn0n.js";import"./InlineCode-C_72mhO0.js";import"./LayoutCard-BYbleerS.js";import"./Separator-hUKHPUi5.js";import"./MessageSeparator-BjqeMdwr.js";import"./NavigationGroup-CLRQhA7L.js";import"./Notification-UiqXE8jo.js";import"./NotificationProvider-DbD6PgRm.js";import"./ProgressBar-CF2aMWk9.js";import"./Rating-DYTssgfH.js";import"./Skeleton-DC4X9OIQ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Gr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Mr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Mr as __namedExportsOrder,Gr as default};
