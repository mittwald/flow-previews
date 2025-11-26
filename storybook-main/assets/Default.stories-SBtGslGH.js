import{j as r,r as F}from"./iframe-BjQgS_dl.js";import{L as l}from"./Label-BioMMRbR.js";import{q as t,v as f,g as h}from"./TimeField-DmBCIGkd.js";import{B as o}from"./Button-mR6tCl9f.js";import{S as x}from"./Section-BeaFJCve.js";import{g as S,C as j}from"./IconWarning-wUhw_T8r.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3msEGiP.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./context-3TgVXJa8.js";import"./ProgressBar-DBLE5koh.js";import"./utils-C6Mwuf68.js";import"./Hidden-CbsoacY0.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-HUQJDa8a.js";import"./dynamic-CTQIFy3Y.js";import"./ActionGroup-CR4mXt-z.js";import"./Alert-dt7Crh6d.js";import"./AlertIcon-CKkF89KF.js";import"./AlertBadge-BuoAO-EF.js";import"./Text-hFF5yDpy.js";import"./browser-D8Ytpe6r.js";import"./EmulatedBoldText-CmEhCy_I.js";import"./Align-whB8MF17.js";import"./Popover-DNrzHtdF.js";import"./context-C9CRIziz.js";import"./Button-CWLE3PAH.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./RSPContexts-JWS-CQt4.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./useStatic-CbhvCGnA.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./TableFooterRow-DIeYbuw8.js";import"./SkeletonText-CYyiBvSU.js";import"./Avatar-BzNSebrE.js";import"./AvatarStack-B41TTh57.js";import"./Badge-CWhMpUJo.js";import"./BigNumber-DelUDah8.js";import"./Breadcrumb-W_Ta7J5l.js";import"./Link-toGczOVY.js";import"./Heading-DmijLSYI.js";import"./Legend-CJxX7Jjd.js";import"./FileCardList-DxtvYBZN.js";import"./Image-D2Uh7TNb.js";import"./Color-CkV5zOWc.js";import"./Content-B-6ROZD8.js";import"./ContextualHelpTrigger-GCKXkGjA.js";import"./CounterBadge-BVTBh7o7.js";import"./DonutChart-CxTDQKuL.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-s0Iy2v7I.js";import"./Header-CccJlXz1.js";import"./Initials-BQ1BPtAw.js";import"./InlineCode-DubGci4q.js";import"./PopoverTrigger-vpZCTXgF.js";import"./LoadingSpinner-BVWf40cO.js";import"./Separator-V7QUjuvc.js";import"./Message-B_08b52f.js";import"./MessageSeparator-a9jr4f53.js";import"./NavigationGroup-DACyTvZZ.js";import"./Notification-CufI5Fok.js";import"./NotificationProvider-Ba5bESUN.js";import"./ProgressBar-C_67UiSI.js";import"./Rating-CzDqBwDX.js";import"./Skeleton-CgTPZh5a.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),wr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
