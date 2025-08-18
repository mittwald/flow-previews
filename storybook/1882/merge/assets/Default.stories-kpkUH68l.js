import{j as e,r as O}from"./iframe-BAtUELBR.js";import{L as s}from"./Label-QEHCu_aF.js";import{F as o}from"./FileField-BRspvL9L.js";import{B as t}from"./Button-BEq1XaV7.js";import{S as A}from"./Section-C4j0_hHz.js";import{F as H}from"./FieldError-C6NpbvhG.js";import{F as P}from"./FieldDescription-DGonepcX.js";import{K as R,a1 as G}from"./IconWarning-h84dHhem.js";import{u as U,F as k,t as q}from"./Form-fruY6vLK.js";import{A as w}from"./ActionGroup-DylyHBpW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./context-DbLHYHiQ.js";import"./Label-DhaMlcU0.js";import"./utils-UbQMFgd1.js";import"./Hidden-CDb1KA3j.js";import"./FormField.module-CqWyJNQI.js";import"./Form-D4YUCIIk.js";import"./useFocus-DJUZ2En4.js";import"./useLabel-DmioRyAZ.js";import"./FieldError-D0SFQKR_.js";import"./Text-j2Uyll_5.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BnQz7s-E.js";import"./useFocusRing-BdUFZX00.js";import"./browser-BVtPTxgw.js";import"./Text-DzMLmIhZ.js";import"./EmulatedBoldText-CosrpHXB.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJPJvF0.js";import"./ProgressBar-BZ7qWBUr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B88qu-VD.js";import"./useFocusable-BuN38nX6.js";import"./ContextMenuSection-DceDQlVt.js";import"./Action-DFFHrQF0.js";import"./context-B7yiaX0P.js";import"./useStatic-D26yqcd1.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CdEVLYW9.js";import"./RSPContexts-DQlzARDq.js";import"./OverlayArrow-CGwoImC3.js";import"./useControlledState-Cdm8pC1T.js";import"./Collection-DKvh5qnS.js";import"./CollectionBuilder-DOOg8umD.js";import"./Separator-BOj5W9de.js";import"./SearchField-DJD_RJ9_.js";import"./useTextField-BD89Nm0g.js";import"./useFormReset-Cu48O1XS.js";import"./TextField-CA7eDuBl.js";import"./useEvent-DEdGGfK8.js";import"./SelectionManager-pSSWogs3.js";import"./useCollator-CMTT-Cpv.js";import"./FocusScope-CQU9T81i.js";import"./VisuallyHidden-CFnWwY81.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
