import{j as e,r as O}from"./iframe-BvdD6qXg.js";import{L as s}from"./Label-BnuyVShl.js";import{F as o}from"./FileField-b4aD3xvP.js";import{B as t}from"./Button-7ivsFGmn.js";import{S as A}from"./Section-Bdu5CK1H.js";import{F as H}from"./FieldError-BU8vkL3I.js";import{F as P}from"./FieldDescription-Bun17LEn.js";import{K as R,_ as G}from"./IconWarning-BNkxb_83.js";import{u as U,F as k,t as q}from"./Form-0-PEKG-0.js";import{A as w}from"./ActionGroup-DgQib4i3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./context-CM85t4Ux.js";import"./Label-BA_GTzaI.js";import"./utils-DLyEFlgv.js";import"./Hidden-DJ1F2YbP.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BShbB3hD.js";import"./useFocus-ByAGBV0g.js";import"./useLabel-qrx4I7MD.js";import"./FieldError-BhEhBaOS.js";import"./Text-D84jcunx.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CrFlWLH5.js";import"./useFocusRing-CImSweUq.js";import"./browser-D0kBFYzL.js";import"./Text-CCdgZxrm.js";import"./EmulatedBoldText-DlBeGY0R.js";import"./LoadingSpinner-BmDETFjn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DQnvmhgF.js";import"./ProgressBar-Bt3oFLCo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-2QIW6EnW.js";import"./useFocusable-0-dkSgyo.js";import"./ContextMenuSection-CAjXX6Mq.js";import"./Action-GPgeTEUr.js";import"./context-CUfZZ1vn.js";import"./useStatic-uGULccbV.js";import"./getActionGroupSlot-D52RJivz.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BGFaL9Kl.js";import"./RSPContexts-Myyfynwt.js";import"./OverlayArrow-DnRhWojv.js";import"./useControlledState-9GcYGGux.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./SearchField-Cf5LxW_o.js";import"./useTextField-8lhmPbxJ.js";import"./useFormReset-yMYSmHMi.js";import"./TextField-DFc82d9L.js";import"./useEvent-DU_k0cnD.js";import"./SelectionManager-CaW73nQO.js";import"./useCollator-DSve1vwE.js";import"./FocusScope-D2M4fWVA.js";import"./VisuallyHidden-GD1ZdHbS.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
