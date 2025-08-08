import{j as e,r as O}from"./iframe-BTcUxdaq.js";import{L as s}from"./Label-Bgrifxv0.js";import{F as o}from"./FileField-C-wYpZN1.js";import{B as t}from"./Button-SMMW9b8C.js";import{S as A}from"./Section-C45a6-EC.js";import{F as H}from"./FieldError-BsnxNcFL.js";import{F as P}from"./FieldDescription-6nNRgJSl.js";import{D as R,_ as G}from"./IconWarning-DQhgAuti.js";import{u as U,F as k,t as q}from"./Form-cnWxryyK.js";import{A as w}from"./ActionGroup-BPYJCvNc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./context-DPBkKLSs.js";import"./Label-N2lNAPH4.js";import"./utils-QQf7G53U.js";import"./Hidden-C0wGKKFL.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BWd8hqS-.js";import"./useFocus-BGyfOFlp.js";import"./useLabel-COrOgVB9.js";import"./FieldError-CZwoNVbm.js";import"./Text-DQ5f9mUM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Bij86ZzX.js";import"./useFocusRing-C1MTD0-W.js";import"./browser-B8OJoPhG.js";import"./Text-Cyud7aU0.js";import"./EmulatedBoldText-CDVaFR1M.js";import"./LoadingSpinner-DQ2VKIPI.js";import"./Button-R5yzYc06.js";import"./ProgressBar-DujcM5UT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CFIgJOpO.js";import"./useFocusable-BavwL0Gh.js";import"./ContextMenuSection-c8LljZuw.js";import"./Action-BD0CTwd4.js";import"./context-BOTu0wPK.js";import"./useStatic-D47W8BT_.js";import"./getActionGroupSlot-CRqbjcra.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Cp_7H9MS.js";import"./RSPContexts-BdDzjtbv.js";import"./OverlayArrow-BOe63Seg.js";import"./useControlledState-UFVvdmji.js";import"./Collection-CCOeQAim.js";import"./CollectionBuilder-BMhklLUE.js";import"./Separator-jw0blZZr.js";import"./SearchField-BjsA91o0.js";import"./useTextField-BAW13dg9.js";import"./useFormReset-WxrNhhec.js";import"./TextField-BAMKAOQn.js";import"./useEvent-CkvJPork.js";import"./SelectionManager-aQw9Fg0e.js";import"./useCollator-BEdiRQuO.js";import"./FocusScope-_yP39RaH.js";import"./VisuallyHidden-17OXXq4D.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
