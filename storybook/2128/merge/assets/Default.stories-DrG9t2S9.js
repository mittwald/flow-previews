import{j as r,r as F}from"./iframe-Dxj0SZQz.js";import{L as l}from"./Label-r7-X59g3.js";import{s as t,x as f,F as h}from"./Modal-CL3ryr0m.js";import{B as o}from"./Button-BkQ_NRiX.js";import{S as x}from"./Section-CFUbkEZF.js";import{j as S,G as j}from"./IconWarning-S0UXp0fg.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6iV2DzL.js";import"./index-Bd2Xf5pv.js";import"./index-BWjFPLHz.js";import"./useLocalizedStringFormatter-eZsG_k2F.js";import"./context-C6-P6koC.js";import"./ProgressBar-LRI5m-um.js";import"./utils-Cfq8faXc.js";import"./Hidden-Bwn6RBKf.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BgiT-tjm.js";import"./context-DANfXhqK.js";import"./Button-CXPXZjsM.js";import"./useFocusRing-DoLOI9UU.js";import"./useFocusable-DJxE8QS3.js";import"./RSPContexts-jyJS88rd.js";import"./Collection-A8jgBcw1.js";import"./CollectionBuilder-DAFFcbNw.js";import"./SelectionIndicator-DpzNLy52.js";import"./Separator-CHuWT96t.js";import"./browser-KBC6jiXy.js";import"./useStatic-CdzpEGHk.js";import"./FileCardList-B5oao-64.js";import"./Avatar-B1NU17Uz.js";import"./AlertIcon-EqhFZIQA.js";import"./Image-B3ODdtrF.js";import"./Text-nz3YKbDr.js";import"./EmulatedBoldText-CgLGHcPw.js";import"./Link-CcIfSoxL.js";import"./ControlledNotification-BWZxS6H1.js";import"./LoadingSpinner-D4zskspE.js";import"./LayoutCard-DAKag2G9.js";import"./Accordion-B1R47Hbp.js";import"./ActionGroup-WjAvs-BH.js";import"./getActionGroupSlot-Di5FkjTO.js";import"./Alert-CfoEhuU6.js";import"./AlertBadge-kPhBxQgx.js";import"./Align-hyosXLBb.js";import"./AvatarStack-DUps09Fx.js";import"./BigNumber-BGAos7Ap.js";import"./Breadcrumb-Bzo_Amw-.js";import"./Heading-DOS_NISo.js";import"./Legend-BNkBSiUS.js";import"./Color-BdzDTaI9.js";import"./TableFooterRow-BLcT84fb.js";import"./SkeletonText-Co3L-D1u.js";import"./Content-BKdb7Kra.js";import"./CounterBadge-D-Xb7Rtk.js";import"./DonutChart-DY9mPS7U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bf_xICCO.js";import"./Header-C6iAqINA.js";import"./Initials-DyQkgoJm.js";import"./InlineCode-FKDFRHZK.js";import"./Separator-Du6kbLAk.js";import"./MessageSeparator-BKDDL8-8.js";import"./NavigationGroup-D_-Rv13i.js";import"./Notification-Chd6t4iX.js";import"./NotificationProvider-BaN4hfIP.js";import"./ProgressBar-CD9e9P4f.js";import"./Rating-CmxrZzsX.js";import"./Skeleton-CcbZpjVZ.js";/**
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
