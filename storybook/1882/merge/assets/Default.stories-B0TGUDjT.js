import{j as e,r as O}from"./iframe-Budb-7am.js";import{L as s}from"./Label-DzBJxL-G.js";import{F as o}from"./FileField-e5mwOUfx.js";import{B as t}from"./Button-DlmJA7gy.js";import{S as A}from"./Section-DSsLRbzV.js";import{F as H}from"./FieldError-YXSjvpRj.js";import{F as P}from"./FieldDescription-6ByGRMUQ.js";import{K as R,a1 as G}from"./IconWarning-DHwZhMPm.js";import{u as U,F as k,t as q}from"./Form-DEfLTd7k.js";import{A as w}from"./ActionGroup-BXxBA1OB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-HNH7RKnU.js";import"./mergeRefs-BTIKDTd_.js";import"./index-BpM7E2Cn.js";import"./useLocalizedStringFormatter-CybNj2CY.js";import"./context-CJMSS7cd.js";import"./Label-RM_Po7kI.js";import"./utils-BvIm0V7l.js";import"./Hidden-ldu86gX3.js";import"./FormField.module-CqWyJNQI.js";import"./Form-DC4Rz7ax.js";import"./useFocus-Pkimm2oK.js";import"./useLabel-TSCdqSxt.js";import"./FieldError--Cn4xsFj.js";import"./Text-3Ba5r2Ha.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DBRwONdh.js";import"./useFocusRing-Dpjm87_-.js";import"./browser-DtJAwUnv.js";import"./Text-1Vh0OzT8.js";import"./EmulatedBoldText-os5LgzLJ.js";import"./LoadingSpinner-akPoSbp3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DjLWq9Wn.js";import"./ProgressBar-CfQlEPzK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-loP-J0cx.js";import"./useFocusable-CC21Us72.js";import"./ContextMenuSection-Co3uaLKd.js";import"./Action-B12Ua1Cm.js";import"./context-BsbU81yG.js";import"./useStatic-DaioOtN4.js";import"./getActionGroupSlot-_4HxksMv.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D1PODoJe.js";import"./RSPContexts-Tr5byqnH.js";import"./OverlayArrow-DviLC0jr.js";import"./useControlledState-SkoShBYt.js";import"./Collection-CvfcDEqP.js";import"./CollectionBuilder-goJFEW7Y.js";import"./Separator-D8RFWE6v.js";import"./SearchField-CJT12BWN.js";import"./useTextField-B5KjZWGb.js";import"./useFormReset-Y1wMMKwI.js";import"./TextField-BONCp9nZ.js";import"./useEvent-Ced8YBYQ.js";import"./SelectionManager-CyTDI0bw.js";import"./useCollator-DG886A6G.js";import"./FocusScope-Bx0T309W.js";import"./VisuallyHidden-BhwKMH6u.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
