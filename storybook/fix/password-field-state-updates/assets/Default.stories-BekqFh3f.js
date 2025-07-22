import{j as e,r as O}from"./iframe-RyyXbGrI.js";import{L as s}from"./Label-CFvtJK4g.js";import{F as o}from"./FileField-C0hW0i9k.js";import{B as t}from"./Button-FN0w0vAZ.js";import{S as W}from"./Section-CLZwWhvz.js";import{F as H}from"./FieldError-BjHPKtj9.js";import{F as P}from"./FieldDescription-Cy6thD0Q.js";import{A as R,_ as G}from"./IconWarning-C52r753T.js";import{u as U,F as k,t as q}from"./Form-SW4uQAKP.js";import{A as w}from"./ActionGroup-B0It9eKr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B1uYDNh0.js";import"./mergeRefs-TzEeC_ny.js";import"./index-CkUh_6WG.js";import"./useLocalizedStringFormatter-D3yp90gU.js";import"./context-CVBx-lw8.js";import"./Label-DyZcxK1e.js";import"./utils-CSApR2SK.js";import"./Hidden-CBQwCv0D.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BkhipvRR.js";import"./useFocus-CDHSIkFG.js";import"./useLabel-DfsiheSh.js";import"./FieldError-BvyzplcM.js";import"./Text-BimzKAGJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-BJStptK8.js";import"./useFocusRing-Cp5tV9bB.js";import"./browser-DZnqvRXk.js";import"./Text-Bwgmr3xm.js";import"./EmulatedBoldText-BGBtIkEw.js";import"./LoadingSpinner-CXoKjikv.js";import"./Button-BVPFu0Yj.js";import"./ProgressBar-C1MhwVHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BifiEpzl.js";import"./useFocusable-B1PzsIJa.js";import"./ContextMenuSection-CAGauFWq.js";import"./Action-Dda11jpG.js";import"./context-DCO0IxwY.js";import"./useStatic-CSsf_UFn.js";import"./getActionGroupSlot-CMWgW7VZ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Dzx6c2m8.js";import"./RSPContexts-CZzeIyng.js";import"./OverlayArrow-Dd73_Jpk.js";import"./useControlledState-BAW98GGA.js";import"./Collection-C_jXpzbR.js";import"./CollectionBuilder-BR9WT68g.js";import"./Separator-D5NfBiGb.js";import"./SearchField-lGDi9OEc.js";import"./Group-l6ZdH-Sd.js";import"./useTextField-CBuiCA3E.js";import"./useFormReset-BKdfKWXM.js";import"./TextField-aC9_w8eq.js";import"./SelectionManager-DjIO02do.js";import"./useEvent-B55JhqGe.js";import"./useCollator-Cz2D5_0V.js";import"./FocusScope-BOeRx0u7.js";import"./VisuallyHidden-BRg-FWnS.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
