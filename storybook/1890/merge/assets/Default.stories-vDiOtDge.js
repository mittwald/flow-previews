import{j as e,r as O}from"./iframe-giJ3PN41.js";import{L as s}from"./Label-DSQuszpE.js";import{F as o}from"./FileField-DwfZ6fwr.js";import{B as t}from"./Button-t3gsP1h6.js";import{S as A}from"./Section-CLnE8yB0.js";import{F as H}from"./FieldError-BA6Xibs7.js";import{F as P}from"./FieldDescription-D3d-i13C.js";import{D as R,_ as G}from"./IconWarning-Dj_wwKGm.js";import{u as U,F as k,t as q}from"./Form-mzjax6uM.js";import{A as w}from"./ActionGroup-CwEH48hj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./context-B5VaUXEx.js";import"./Label-BWQQ3Esr.js";import"./utils-CXDqZ2sl.js";import"./Hidden-DRJxhyU2.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DPXxe_7V.js";import"./useFocus-CuIPz-Kl.js";import"./useLabel-DTs_WTOS.js";import"./FieldError-nVLUoiBd.js";import"./Text-CPIeRDsX.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CrHdP7HD.js";import"./useFocusRing-DUik2Nk4.js";import"./browser-DkEs9M37.js";import"./Text-unBq3m4E.js";import"./EmulatedBoldText-D-WMJ6En.js";import"./LoadingSpinner-kOBWqA9j.js";import"./Button-DJpSVAFI.js";import"./ProgressBar-B5g3Upep.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D1wL7cKS.js";import"./useFocusable-Bp_JhFQV.js";import"./ContextMenuSection-BxP3d4es.js";import"./Action-oFlNv8p8.js";import"./context-CtVI5d4l.js";import"./useStatic-BgGRa1ft.js";import"./getActionGroupSlot-DO7dNHL6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BJZav00b.js";import"./RSPContexts-D9-_jwd4.js";import"./OverlayArrow-BGGM7Kja.js";import"./useControlledState-BdipClPW.js";import"./Collection-DKY2nhBh.js";import"./CollectionBuilder-DGOIxE5b.js";import"./Separator-pxt8W_GD.js";import"./SearchField-TlY83ID8.js";import"./useTextField-_WbwmA1r.js";import"./useFormReset-ChCBJkpa.js";import"./TextField-CJSQz5rH.js";import"./useEvent-BWSnRzjc.js";import"./SelectionManager-xGqpQwPR.js";import"./useCollator-n7eXimmn.js";import"./FocusScope-D6b4m46d.js";import"./VisuallyHidden-DL0JmpvH.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
