import{j as e,r as O}from"./iframe-DHE-6oks.js";import{L as s}from"./Label-CsrQ8fuF.js";import{F as o}from"./FileField-CSegoT2g.js";import{B as t}from"./Button-DTmWymNY.js";import{S as W}from"./Section-hBJqb3I5.js";import{F as H}from"./FieldError-cJslzypo.js";import{F as P}from"./FieldDescription-EPVobIp_.js";import{A as R,_ as G}from"./IconWarning-Cic1MV-m.js";import{u as U,F as k,t as q}from"./Form-Cv2JPUa-.js";import{A as w}from"./ActionGroup-BHyeeSSX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./context-DFltFWpJ.js";import"./Label-CRHcOnwp.js";import"./utils-x8BQYX4-.js";import"./Hidden-wM-8btK_.js";import"./FormField.module-B9AzUSUD.js";import"./Form-B4xkNDou.js";import"./useFocus-DYGSM8hG.js";import"./useLabel-DfuADmFb.js";import"./FieldError-B9K2-GIk.js";import"./Text-NjMLt3Ri.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-DW8k9amG.js";import"./useFocusRing-OVXrKScL.js";import"./browser-DInQ8S6B.js";import"./Text-DvqkAO4K.js";import"./EmulatedBoldText-h05YTKz1.js";import"./LoadingSpinner-CGq1_nld.js";import"./Button-Dx38wLWj.js";import"./ProgressBar-D7CY6Vap.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKLIgAwR.js";import"./useFocusable-BqyWOhG-.js";import"./ContextMenuSection-rhbKwxLA.js";import"./Action-VI9cAUPd.js";import"./context-C7gD2f3O.js";import"./useStatic-RbPw01cN.js";import"./getActionGroupSlot-BAwn8Ach.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CmbCeDcm.js";import"./RSPContexts-B_OykxZB.js";import"./OverlayArrow-BzBmdrc3.js";import"./useControlledState-DtNNEi2b.js";import"./Collection-DvDkMv-D.js";import"./CollectionBuilder-DOrrKo3i.js";import"./Separator-s586xCfF.js";import"./SearchField-B1O_97SX.js";import"./Group-DF6Pci-D.js";import"./useTextField-C3m2uMQS.js";import"./useFormReset-BToKGHXS.js";import"./TextField-D2dBDnFN.js";import"./SelectionManager-jb_M3DhH.js";import"./useEvent-DAUMmEgK.js";import"./useCollator-_wAd7c24.js";import"./FocusScope-DduXebcv.js";import"./VisuallyHidden-JQCaE509.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
