import{j as e,r as O}from"./iframe-BBgxZ9_Z.js";import{L as s}from"./Label-CMgPNz6D.js";import{F as o}from"./FileField-G11TDO4h.js";import{B as t}from"./Button-B-lzkDqv.js";import{S as A}from"./Section-sQnHBt5F.js";import{F as H}from"./FieldError-3nUx1gE4.js";import{F as P}from"./FieldDescription-BJC8XRIJ.js";import{D as R,_ as G}from"./IconWarning-8HHOdEAt.js";import{u as U,F as k,t as q}from"./Form-DGi1ZX7v.js";import{A as w}from"./ActionGroup-D0iIB9hA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IdqCMJT1.js";import"./mergeRefs-BLmxAuNF.js";import"./index-BhvP9-i6.js";import"./useLocalizedStringFormatter-oXVl5QY8.js";import"./context-1V9oDOBq.js";import"./Label-Di9QaZZ3.js";import"./utils-MwuRBPAU.js";import"./Hidden-k-QU5_bv.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CxmcAuRx.js";import"./useFocus-BbdsXgPj.js";import"./useLabel-CtD9pvoh.js";import"./FieldError-W_6exYVC.js";import"./Text-D0NxCgiz.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-ChejVHkC.js";import"./useFocusRing-LpVKnpiI.js";import"./browser-XdNXsdMD.js";import"./Text-DGcNKUf7.js";import"./EmulatedBoldText-Bf9Yi8oc.js";import"./LoadingSpinner-AMSMSqlY.js";import"./Button-CYTZuBnH.js";import"./ProgressBar-DwujBMLa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTZ5yxFT.js";import"./useFocusable-CfVMEKsh.js";import"./ContextMenuSection-DX6nVWXX.js";import"./Action-DpyN5NaX.js";import"./context-D62hB718.js";import"./useStatic-C_mBRxHK.js";import"./getActionGroupSlot-Ct403QjR.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DclGznPM.js";import"./RSPContexts-3v3yZrnH.js";import"./OverlayArrow-CFHpk9vq.js";import"./useControlledState-DynQBW6H.js";import"./Collection-yBxX2uBM.js";import"./CollectionBuilder-Cikntfcr.js";import"./Separator-DwoBWJxO.js";import"./SearchField-D1XEYmSH.js";import"./useTextField-QvIlaKbq.js";import"./useFormReset-BmT_Xdgp.js";import"./TextField-DQ00G_WY.js";import"./useEvent-CAp5Jueq.js";import"./SelectionManager-DEhn8O5H.js";import"./useCollator--BNdDS58.js";import"./FocusScope-CjT2Rvcj.js";import"./VisuallyHidden-DzvMb3_B.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(g=d.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var E,_,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(_=u.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
