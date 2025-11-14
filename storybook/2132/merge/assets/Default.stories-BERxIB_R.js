import{j as r,r as F}from"./iframe-DNdCOOr1.js";import{L as l}from"./Label-Bbx-tQIC.js";import{r as t,w as f,g as h}from"./TimeField-DqayqNa4.js";import{B as o}from"./Button-Bi5-Bex0.js";import{S as x}from"./Section-BzQXps3w.js";import{g as S,C as j}from"./IconWarning-lDDrCB8Z.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQ7eQhTD.js";import"./mergeRefs-BH624zqo.js";import"./index-C14X84sQ.js";import"./useLocalizedStringFormatter-L5dTHvQZ.js";import"./context-BCLfHoxJ.js";import"./ProgressBar-BQC3e8cN.js";import"./utils-B65MerL9.js";import"./Hidden-D3qCYkY1.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-GqFGURFX.js";import"./dynamic-DEywgUGw.js";import"./ActionGroup-BhPNcsGy.js";import"./getActionGroupSlot-DNgGzsK5.js";import"./useStatic-Dgx0IMN1.js";import"./Alert-CaxDnpaa.js";import"./AlertIcon-CYdwEvIq.js";import"./AlertBadge-CdMzeFyf.js";import"./Text-BN_zs0IC.js";import"./browser-BSEwgGQy.js";import"./EmulatedBoldText-BjpVZV9x.js";import"./Align-DpxI1oJO.js";import"./Popover-DIiESuql.js";import"./context-EmNd6Ym2.js";import"./Button-CTVqlwB9.js";import"./useFocusRing-D3q76LhO.js";import"./useFocusable-BkrL2nIQ.js";import"./RSPContexts-CgZ3T_zH.js";import"./Collection-BkL2_ZU0.js";import"./CollectionBuilder-BDT3C6pE.js";import"./SelectionIndicator-CQqAu7NQ.js";import"./Separator-D7EKlcCC.js";import"./OverlayTrigger-BJUnFqxk.js";import"./TableFooterRow-B5x5mMbe.js";import"./SkeletonText-CqfjDCms.js";import"./Avatar-CgUdo1aQ.js";import"./AvatarStack-DWPJgHGM.js";import"./Badge-BgTTIbTx.js";import"./BigNumber-D594wqq9.js";import"./Breadcrumb-y5cZeR2r.js";import"./Link-BJ2onDEJ.js";import"./Heading-BPbMgDfP.js";import"./Legend-CaSPY0_W.js";import"./FileCardList-BejHLRjj.js";import"./Image-DK86CSv-.js";import"./Color-BOVYog2E.js";import"./Content-C8VnHirq.js";import"./ContextualHelpTrigger-D8R9IQKT.js";import"./CounterBadge-Dd6bIx0I.js";import"./DonutChart-B0C_0szQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-f_Y8GvN_.js";import"./Header-DWZ-pwBZ.js";import"./Initials-D02DEgcF.js";import"./InlineCode-KPAoIiPI.js";import"./PopoverTrigger-KapNJ87s.js";import"./LoadingSpinner-nsia9vBo.js";import"./Separator-No_3rbsQ.js";import"./Message-D_3XrhXZ.js";import"./MessageSeparator-xZGmf5bD.js";import"./NavigationGroup-D7A_lQCG.js";import"./Notification-B1Orh41A.js";import"./NotificationProvider-DU3F8vQR.js";import"./ProgressBar-DLcywDx4.js";import"./Rating-B9dQKKgs.js";import"./Skeleton-B6xO-4q0.js";/**
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
