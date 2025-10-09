import{j as r,r as W}from"./iframe-C72LIGrp.js";import{L as l}from"./Label-BuGN1EiA.js";import{F as t}from"./FileField-DB3XXmm2.js";import{B as o}from"./Button-Dmf_fI6U.js";import{S as _}from"./Section-CMWdy8sM.js";import{F as P}from"./FieldError-D1AwEDR1.js";import{F as H}from"./FieldDescription-Ch1dZGOn.js";import{O as k,K}from"./IconWarning-DoRUMKye.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./index-D1phmMZw.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./Label-CF9BgwC5.js";import"./utils-Day1TTYQ.js";import"./Hidden-qTQe9qE3.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-wW6D6XQK.js";import"./useFocus-B4vRNHSZ.js";import"./FieldError-DSjxrI1_.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-Dda4VuA-.js";import"./useFocusRing-DuRh0iim.js";import"./browser-Bf0-GHuQ.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./Text-CvlnZLd7.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CqQxVakl.js";import"./useFocusable-Dej5ci1L.js";import"./ContextMenuSection-DZErrfjN.js";import"./Action-BbbbpS8d.js";import"./context-BXphONxA.js";import"./useStatic-DPVFgY8A.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./dynamic-M8RwUexW.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],N=k("outline","paperclip","Paperclip",M),zr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(H,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(P,{children:"File too large"})]})},c={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(K,{children:r.jsx(N,{})})})})},p={render:e=>{const[m,R]=W.useState(null),d=m==null?void 0:m[0];return r.jsxs(_,{children:[r.jsxs(t,{...e,isInvalid:!0,onChange:R,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d==null?void 0:d.name]})}};var u,F,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,v,g;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,B,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,b,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(b=c.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var E,D,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const Ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,c as IconButton,n as ReadOnly,s as WithDescription,a as WithError,p as WithHandler,Ar as __namedExportsOrder,zr as default};
