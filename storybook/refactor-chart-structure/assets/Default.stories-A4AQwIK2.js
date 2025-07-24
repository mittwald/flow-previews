import{j as e,r as O}from"./iframe-B14Hztna.js";import{L as s}from"./Label-zfejy0bC.js";import{F as o}from"./FileField-3LwEgGpY.js";import{B as t}from"./Button-CgtdFPzc.js";import{S as A}from"./Section-CaEQ397A.js";import{F as H}from"./FieldError-DMf0Tswo.js";import{F as P}from"./FieldDescription-BwyiFDmb.js";import{C as R,_ as G}from"./IconWarning-EXdx-O5E.js";import{u as U,F as k,t as q}from"./Form-DNeIsDac.js";import{A as w}from"./ActionGroup-Bw_y0i8m.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./context-ClRpg4Pi.js";import"./Label-Dj1DBquH.js";import"./utils-DoVwnhJ7.js";import"./Hidden-DEGhv2S1.js";import"./FormField.module-B9AzUSUD.js";import"./Form-Dxjc7g8l.js";import"./useFocus-DUtc_xDc.js";import"./useLabel-BQ9idzkA.js";import"./FieldError-Bx0_OVZy.js";import"./Text-CpIc-G8R.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-DpcS1CTS.js";import"./useFocusRing-BniRYtyP.js";import"./browser-DQtsHFqq.js";import"./Text-CvN8mc0t.js";import"./EmulatedBoldText-CgkGARPI.js";import"./LoadingSpinner-BUgI2O_m.js";import"./Button-C-dpYs0v.js";import"./ProgressBar-DTeLqJx_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIDHtETH.js";import"./useFocusable-qJIKezDE.js";import"./ContextMenuSection-CZ89H5a4.js";import"./Action-C7DGnd--.js";import"./context-BfdzKOWn.js";import"./useStatic-CMMnV-8N.js";import"./getActionGroupSlot-Coxgvja7.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BFvasG0n.js";import"./RSPContexts-Bfi0I49R.js";import"./OverlayArrow-DZfk_ErB.js";import"./useControlledState-ByF29kyY.js";import"./Collection-fH4Kmtgq.js";import"./CollectionBuilder-bLuJ-4e5.js";import"./Separator-D2GbxrzK.js";import"./SearchField-BKuT-taP.js";import"./Group-CBVKEx7-.js";import"./useTextField-BRjgXeuB.js";import"./useFormReset-C7VrIa_J.js";import"./TextField-CPtvewAJ.js";import"./SelectionManager-DXvn-F5v.js";import"./useEvent-CXj5GaK9.js";import"./useCollator-BOITc0eH.js";import"./FocusScope-GGet2N6d.js";import"./VisuallyHidden-B90-554O.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var C,y,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(y=m.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,D,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Xe as default};
