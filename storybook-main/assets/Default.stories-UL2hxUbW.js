import{j as e,r as O}from"./iframe-XU38G95a.js";import{L as s}from"./Label-ClqUqVil.js";import{F as o}from"./FileField-DgJr5ZuC.js";import{B as t}from"./Button-BRSF3HU2.js";import{S as A}from"./Section-C9qtj2pB.js";import{F as H}from"./FieldError-DDQ8jatw.js";import{F as P}from"./FieldDescription-HGpWW5AZ.js";import{D as R,_ as G}from"./IconWarning-C4sgFplx.js";import{u as U,F as k,t as q}from"./Form-WYXypPLt.js";import{A as w}from"./ActionGroup-altzehyl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./context-DoEtjPsM.js";import"./Label-B-D8nJqg.js";import"./utils-CRMz2C-S.js";import"./Hidden-CmYs0ax8.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BwQPNTC6.js";import"./useFocus-BcwSg9Gz.js";import"./useLabel-DWzTJ_60.js";import"./FieldError-iHvRLgo5.js";import"./Text-BOldZPQm.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CaxTXUah.js";import"./useFocusRing-_ts8IeVv.js";import"./browser-DzHUdCJ5.js";import"./Text-BiCu62_D.js";import"./EmulatedBoldText-DgdtlBmQ.js";import"./LoadingSpinner-BHQyVil0.js";import"./Button-DXKMbIig.js";import"./ProgressBar-B_1vEsN7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmxXsmze.js";import"./useFocusable-bB4ldgF4.js";import"./ContextMenuSection-BC5uz-fg.js";import"./Action-ak2exQl4.js";import"./context-C_3J_Isg.js";import"./useStatic-IEgx7F5P.js";import"./getActionGroupSlot-CNBLHpLc.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-WotfotBD.js";import"./RSPContexts-Dggqaxhp.js";import"./OverlayArrow-DHjXAVGD.js";import"./useControlledState-D-ouz_Ia.js";import"./Collection-PyKyE3xx.js";import"./CollectionBuilder-BF5rDR9u.js";import"./Separator-DvLdq-tR.js";import"./SearchField-C9T5dJPC.js";import"./useTextField-DczSeHlH.js";import"./useFormReset-CGohrCOb.js";import"./TextField-OEkZHrb0.js";import"./useEvent-BbdxCe-3.js";import"./SelectionManager-C40pIXC_.js";import"./useCollator-C7gGvaqP.js";import"./FocusScope-ng_yE7d5.js";import"./VisuallyHidden-DU3qZR-S.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
