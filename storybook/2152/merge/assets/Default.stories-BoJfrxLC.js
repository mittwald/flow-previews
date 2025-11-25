import{j as r,r as F}from"./iframe-Damah4Gk.js";import{L as l}from"./Label-BCkQwiDC.js";import{s as t,x as f,F as h}from"./Modal-B_yQEjWS.js";import{B as o}from"./Button-DRLWgNzR.js";import{S as x}from"./Section-Nvq9HUcO.js";import{j as S,G as j}from"./IconWarning-C31Nhmtw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYYwi6hk.js";import"./index-13wtP10s.js";import"./index-CEgKTzya.js";import"./useLocalizedStringFormatter-DBwS74mm.js";import"./context-Ame_q6FO.js";import"./ProgressBar-ApaXpyYi.js";import"./utils-DZ-wAWvz.js";import"./Hidden-CW7-PSlS.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-CEjum6Vy.js";import"./context-DFVuuGoX.js";import"./Button-D6H5v8ae.js";import"./useFocusRing-CjNeZb4R.js";import"./useFocusable-BIU-PHPJ.js";import"./RSPContexts-CTihTM1c.js";import"./Collection-VhWDtA4s.js";import"./CollectionBuilder-Be73SkTZ.js";import"./SelectionIndicator-Bnf6nu3E.js";import"./Separator-CcuGyaw4.js";import"./browser-BpoY0pz3.js";import"./useStatic-BEJRqnxO.js";import"./FileCardList-Ci5r3U-c.js";import"./Avatar-Cai0w9S3.js";import"./AlertIcon-DULCpNPH.js";import"./Image-7D4tddpj.js";import"./Text-CM2awg96.js";import"./EmulatedBoldText-CePfFl55.js";import"./Link-BsL3p7F7.js";import"./ControlledNotification-CjMfLUpX.js";import"./LoadingSpinner-1d0BHocu.js";import"./Flex-OzeXLOGS.js";import"./Accordion-Cw4810g4.js";import"./ActionGroup-DEjgbrdM.js";import"./Alert-Cx3wd6pS.js";import"./AlertBadge-DNrr8zSV.js";import"./Align-C4GA7Znj.js";import"./AvatarStack-sta7pAol.js";import"./BigNumber-CNHEALEu.js";import"./Breadcrumb-BiBovG4Q.js";import"./Heading-DZZNbrhC.js";import"./Legend-B4DJDWjw.js";import"./Color-qtzJcxFz.js";import"./TableFooterRow-BGQmG6-s.js";import"./SkeletonText-D5TwXMfM.js";import"./Content-D81btMoA.js";import"./CounterBadge-D9Iy1GBz.js";import"./DonutChart-hzKFEReV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bp6SKaJw.js";import"./Header-Duz7H3Fe.js";import"./Initials-CSjNV__V.js";import"./InlineCode-Cg-iYsVS.js";import"./LayoutCard-C33sIfEG.js";import"./Separator-9du0K4-M.js";import"./MessageSeparator-BK4KxRRw.js";import"./NavigationGroup-DLgkr7wA.js";import"./Notification-D6I6SJC0.js";import"./NotificationProvider-CEo1qSg-.js";import"./ProgressBar-DbMvGVxW.js";import"./Rating-BnbEvWoV.js";import"./Skeleton-BZR1-od5.js";/**
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
