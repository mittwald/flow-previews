import{j as e,r as O}from"./iframe-ioB74BFE.js";import{L as s}from"./Label-Bf-bWzV0.js";import{F as o}from"./FileField-BDZJ5BOL.js";import{B as t}from"./Button-MpugPYzI.js";import{S as W}from"./Section-CALbHKtU.js";import{F as H}from"./FieldError-JtFjK6bM.js";import{F as P}from"./FieldDescription-eGz-n7rX.js";import{A as R,_ as G}from"./IconWarning-DcmAhB0m.js";import{u as U,F as k,t as q}from"./Form-DoPvWglD.js";import{A as w}from"./ActionGroup-xgvliJmO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./context-BPL8pm8m.js";import"./Label-Ci4HPtMl.js";import"./utils-B4cCkl7w.js";import"./Hidden-BUUKH5FE.js";import"./FormField.module-B9AzUSUD.js";import"./Form-u9b0IMfB.js";import"./useFocus-Cm5D2sPa.js";import"./useLabel-CB1mDCyy.js";import"./FieldError-Z5j2ND32.js";import"./Text-CCXZaIsU.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-Bztt3-Ug.js";import"./useFocusRing-CU7EmQP7.js";import"./browser-BI2T8H6c.js";import"./Text-BZaQwICB.js";import"./EmulatedBoldText-C5-k4pIu.js";import"./LoadingSpinner-DAUxEQn_.js";import"./Button-C3ElHjZf.js";import"./ProgressBar-6K_Q5ytM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3I07Rsr.js";import"./useFocusable-2c5mTAR9.js";import"./ContextMenuSection-VWKPQl1H.js";import"./Action-PE71Lbss.js";import"./context-hIhIfxI4.js";import"./useStatic-BxLAdQVw.js";import"./getActionGroupSlot-CF5EeO16.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CftsoPvf.js";import"./RSPContexts-CvEKqGkH.js";import"./OverlayArrow-BGE95OS1.js";import"./useControlledState-DPunIX8S.js";import"./Collection-DiJArqpe.js";import"./CollectionBuilder-BSEB-cLG.js";import"./Separator-RUGTe1Gb.js";import"./SearchField-D30c1-ND.js";import"./Group-DEqMnOwE.js";import"./useTextField-udwT8Fkv.js";import"./useFormReset-Ik_MynpH.js";import"./TextField-DC2JuRaU.js";import"./SelectionManager-BJVavWLX.js";import"./useEvent-WwaZxlmw.js";import"./useCollator-CLy1qn58.js";import"./FocusScope-Dmal2fI9.js";import"./VisuallyHidden-BOO0yHnw.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
