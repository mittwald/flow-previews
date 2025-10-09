import{j as r,r as W}from"./iframe-DwZ8STeX.js";import{L as l}from"./Label-wZ6tq0z6.js";import{F as t}from"./FileField-CtcfqzV9.js";import{B as o}from"./Button-DviFkjeq.js";import{S as _}from"./Section-ClBJebLo.js";import{F as P}from"./FieldError-DOIfsPUC.js";import{F as H}from"./FieldDescription-BrHb9YgI.js";import{O as k,K}from"./IconWarning-dtP1FcGg.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./Label-DpGi0C14.js";import"./utils-7Pnsuj4A.js";import"./Hidden-CV41pM0d.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-DWWt7inC.js";import"./useFocus-BONLbswZ.js";import"./FieldError-CX3z6nx3.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-DPWebHIT.js";import"./useFocusRing-Bg4FiEXG.js";import"./browser-DDdNHtRK.js";import"./useMakeFocusable-BLJfe8lC.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocusable-p3-NtQMC.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Action-bmScN_4O.js";import"./context-DCjwncLb.js";import"./useStatic-BQF2lsen.js";import"./getActionGroupSlot-CSCOifJo.js";import"./dynamic-DhSxKtV5.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";/**
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
