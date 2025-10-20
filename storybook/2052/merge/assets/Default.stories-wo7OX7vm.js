import{j as r,r as W}from"./iframe-BojHUq_o.js";import{L as l}from"./Label-DZ-kvQ_z.js";import{F as o}from"./FileField-DkWBWqUu.js";import{B as t}from"./Button-Dx72WFTb.js";import{S as _}from"./Section-DKmaai8j.js";import{F as P}from"./useFieldComponent-DC978Re4.js";import{F as H}from"./FieldDescription-DQnyyCo1.js";import{O as k,K}from"./IconWarning-CDe5PPLT.js";import"./index-Cun1SEai.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./index-Byu2kyB2.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./context-BrPX2Q0J.js";import"./Label-kTT31z_U.js";import"./utils-Gx6YrarE.js";import"./Hidden-ZJfagMAU.js";import"./useFormValidation-Q_otrioy.js";import"./useFocus-C9Jl_mjq.js";import"./Input-ldVtEAcy.js";import"./useFocusRing-PQu2duny.js";import"./browser-DnzQTrak.js";import"./useMakeFocusable-BnROjiMm.js";import"./Text-HCLVlkvP.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B7zZe8uM.js";import"./useFocusable-BokWW085.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Action-BzhIxFNp.js";import"./context-awqjHi2S.js";import"./useStatic-CZJ_DwPf.js";import"./getActionGroupSlot-D49HjIN5.js";import"./dynamic-SDISKgE-.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";import"./react-children-utilities-M78AEMQD.js";import"./ClearPropsContext-CDRCLX7w.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],N=k("outline","paperclip","Paperclip",M),Ar={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(H,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(P,{children:"File too large"})]})},c={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(K,{children:r.jsx(N,{})})})})},p={render:e=>{const[m,R]=W.useState(null),d=m==null?void 0:m[0];return r.jsxs(_,{children:[r.jsxs(o,{...e,onChange:R,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),d==null?void 0:d.name]})}};var u,F,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,I,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var E,D,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const Gr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,c as IconButton,n as ReadOnly,s as WithDescription,a as WithError,p as WithHandler,Gr as __namedExportsOrder,Ar as default};
