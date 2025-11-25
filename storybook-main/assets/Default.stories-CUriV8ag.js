import{j as r,r as F}from"./iframe-Dswl8YqW.js";import{L as l}from"./Label-CMIuj4QW.js";import{s as t,x as f,F as h}from"./Modal-CHITtey4.js";import{B as o}from"./Button-BlDvIS3Y.js";import{S as x}from"./Section-B6yNflVq.js";import{j as S,G as j}from"./IconWarning-Dt5PaZc0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./index-DoB2isID.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./context-DC5A8m43.js";import"./ProgressBar-DCPiQQ-S.js";import"./utils-7BbO5OC0.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DeI_eRCJ.js";import"./context-BYCR6GGl.js";import"./Button-CdXhm7oQ.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./browser-BqLtz9Zq.js";import"./useStatic-DgEZfjHg.js";import"./FileCardList-C3qXU2FS.js";import"./Avatar-BvulIpzL.js";import"./AlertIcon-BGEjgne8.js";import"./Image-CfXDNzs_.js";import"./Text-CuuEScv1.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./Link-2_MM-8En.js";import"./ControlledNotification-Cdu3NdkW.js";import"./LoadingSpinner-B_hOay2Z.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./ActionGroup-DkHaLZ1F.js";import"./Alert-CNX0ngss.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Heading-iCy8jlSp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";/**
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
