import{j as r,r as W}from"./iframe-tskdVQ8N.js";import{L as l}from"./Label-CsJ7Xmev.js";import{F as t}from"./FileField-D2o5sntH.js";import{B as o}from"./Button-Dsg_4rdI.js";import{S as _}from"./Section-O741B4-H.js";import{F as P}from"./FieldError-BdEz1ju8.js";import{F as H}from"./FieldDescription-B2j6G7O5.js";import{O as k,K}from"./IconWarning-Bd2S-Yd8.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./index-C1m14znk.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./context-DiW1jRMX.js";import"./Label-ZNOxXk3Q.js";import"./utils-B12eWPaZ.js";import"./Hidden-D_rJ6hGg.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-GdVWjc_V.js";import"./useFocus-DfZ-8u74.js";import"./FieldError-BQtr77Yc.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-D8C7sCTv.js";import"./useFocusRing-L-u3dQN8.js";import"./browser-C459Qnce.js";import"./useMakeFocusable-DhpPn-fN.js";import"./Text-jVUpGvvP.js";import"./EmulatedBoldText-BMIw02bL.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BvJ9VF5d.js";import"./useFocusable-DY9nb4Q3.js";import"./ContextMenuSection-DqvIY19i.js";import"./Action-CeCtXdjv.js";import"./context-CVZR0KsW.js";import"./useStatic-1YPHy18H.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./dynamic-BrDu037J.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";/**
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
