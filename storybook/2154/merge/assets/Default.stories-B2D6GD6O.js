import{j as r,r as F}from"./iframe-Ce1y9mDa.js";import{L as l}from"./Label-CYdyGifL.js";import{s as t,x as f,F as h}from"./Modal-B5SDnM4C.js";import{B as o}from"./Button-7HXgfRQm.js";import{S as x}from"./Section-BnpA4R0K.js";import{j as S,G as j}from"./IconWarning-Cq_LhkIy.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBC2SOgI.js";import"./index-Dg18p-Ek.js";import"./index-CQi4P5Ty.js";import"./useLocalizedStringFormatter-DJ1gfdUx.js";import"./context-Ds3IsYji.js";import"./ProgressBar-CB9towVx.js";import"./utils-DDvzCibx.js";import"./Hidden-C6qb3gI3.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BLMgMZQd.js";import"./context-BS3tg5wC.js";import"./Button-CHIFuycL.js";import"./useFocusRing-DXrCjRvx.js";import"./useFocusable-7LnlwHoJ.js";import"./RSPContexts-Co0_PY2S.js";import"./Collection-Dzn6S5_i.js";import"./CollectionBuilder-DHKZo2jO.js";import"./SelectionIndicator-CEqK1ZkE.js";import"./Separator-DV4y1vPf.js";import"./browser-Cq8oxhIL.js";import"./useStatic-BHJIQiQW.js";import"./FileCardList-BlMAlev1.js";import"./Avatar-CBVDeneG.js";import"./AlertIcon-Dp0ZIISG.js";import"./Image-MnCK3KxN.js";import"./Text-gkToWDQ-.js";import"./EmulatedBoldText-Dp9LuwQf.js";import"./Link-D-pziWbs.js";import"./ControlledNotification-DXpIZWHx.js";import"./LoadingSpinner-B-DDCCI1.js";import"./Flex-W6EMBjqA.js";import"./Accordion-CLOM0Ma4.js";import"./ActionGroup-GiQVcnjT.js";import"./Alert-Cxybhncd.js";import"./AlertBadge-DOQyDmfm.js";import"./Align-BHiq55io.js";import"./AvatarStack-C1f-7D-W.js";import"./BigNumber-BuA-3GnB.js";import"./Breadcrumb-C2jdHzme.js";import"./Heading-CTEdnBPn.js";import"./Legend-D1sg630U.js";import"./Color-CF3eJFYM.js";import"./TableFooterRow-DSk7Viak.js";import"./SkeletonText-B6gTj_U8.js";import"./Content-DDAGDb2q.js";import"./CounterBadge-CvXy5Oz3.js";import"./DonutChart-DSfM5bil.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DNO1mdVn.js";import"./Header-B5pcUp1F.js";import"./Initials-DltL2xg8.js";import"./InlineCode-HVHT7k08.js";import"./LayoutCard-DG1Z6Pl5.js";import"./Separator-DXJX0Nok.js";import"./MessageSeparator-Byy5sV6o.js";import"./NavigationGroup-Cvtmebaj.js";import"./Notification-BfU9Xz2u.js";import"./NotificationProvider-CPeFG8LD.js";import"./ProgressBar-BH1las8m.js";import"./Rating-CFZ218Cx.js";import"./Skeleton-BBPWZ02g.js";/**
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
