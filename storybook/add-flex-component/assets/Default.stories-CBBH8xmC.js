import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-BZISi7jw.js";import{L as s}from"./Label-BWLhaeSV.js";import{F as o}from"./FileField-C1f83d21.js";import{B as t}from"./Button-DhoxjOB0.js";import{S as H}from"./Section-VaUdaP2P.js";import{F as G}from"./FormField.module-BvsJ67Yi.js";import{F as R}from"./FieldDescription-DWIAfkTb.js";import{a as k}from"./IconApp-BlCDOz7i.js";import{u as q,F as w,t as U}from"./Form-DYdqRWdB.js";import{a as _}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{A as O}from"./ActionGroup-BqtaK37Y.js";import{f as z}from"./IconWarning-Cksp_dQT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./flowComponent-BYduNA4_.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Label-RYyxMwZH.js";import"./utils-CzVyYWZn.js";import"./Hidden-DBxI3g91.js";import"./Input-DaA3cxmW.js";import"./useFocusRing-DzGSygZM.js";import"./FieldError-DoW3KOQ8.js";import"./Text-PTaPc_Ci.js";import"./filterDOMProps-CeZl_uWj.js";import"./LoadingSpinner-BNlvu0xK.js";import"./Text-D9M1FVhy.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./usePress-DZCrAIzv.js";import"./ContextMenuSection-COnqG3mz.js";import"./Action-Dnj71fzz.js";import"./context-T6wCf2v9.js";import"./useStatic-79kqjvSG.js";import"./getActionGroupSlot-CjUGCB-i.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BV8uMRwe.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./v4-CtRu48qb.js";const Te={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=_("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},p={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(k,{children:e.jsx(z,{})})})})},d={render:r=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=q(),n=U();return e.jsx(w,{form:r,onSubmit:J,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(O,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,B,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Ve=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,p as IconButton,c as WithDescription,m as WithError,d as WithHandler,u as WithReactHookForm,Ve as __namedExportsOrder,Te as default};
