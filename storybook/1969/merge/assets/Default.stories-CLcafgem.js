import{j as e,r as k}from"./iframe-DxsUlawc.js";import{L as s}from"./Label-B7Tx4Pgn.js";import{F as o}from"./FileField-B2fkb459.js";import{B as t}from"./Button-IG1UbGgX.js";import{S as H}from"./Section-BWq5F8QN.js";import{F as G}from"./FieldError-B5iG2Dx8.js";import{F as U}from"./FieldDescription-BYp4Hrne.js";import{O as q,K as w}from"./IconWarning-CxX_lufW.js";import{u as K,F as M,t as N}from"./Form-UweLUich.js";import{A as T}from"./ActionGroup-DbOzWeFO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./context-Pme8S34O.js";import"./Label-DR2p3ljL.js";import"./utils-anS-nfaS.js";import"./Hidden-DmCEYrWx.js";import"./FormField.module-CqWyJNQI.js";import"./Form-DGyQGQrN.js";import"./useFocus-19elgRbR.js";import"./useLabel-CBxP0DvO.js";import"./FieldError-BogjW8MC.js";import"./Text-w8QkFxXB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BM4Odlhy.js";import"./useFocusRing-NqyRw62N.js";import"./browser-GG2yXHGk.js";import"./Text-BghZAovJ.js";import"./EmulatedBoldText-HMke4BSZ.js";import"./LoadingSpinner-B_W_hnSA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6Z7YYpb.js";import"./ProgressBar-litaDe0V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuZIkaGu.js";import"./useFocusable-Dsjl8uYb.js";import"./ContextMenuSection-G4FkDWGU.js";import"./Action-Bm6Z0jHH.js";import"./context-D1Ianu5s.js";import"./useStatic-DTmVdxCi.js";import"./getActionGroupSlot-DSGD8tPp.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BhiDy3Uj.js";import"./RSPContexts-D24GGWc4.js";import"./OverlayArrow-Cqrl2gO5.js";import"./useControlledState-BiaHUtte.js";import"./Collection-2mgYJ3lC.js";import"./CollectionBuilder-DUz18fnw.js";import"./Separator-MdtjVr6X.js";import"./SearchField-CP40iq6L.js";import"./useTextField-C34ms4nI.js";import"./useFormReset-C5585XYI.js";import"./TextField-BV-7_CBI.js";import"./useEvent-CBeKZXam.js";import"./SelectionManager-zRsSiPpC.js";import"./useCollator-DS1CRBkN.js";import"./FocusScope-_FVys5dN.js";import"./VisuallyHidden-DjzEMrNo.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,B,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,O,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,R,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,A,P;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const tr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,tr as __namedExportsOrder,or as default};
