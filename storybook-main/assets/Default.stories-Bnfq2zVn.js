import{j as r,r as F}from"./iframe-B7faIpc2.js";import{L as l}from"./Label-B8m3uYje.js";import{q as t,v as f,g as h}from"./TimeField-DJeF6tHL.js";import{B as o}from"./Button-C65qYEPV.js";import{S as x}from"./Section-BRbBI6XS.js";import{g as S,C as j}from"./IconWarning-RXBUNZpo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DvcRwh-b.js";import"./mergeRefs-DocynWAk.js";import"./index-Cm9A5t92.js";import"./useLocalizedStringFormatter-CHCbdM4l.js";import"./context-BdWnF-Tv.js";import"./ProgressBar-Cpr3Nm-I.js";import"./utils-Dgdioq7j.js";import"./Hidden-CI4Kyuw4.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-rRmjtL7-.js";import"./dynamic-DNE-pYSI.js";import"./ActionGroup-lrlsSsuG.js";import"./Alert-CsDQ-kYA.js";import"./AlertIcon-BgMVJ-0R.js";import"./AlertBadge-C_NAxNEx.js";import"./Text-BW5jU57O.js";import"./browser-CF6H-xjM.js";import"./EmulatedBoldText-C1Px7vMV.js";import"./Align-DuctyuK7.js";import"./Popover-QuqvLiOu.js";import"./context-BRyJJeXK.js";import"./Button-Br-rQQva.js";import"./useFocusRing-BnSOUYVK.js";import"./useFocusable-BknYbShF.js";import"./RSPContexts-Bww9Tcci.js";import"./Collection-B_b9uSvy.js";import"./CollectionBuilder-BF29HNem.js";import"./SelectionIndicator-CVtQG64z.js";import"./Separator-BwGATjgB.js";import"./useStatic-d3wvmCdr.js";import"./OverlayTrigger-mzSlkfM-.js";import"./TableFooterRow-BTQIZIFr.js";import"./SkeletonText-C_Fa3H2l.js";import"./Avatar-Dz-cMFo8.js";import"./AvatarStack-2jPjq7st.js";import"./Badge-BaUtza3s.js";import"./BigNumber-BwNV7DHD.js";import"./Breadcrumb-D-mfdRHn.js";import"./Link-BlQ-A0kF.js";import"./Heading-DQAVgOUX.js";import"./Legend-DrznEJ0f.js";import"./FileCardList-BmGtRGBl.js";import"./Image-Cw48J6Ze.js";import"./Color-COLTRY34.js";import"./Content-DYfcwBs-.js";import"./ContextualHelpTrigger-CoqA6lQ-.js";import"./CounterBadge-Bnm06nVz.js";import"./DonutChart-B4IQzO-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-eNzO0zDz.js";import"./Header-1-tOwrUd.js";import"./Initials-D1wCqKzA.js";import"./InlineCode-SGGc6CuJ.js";import"./PopoverTrigger-Btq07Gqi.js";import"./LoadingSpinner-mrsqqnDm.js";import"./Separator-iil9Ttbd.js";import"./Message-CsQsykjC.js";import"./MessageSeparator-4ehVw1iX.js";import"./NavigationGroup-DCa422EG.js";import"./Notification-CX0MhUUz.js";import"./NotificationProvider-BfOyISvO.js";import"./ProgressBar-CKWJYevm.js";import"./Rating-Dpmi2aI5.js";import"./Skeleton-C2W_Mk7n.js";/**
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
