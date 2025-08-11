import{j as e,r as O}from"./iframe-D2buA_qM.js";import{L as s}from"./Label-BBxZTNKD.js";import{F as o}from"./FileField-2goopSUg.js";import{B as t}from"./Button-zVUpRv9Z.js";import{S as A}from"./Section-B24mVyfd.js";import{F as H}from"./FieldError-DDV9a_7l.js";import{F as P}from"./FieldDescription-J-tPiH_P.js";import{D as R,_ as G}from"./IconWarning-IOoTZAJG.js";import{u as U,F as k,t as q}from"./Form-mvVWTRke.js";import{A as w}from"./ActionGroup-BnTjuqT1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./context-DqOuYBdO.js";import"./Label-N33FpYFY.js";import"./utils-C_LZ7m3D.js";import"./Hidden-avqQs3vJ.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BNf6kdxI.js";import"./useFocus-1B3Rl8Uo.js";import"./useLabel-CoFh3sW6.js";import"./FieldError-B8sT_j_d.js";import"./Text-BCY1tMCR.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BFErIHGB.js";import"./useFocusRing-k1804b6h.js";import"./browser-CXT6LfEZ.js";import"./Text-yAGEZlE0.js";import"./EmulatedBoldText-rwysn7dV.js";import"./LoadingSpinner-ja7u21Ua.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./useFocusable-B02zeCY6.js";import"./ContextMenuSection-rnuJ58YB.js";import"./Action-DwzQTwOD.js";import"./context-BfKgyIPw.js";import"./useStatic-DUlV9yhw.js";import"./getActionGroupSlot-dS8ZOAQm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DvjD4YKx.js";import"./RSPContexts-BGMIawCG.js";import"./OverlayArrow-Cjyx3coH.js";import"./useControlledState-DPiym9a8.js";import"./Collection-oIfF5eYU.js";import"./CollectionBuilder-DMu4xOhO.js";import"./Separator-DEURLoXk.js";import"./SearchField-Zb9DN-44.js";import"./useTextField-e2Nm4Aw4.js";import"./useFormReset-Sc5in8RN.js";import"./TextField-BPJkVYT-.js";import"./useEvent-BqbWpWaQ.js";import"./SelectionManager-CshjmeDO.js";import"./useCollator-ThJgZh_Z.js";import"./FocusScope-D_7nktvV.js";import"./VisuallyHidden-CgNpbGUk.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
