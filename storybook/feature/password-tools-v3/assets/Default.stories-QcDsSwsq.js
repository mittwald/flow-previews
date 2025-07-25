import{j as e,r as O}from"./iframe-BBx9-gCC.js";import{L as s}from"./Label-CN6ALsUC.js";import{F as o}from"./FileField-C8Vllajf.js";import{B as t}from"./Button-Ddotms0d.js";import{S as W}from"./Section-BTEfNwGw.js";import{F as H}from"./FieldError-Db676PEG.js";import{F as P}from"./FieldDescription-jMpf2Cwd.js";import{A as R,_ as G}from"./IconWarning-47GPuUwW.js";import{u as U,F as k,t as q}from"./Form-kHJ7jlTR.js";import{A as w}from"./ActionGroup-OngeyNPY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./context-Ck7bCMhf.js";import"./Label-CVor_bqX.js";import"./utils-SrU--Gh3.js";import"./Hidden-BTXZmZLy.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DewizsXc.js";import"./useFocus-BXsHwCAW.js";import"./useLabel-CF_pOETX.js";import"./FieldError-CQ-c_qp9.js";import"./Text--Ew1YFd1.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-BKE4e8rI.js";import"./useFocusRing-D6klBOWk.js";import"./browser-Bo5IRxBw.js";import"./Text-BRZqhCt6.js";import"./EmulatedBoldText-BvDF2M3d.js";import"./LoadingSpinner-AZclZqAu.js";import"./Button-L3SI-iJl.js";import"./ProgressBar-CJ4YAGIN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dpgdsh2n.js";import"./useFocusable-D4Fl883K.js";import"./ContextMenuSection-BFwPoVa8.js";import"./Action-BVJDTfB3.js";import"./context-Dom9sQ0K.js";import"./useStatic-BS_If2Fg.js";import"./getActionGroupSlot-C2w1KC4o.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-H4IcaOME.js";import"./RSPContexts-JH7zjLDh.js";import"./OverlayArrow-B_GGjq9s.js";import"./useControlledState-DddH35UQ.js";import"./Collection-cumDjP4P.js";import"./CollectionBuilder-B9aud2Z5.js";import"./Separator-BwGnbFHF.js";import"./SearchField-CFDyyBZS.js";import"./Group-BE3jiUC2.js";import"./useTextField-Sw__XDSo.js";import"./useFormReset-dy85Q4T2.js";import"./TextField-D1wRIDn_.js";import"./SelectionManager-Jj460orM.js";import"./useEvent-CbTJhmHg.js";import"./useCollator-CBTsDb_F.js";import"./FocusScope-CSSHoYlT.js";import"./VisuallyHidden-DCQ3C4tW.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,A,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Xe as default};
