import{j as e,r as O}from"./iframe-CPSqmfOl.js";import{L as s}from"./Label-Cm39Oetk.js";import{F as o}from"./FileField-C7mNRRvt.js";import{B as t}from"./Button-hKWpSws2.js";import{S as A}from"./Section-C0BT-moq.js";import{F as H}from"./FieldError-Cgj32YS9.js";import{F as P}from"./FieldDescription-BpkS0_Bc.js";import{K as R,_ as G}from"./IconWarning-Dz0_MR_L.js";import{u as U,F as k,t as q}from"./Form-Dl0GTn3r.js";import{A as w}from"./ActionGroup-crXWQG_4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./context-DzKnIoVi.js";import"./Label-CnzzRGNK.js";import"./utils-Bp4pxj2u.js";import"./Hidden-CX2yRk0H.js";import"./FormField.module-B9AzUSUD.js";import"./Form-1yVZIEH7.js";import"./useFocus-BS8EzIP7.js";import"./useLabel-BkGlbpXp.js";import"./FieldError-CM7w-aUX.js";import"./Text-BvvdQ7EK.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BmbgIKSk.js";import"./useFocusRing-BjvWMKoG.js";import"./browser-CHMWQ9uX.js";import"./Text-CpNtEmk9.js";import"./EmulatedBoldText-CFRYqLao.js";import"./LoadingSpinner-DLNH37Uk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-e2WWi27E.js";import"./ProgressBar-BjfkTy0Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIALPEwc.js";import"./useFocusable-D7nBaAdw.js";import"./ContextMenuSection-BqLyBWSf.js";import"./Action-MbcV6Scy.js";import"./context-zgsQo9O-.js";import"./useStatic-OfVjkk_J.js";import"./getActionGroupSlot-0Vq6hASS.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BRCyKDs6.js";import"./RSPContexts-D2HT_eZz.js";import"./OverlayArrow-Cn6JJnKz.js";import"./useControlledState-BlXvRNFY.js";import"./Collection-DIuPDF5B.js";import"./CollectionBuilder-SnC7X_3r.js";import"./Separator-R_OoFgiT.js";import"./SearchField-DIrZjnJq.js";import"./useTextField-Dv6BLFv4.js";import"./useFormReset-BUGG2d-X.js";import"./TextField-nrw2PmZM.js";import"./useEvent-COUAymzI.js";import"./SelectionManager-eBYaZCJQ.js";import"./useCollator-C37beSDK.js";import"./FocusScope-CjahwwK6.js";import"./VisuallyHidden-BiIsVZWt.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
