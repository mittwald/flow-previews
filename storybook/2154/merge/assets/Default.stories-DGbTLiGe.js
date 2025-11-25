import{j as r,r as F}from"./iframe-BGRRgBVS.js";import{L as l}from"./Label-C71FRL96.js";import{s as t,x as f,F as h}from"./Modal-B7HK7gsm.js";import{B as o}from"./Button-DE3NXKd3.js";import{S as x}from"./Section-CxYjgLxV.js";import{j as S,G as j}from"./IconWarning-H-qi_LLu.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxP1iS0K.js";import"./index-BZgSK6Sm.js";import"./index-BMa1Nvcv.js";import"./useLocalizedStringFormatter-q3-eKfRR.js";import"./context-u16jW8Lq.js";import"./ProgressBar-DH5v7dhL.js";import"./utils-Csx1o_4e.js";import"./Hidden-BonuGHXz.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BLodhe7F.js";import"./context-BRtiiBiN.js";import"./Button-BqwVNYKG.js";import"./useFocusRing-DfB0I3XE.js";import"./useFocusable-DNKvZOnB.js";import"./RSPContexts-DYF8VjHX.js";import"./Collection-CVup-l4E.js";import"./CollectionBuilder-VI38YI2I.js";import"./SelectionIndicator-C9TSpSC8.js";import"./Separator-BlumgMKZ.js";import"./browser-ClmblGlM.js";import"./useStatic-CZqew5Ty.js";import"./FileCardList-CTiEP_oD.js";import"./Avatar-_Q-1CRZY.js";import"./AlertIcon-DXcBlIQl.js";import"./Image-m8wJl4Hq.js";import"./Text-DzPdDmfA.js";import"./EmulatedBoldText-DrL9qLDd.js";import"./Link-DUHrLYIV.js";import"./ControlledNotification-ClQ4DWvA.js";import"./LoadingSpinner-uAo8ll_j.js";import"./Flex-Cm5MtHoW.js";import"./Accordion-CWMlovg1.js";import"./ActionGroup-J5J8sMqL.js";import"./Alert-DZ3SaNfX.js";import"./AlertBadge-BP8QuAoC.js";import"./Align-XZN-93fT.js";import"./AvatarStack-naPDjz-Y.js";import"./BigNumber-B2BemRIb.js";import"./Breadcrumb-89IOhSC8.js";import"./Heading-Cumb0HFc.js";import"./Legend-Cfzh9jRu.js";import"./Color-DhuO5H_5.js";import"./TableFooterRow-DxdhKCQ5.js";import"./SkeletonText-CETwMYrU.js";import"./Content-WUqaR34u.js";import"./CounterBadge-jsL76cSL.js";import"./DonutChart-CBKPVTFl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fuO6rZ67.js";import"./Header-CWu5q_yZ.js";import"./Initials-wMj0dCzb.js";import"./InlineCode-BW_4nfEu.js";import"./LayoutCard-BYw3vf8Y.js";import"./Separator-DYQ__sSx.js";import"./MessageSeparator-C9JYZyz7.js";import"./NavigationGroup-BS96zRf9.js";import"./Notification-BxWa1kbr.js";import"./NotificationProvider-O7MbGuDR.js";import"./ProgressBar-Fo13G1Rz.js";import"./Rating-DPKBC8ZF.js";import"./Skeleton-CCnLs0pz.js";/**
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
