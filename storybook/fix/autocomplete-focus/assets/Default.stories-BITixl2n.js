import{j as e,r as O}from"./iframe-BwUhuRm7.js";import{L as s}from"./Label-Dryy0w3E.js";import{F as o}from"./FileField-Bz_0GZjl.js";import{B as t}from"./Button-DXRAI5C8.js";import{S as A}from"./Section-yROLZVaA.js";import{F as H}from"./FieldError-ByWvRvE-.js";import{F as P}from"./FieldDescription-BGRxfMiu.js";import{C as R,_ as G}from"./IconWarning-DVI2HiM9.js";import{u as U,F as k,t as q}from"./Form-B5VwE1JG.js";import{A as w}from"./ActionGroup-BGCg1ILB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./context-bUzCuHOu.js";import"./Label-D-Cavg7S.js";import"./utils-DDoNb5qO.js";import"./Hidden-DCcQ90cW.js";import"./FormField.module-B9AzUSUD.js";import"./Form-C5mHTKgE.js";import"./useFocus-BdFL2QuQ.js";import"./useLabel-CJJXcYYW.js";import"./FieldError-DsFBc8y3.js";import"./Text-CbUcC8Oz.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-ZFfwIVE3.js";import"./useFocusRing-UIPQHDoL.js";import"./browser-CwFUDHtx.js";import"./Text-BBSS7FYM.js";import"./EmulatedBoldText-Do_4Bp9I.js";import"./LoadingSpinner-fl_VQ3tF.js";import"./Button-Ds18dV5B.js";import"./ProgressBar-ByXy0FjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMqEl6WQ.js";import"./useFocusable-BiRHUtLW.js";import"./ContextMenuSection-BgDfdJK7.js";import"./Action-B_OuXMJk.js";import"./context-DSL3Ffex.js";import"./useStatic-10Z2anw0.js";import"./getActionGroupSlot-XogBqS__.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-uD5rPHFv.js";import"./RSPContexts-cnUhnSXF.js";import"./OverlayArrow-CKENjgaB.js";import"./useControlledState-D841p2oi.js";import"./Collection-DeL1dhBj.js";import"./CollectionBuilder-BG3-IUkU.js";import"./Separator-_bTFvR5v.js";import"./SearchField-B_aps_XI.js";import"./useTextField-DDqPPB1t.js";import"./useFormReset-dodywWj-.js";import"./TextField-CxDkfZto.js";import"./useEvent-B7428EMj.js";import"./SelectionManager-DsYBxDUu.js";import"./useCollator-CbeUpY-G.js";import"./FocusScope-3xnL38Zh.js";import"./VisuallyHidden-C84OwjFZ.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
