import{j as e,r as O}from"./iframe-DRWwRHPb.js";import{L as s}from"./Label-DMZs6_dS.js";import{F as o}from"./FileField-CSECRDmX.js";import{B as t}from"./Button-C17kQQYD.js";import{S as A}from"./Section-D4sRx5-4.js";import{F as H}from"./FieldError-BxgQBJxP.js";import{F as P}from"./FieldDescription-B8gji3F1.js";import{D as R,_ as G}from"./IconWarning-DhSonKOB.js";import{u as U,F as k,t as q}from"./Form-BZ4izQL_.js";import{A as w}from"./ActionGroup-BVmYSP6K.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./context-jL0Ioa3t.js";import"./Label-DWKl8ZCI.js";import"./utils-9ciE-ZWz.js";import"./Hidden-CgY-Zzb9.js";import"./FormField.module-B9AzUSUD.js";import"./Form-C-fYDZS9.js";import"./useFocus-Cklz1p5-.js";import"./useLabel-C1sZK0NB.js";import"./FieldError-sbX835HY.js";import"./Text-XTosNzcc.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DyuuzcKr.js";import"./useFocusRing-DwMv-ywr.js";import"./browser-ChcUEk5m.js";import"./Text-BIokAaTQ.js";import"./EmulatedBoldText-w_oHSgVv.js";import"./LoadingSpinner-B_6uztW9.js";import"./Button-BJEoKlME.js";import"./ProgressBar-lrbeVblJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DZFGRV58.js";import"./useFocusable-CTYzjUzk.js";import"./ContextMenuSection-YVOsEwEr.js";import"./Action-Bq2hQ8Bh.js";import"./context-GwQ3zI17.js";import"./useStatic-u3WHDxzv.js";import"./getActionGroupSlot-C6b8pLJW.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-ImkhFy9O.js";import"./RSPContexts-BIfyYgqP.js";import"./OverlayArrow-CjAgqYv2.js";import"./useControlledState-BmVuB4nj.js";import"./Collection-LSZw9Opa.js";import"./CollectionBuilder-DMMzaxy1.js";import"./Separator-Cq-Q8G1M.js";import"./SearchField-9TpmVPLK.js";import"./useTextField-C4Pn4RsW.js";import"./useFormReset-XyyE6UJM.js";import"./TextField-BHCgELYj.js";import"./useEvent-D_icz2Dp.js";import"./SelectionManager-w9v-Ws39.js";import"./useCollator-CaT5c7qP.js";import"./FocusScope-hUGkKLjX.js";import"./VisuallyHidden-CJKgqKOh.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
