import{j as r,r as F}from"./iframe-U-SQzk2U.js";import{L as l}from"./Label-C3BVuxS7.js";import{r as t,w as f,g as h}from"./TimeField-CC_Pyjeg.js";import{B as o}from"./Button-B_mH5guI.js";import{S as x}from"./Section-Cs2_EqxV.js";import{g as S,C as j}from"./IconWarning-CDCEBJyf.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./context-DG48XepE.js";import"./ProgressBar-CipRA_mB.js";import"./utils-DoPZZ_D6.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-ZeIRJCaw.js";import"./dynamic-BNi_8Fxs.js";import"./ActionGroup-QOnDMJ0K.js";import"./getActionGroupSlot-BsOJ1KeF.js";import"./useStatic-BAhUJhAM.js";import"./Alert-PBaqSyU5.js";import"./AlertIcon-81NvLES1.js";import"./AlertBadge-BDdG2Xyu.js";import"./Text-MZxPcWY_.js";import"./browser-w1PF0DBJ.js";import"./EmulatedBoldText-2j5mm0bP.js";import"./Align-BaKWMIPi.js";import"./Popover-BJPafbQW.js";import"./context-ChAoIJrl.js";import"./Button-DBw5Ol_w.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./RSPContexts-CXcRuCAV.js";import"./Collection-D30Phmso.js";import"./CollectionBuilder-CnentVFR.js";import"./SelectionIndicator-CV40_W2v.js";import"./Separator-BXP_D1Un.js";import"./OverlayTrigger-BjYUeewY.js";import"./ControlledNotification-CprxFH82.js";import"./TableFooterRow-DhmvhUbW.js";import"./SkeletonText-B7Idi9Co.js";import"./Avatar-Dp_xN1xq.js";import"./AvatarStack-BziCuf6l.js";import"./Badge-DINRYIZ4.js";import"./BigNumber-DxxIndo0.js";import"./Breadcrumb-C7c-KnuV.js";import"./Link-C1W3HrwR.js";import"./Heading-LgN9kaRj.js";import"./Legend-Iz7Sss5n.js";import"./FileCardList-BFx3LKHI.js";import"./Image-fMegGqHo.js";import"./Color-DHmCSMDw.js";import"./Content-DqP6eARh.js";import"./ContextualHelpTrigger-G5U05qXX.js";import"./CounterBadge-DERld0YM.js";import"./DonutChart-CG4udGsV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CQRWQTua.js";import"./Header-D2ZfwLZJ.js";import"./Initials-CdiKdV33.js";import"./InlineCode-CY3vRQgR.js";import"./PopoverTrigger-Coxd46NM.js";import"./LoadingSpinner-CC-MYLRK.js";import"./Separator-DjGJVRMe.js";import"./Message-DV2VcofZ.js";import"./MessageSeparator-DMC7QGGP.js";import"./NavigationGroup-BXxl9KBJ.js";import"./Notification-tY-Mb6kR.js";import"./NotificationProvider-BrhLMx6A.js";import"./ProgressBar-BwkFEgmn.js";import"./Rating-worVxwfb.js";import"./Skeleton-D7CUbSzy.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ar={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(x,{children:[r.jsxs(t,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Gr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Gr as __namedExportsOrder,Ar as default};
