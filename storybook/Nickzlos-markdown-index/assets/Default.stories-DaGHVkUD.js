import{j as e,r as O}from"./iframe-CPpiztA9.js";import{L as s}from"./Label-BGSD1rhi.js";import{F as o}from"./FileField-DS2R8yxW.js";import{B as t}from"./Button-C-ub_lVB.js";import{S as A}from"./Section-e9XZJWXh.js";import{F as H}from"./FieldError-Ci8tQ9GY.js";import{F as P}from"./FieldDescription-kMDhr7Ro.js";import{D as R,_ as G}from"./IconWarning-DGFg2xah.js";import{u as U,F as k,t as q}from"./Form-06t4F3b0.js";import{A as w}from"./ActionGroup-D-73Ndws.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./context-Dtd4A8DJ.js";import"./Label-DrzbYkyA.js";import"./utils-DXg4ziAt.js";import"./Hidden-bVSOJLMB.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BF7n3RGH.js";import"./useFocus-f0syXR1u.js";import"./useLabel-CbuGYTDm.js";import"./FieldError-DNVX5F1U.js";import"./Text-D73bWKdR.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BazAvpcu.js";import"./useFocusRing-ryN7bem9.js";import"./browser-CCSZxPxO.js";import"./Text-B9GDlRIl.js";import"./EmulatedBoldText-49ZPQjyJ.js";import"./LoadingSpinner-CgYhtYh1.js";import"./Button-BpRzT99M.js";import"./ProgressBar-BJkoGjLL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bn1QFLmx.js";import"./useFocusable-BdzC7gBh.js";import"./ContextMenuSection-DpVNIsXF.js";import"./Action-Bo4rmNqt.js";import"./context-C5LerLhv.js";import"./useStatic-DpS3r3sC.js";import"./getActionGroupSlot-Dzp14r5x.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CUla8htU.js";import"./RSPContexts-CFiizNM1.js";import"./OverlayArrow-p4WTGnf4.js";import"./useControlledState-CvPFcFpa.js";import"./Collection-rnaxRpPP.js";import"./CollectionBuilder-B0lIXlwM.js";import"./Separator-CbcELXN4.js";import"./SearchField-BSkiBWnk.js";import"./useTextField-B-d085GV.js";import"./useFormReset-MeUe0mbs.js";import"./TextField-CdnmB6pT.js";import"./useEvent-BZyVmUT6.js";import"./SelectionManager-CwCMliWC.js";import"./useCollator-B-f7_yfw.js";import"./FocusScope-mK0EKnGk.js";import"./VisuallyHidden-DQWk5n-D.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
