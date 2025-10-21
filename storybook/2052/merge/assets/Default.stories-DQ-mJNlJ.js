import{j as r,r as W}from"./iframe-DTheBFqg.js";import{L as l}from"./Label-DS5MocSE.js";import{F as o}from"./FileField-pwWrJwYz.js";import{B as t}from"./Button-Bmq0qjWo.js";import{S as _}from"./Section-BDBFYB_1.js";import{F as P}from"./useFieldComponent-mBN-j8SF.js";import{F as H}from"./FieldDescription-Coryxrlu.js";import{O as k,K}from"./IconWarning-CXTS1Zmo.js";import"./index-Cun1SEai.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./Label-DaxiHPCi.js";import"./utils-CIVb4-pA.js";import"./Hidden-BUnkE8VR.js";import"./useFormValidation-Bp-At_qz.js";import"./useFocus-gFMm1SVx.js";import"./Input-Ct0KMtbU.js";import"./useFocusRing-Bw6jYcrF.js";import"./browser-BqPz5wcV.js";import"./useMakeFocusable-DG-Ql63t.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DWQVem_V.js";import"./useFocusable-CIkWBa0n.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Action-XVrtYdEu.js";import"./context-D5Eh6Kjh.js";import"./useStatic-KScOH6sT.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./dynamic-DYsVCHyX.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./react-children-utilities-g2QZgYrG.js";import"./ClearPropsContext-NW1-nYLP.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],N=k("outline","paperclip","Paperclip",M),Gr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(H,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(P,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(K,{children:r.jsx(N,{})})})})},c={render:e=>{const[m,R]=W.useState(null),d=m==null?void 0:m[0];return r.jsxs(_,{children:[r.jsxs(o,{...e,onChange:R,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),d==null?void 0:d.name]})}};var u,F,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,g,v;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,B,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,I,L;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var E,D,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const Jr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Jr as __namedExportsOrder,Gr as default};
