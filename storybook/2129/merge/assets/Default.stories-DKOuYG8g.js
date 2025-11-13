import{j as r,r as F}from"./iframe-DBT7gULD.js";import{L as l}from"./Label-CB-Jrcob.js";import{s as t,x as f,F as h}from"./Modal-BDM5GHUs.js";import{B as o}from"./Button-CCcVMCFh.js";import{S as x}from"./Section-D6BoVeKj.js";import{j as S,G as j}from"./IconWarning-BUJnRJXc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./index-pYm4_kYT.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./ProgressBar-DcCMsBu5.js";import"./utils-D0uB-Zwx.js";import"./Hidden-BMktz6gh.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DeRu_afx.js";import"./context-D6D-GlPg.js";import"./Button-C-UpDsRO.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./RSPContexts-Dom4UWqx.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";import"./browser-DvkhEBxs.js";import"./useStatic-CqxwceTm.js";import"./FileCardList-DKqY5nDG.js";import"./Avatar-D4XiVYbq.js";import"./AlertIcon-B2G5YJ_h.js";import"./Image-DK0DVEvL.js";import"./Text-BcenBV84.js";import"./EmulatedBoldText-Cn-N7_G4.js";import"./Link-hErBzw1I.js";import"./ControlledNotification-BggQqaRM.js";import"./LoadingSpinner-UyNbbNkS.js";import"./LayoutCard-yF4LQl2s.js";import"./Accordion-DbrfaGK3.js";import"./ActionGroup-BaRaSr0H.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./Alert-BVpQpQXk.js";import"./AlertBadge-C-4v8xNv.js";import"./Align-DkyK3rk7.js";import"./AvatarStack-5oER6YSZ.js";import"./BigNumber-ByEBpfDg.js";import"./Breadcrumb-C9tjsQdJ.js";import"./Heading-CxhJw16G.js";import"./Legend-BSuRheR8.js";import"./Color-CfsSCbKc.js";import"./TableFooterRow-B5ePBGv6.js";import"./SkeletonText-yAbLh4O6.js";import"./Content-BNSFZdxK.js";import"./CounterBadge-C-EdT-Ua.js";import"./DonutChart-BfLW1k2r.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CCV8_Obm.js";import"./Header-DF0mjguX.js";import"./Initials-CLL_WJIt.js";import"./InlineCode-CHkCj2DF.js";import"./Separator-DSZggq8J.js";import"./MessageSeparator-DKc-7GUt.js";import"./NavigationGroup-CtWNzX63.js";import"./Notification-CgJLhaIj.js";import"./NotificationProvider-BBWQX6wG.js";import"./ProgressBar-DwVQ0bzm.js";import"./Rating-DhxcEvbm.js";import"./Skeleton-HhO4ThtG.js";/**
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
