import{j as e,r as O}from"./iframe-CqOqoVaP.js";import{L as s}from"./Label-CXX9Ul6V.js";import{F as o}from"./FileField-Bn_wHb6U.js";import{B as t}from"./Button-CLlHTQEG.js";import{S as A}from"./Section-2cs3PTPD.js";import{F as H}from"./FieldError-EM0a2FXb.js";import{F as P}from"./FieldDescription-S2KPeq-n.js";import{K as R,a1 as G}from"./IconWarning-Bl-oEACJ.js";import{u as U,F as k,t as q}from"./Form-Nmzpv4iw.js";import{A as w}from"./ActionGroup-DjMrk1wi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./context-V257UCTc.js";import"./Label-DmkwH-X_.js";import"./utils-CLjii6jw.js";import"./Hidden-G9XKC0s_.js";import"./FormField.module-CqWyJNQI.js";import"./Form-DfmQoqyq.js";import"./useFocus-B9OFNFcs.js";import"./useLabel-BbxdwBsw.js";import"./FieldError-Db8jl934.js";import"./Text-cqx9MXzt.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cl8UGCCk.js";import"./useFocusRing-BUAA1D8N.js";import"./browser-5vSgihvA.js";import"./Text-B3-X_MJa.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./LoadingSpinner-ABbum_Xg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C385LXs-.js";import"./ProgressBar-C7nzlf9n.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-bNRByjMC.js";import"./useFocusable-BW0s8v46.js";import"./ContextMenuSection-uq9F03so.js";import"./Action-fJ1CcCf_.js";import"./context-DEmZbP6Z.js";import"./useStatic-BhcqT1RN.js";import"./getActionGroupSlot-D2CKZ7h6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C3VX0NXb.js";import"./RSPContexts-D4Iw314Z.js";import"./OverlayArrow-Demj6cv0.js";import"./useControlledState-BdCCPWsc.js";import"./Collection-PuGMBXVn.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Separator-5LsX3nzm.js";import"./SearchField-AywMrJlM.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./TextField-DbkzlANK.js";import"./useEvent-HRbQaI7K.js";import"./SelectionManager-DbaPsgiJ.js";import"./useCollator-C8Ow2U1A.js";import"./FocusScope-C_8IMyFN.js";import"./VisuallyHidden-BthzWCih.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,B,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var D,W,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
