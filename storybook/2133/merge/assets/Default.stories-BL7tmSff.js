import{j as r,r as F}from"./iframe-DxjJvypA.js";import{L as l}from"./Label-BCxsZWDW.js";import{s as t,x as f,F as h}from"./Modal-scDbqKwL.js";import{B as o}from"./Button-CsJkXLJC.js";import{S as x}from"./Section-B6nN9o_0.js";import{j as S,G as j}from"./IconWarning-BlszW1tj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./index-12LB0401.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./ProgressBar-5owblEDR.js";import"./utils-6KDkR0i-.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BdL6WG8t.js";import"./context-CTfXc2Zo.js";import"./Button-nEfrx5gJ.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./RSPContexts-BduYfYam.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./browser-CB6HLjfz.js";import"./useStatic-iE5J9zsV.js";import"./FileCardList-BVyoDE-7.js";import"./Avatar-BR29CIP8.js";import"./AlertIcon-CJADbW9L.js";import"./Image-C9uy31u2.js";import"./Text-CGLUa4sd.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./Link-DMUApF-a.js";import"./ControlledNotification-vaU_F80i.js";import"./LoadingSpinner-q348yrim.js";import"./LayoutCard-aWGkBZVt.js";import"./Accordion-Ps3GdnvV.js";import"./ActionGroup-CVcTWpTg.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./Alert-B_YHHoEM.js";import"./AlertBadge-LOZq_93c.js";import"./Align-lkWsfgzV.js";import"./AvatarStack-CwQZo75P.js";import"./BigNumber-B3EhvRla.js";import"./Breadcrumb-73u-YP5B.js";import"./Heading-BRsOw7TR.js";import"./Legend-rhAR0u5-.js";import"./Color-CGGKQlcf.js";import"./TableFooterRow-DFeDu75P.js";import"./SkeletonText-eFRLkdn1.js";import"./Content-D4JTeq-s.js";import"./CounterBadge-CpPkfl65.js";import"./DonutChart-CeTOSEye.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clnhjbhg.js";import"./Header-D2mqm9n1.js";import"./Initials-BkyQRHGv.js";import"./InlineCode-2bpBAEcp.js";import"./Separator-Ci8H9o73.js";import"./MessageSeparator-CYyIHhcK.js";import"./NavigationGroup-BPerNp2h.js";import"./Notification-Cqym3ej0.js";import"./NotificationProvider-CPmTQg-x.js";import"./ProgressBar-CRpWDhXs.js";import"./Rating-Cr0_tTre.js";import"./Skeleton-BtPwNpqY.js";/**
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
