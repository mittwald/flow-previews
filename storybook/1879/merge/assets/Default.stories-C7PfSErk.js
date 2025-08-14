import{j as e,r as O}from"./iframe-r2ISa6Vz.js";import{L as s}from"./Label-CqYrEG64.js";import{F as o}from"./FileField-DDYTLfcx.js";import{B as t}from"./Button-MKxMP2k4.js";import{S as A}from"./Section-BlibzvNJ.js";import{F as H}from"./FieldError-CqMpihJO.js";import{F as P}from"./FieldDescription-Dmxztb2U.js";import{D as R,_ as G}from"./IconWarning-DfNEkDa-.js";import{u as U,F as k,t as q}from"./Form-BqQziiD9.js";import{A as w}from"./ActionGroup-B6GN3Zlk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNwGty8-.js";import"./mergeRefs-D4TwGOEw.js";import"./index-CwWOZNJb.js";import"./useLocalizedStringFormatter-D6_Bns5v.js";import"./context-AXeZ-4C7.js";import"./Label-D9vBeQ72.js";import"./utils-DwHpNHaD.js";import"./Hidden-3Y5hF2-9.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BGPVVXS4.js";import"./useFocus-De90M8h7.js";import"./useLabel-C31-NaD3.js";import"./FieldError-h_DzRRQi.js";import"./Text--yGrToJ3.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DmvaYMW3.js";import"./useFocusRing-Dm8SMHzX.js";import"./browser-vniJOv6A.js";import"./Text-DXIJD_mG.js";import"./EmulatedBoldText-DORQB6U8.js";import"./LoadingSpinner-BAfbRjK8.js";import"./Button-B3sV0uoO.js";import"./ProgressBar-BIuQEpdf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIA34O1p.js";import"./useFocusable-BHAsUzIM.js";import"./ContextMenuSection-CV7sQIAK.js";import"./Action-D78VW4nY.js";import"./context-B0bSHq_C.js";import"./useStatic-TtOui2SW.js";import"./getActionGroupSlot-B_TikFXZ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BtlI13OW.js";import"./RSPContexts-BxS850vN.js";import"./OverlayArrow-DAzMh1Ha.js";import"./useControlledState-DWYZHaxy.js";import"./Collection-C-bKGm-J.js";import"./CollectionBuilder-DCMEaYz9.js";import"./Separator-1SYB0Oyv.js";import"./SearchField-Cl7GqbCS.js";import"./useTextField-N_W8v2lE.js";import"./useFormReset-Cehr99bh.js";import"./TextField-CeohDO7l.js";import"./useEvent-B23TrCpv.js";import"./SelectionManager-BzHF4j0O.js";import"./useCollator-BnQV3F6v.js";import"./FocusScope-C4ChjLNl.js";import"./VisuallyHidden-DXZRkoBb.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
