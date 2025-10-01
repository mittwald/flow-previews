import{j as r,r as W}from"./iframe-DRU2mvvl.js";import{L as l}from"./Label-BMa7ap8T.js";import{F as t}from"./FileField-d4M8RvdY.js";import{B as o}from"./Button-B0nESNPa.js";import{S as _}from"./Section-BqGqHoUM.js";import{F as P}from"./FieldError-DvrKLXyD.js";import{F as H}from"./FieldDescription-DM9XG9SC.js";import{O as k,K}from"./IconWarning-Ns7aLDcg.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./index-BV-9eFwZ.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./Label-DZZppM_K.js";import"./utils-CFpcVBbf.js";import"./Hidden-CuastpsR.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BPBMmZYe.js";import"./useFocus-WX08leiR.js";import"./FieldError-C8YHk-IR.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-Hz2jOfAo.js";import"./useFocusRing-Dvcn05WP.js";import"./browser-DycDZ9Cy.js";import"./useMakeFocusable-BXp11O4i.js";import"./Text-CEDtxg_Y.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqWNUUeu.js";import"./useFocusable-Bm6appxO.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Action-DTfm05Ga.js";import"./context-BmZA5kUX.js";import"./useStatic-ZRFoobPh.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./dynamic-BlISIwZy.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";/**
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
