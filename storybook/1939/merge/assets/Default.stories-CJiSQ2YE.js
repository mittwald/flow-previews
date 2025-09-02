import{j as e,r as O}from"./iframe-h8pIb5Kv.js";import{L as s}from"./Label-B99siZxZ.js";import{F as o}from"./FileField-BPFv2Reh.js";import{B as t}from"./Button-BCd5wwjT.js";import{S as A}from"./Section-CioKxp-Z.js";import{F as H}from"./FieldError-Df2paDgt.js";import{F as P}from"./FieldDescription-DHjSwSuh.js";import{K as R,_ as G}from"./IconWarning-sarICh-8.js";import{u as U,F as k,t as q}from"./Form-B31odCWn.js";import{A as w}from"./ActionGroup-WmI-Nmw9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./context-pcAEe7OC.js";import"./Label-BakLPZbA.js";import"./utils-Cexs4pbb.js";import"./Hidden-Dc9Kv2au.js";import"./FormField.module-B9AzUSUD.js";import"./Form-Cc9esAZh.js";import"./useFocus-B-etxL-K.js";import"./useLabel-DzpD0Vg0.js";import"./FieldError-DvcRcsU3.js";import"./Text-DqGJg9Bh.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DyQYlV1N.js";import"./useFocusRing-7BAVz6YI.js";import"./browser-f0s2BEP-.js";import"./Text-BnbJhuWd.js";import"./EmulatedBoldText-D5nLjsiS.js";import"./LoadingSpinner-D0_GuOvu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CV7XsWAw.js";import"./ProgressBar-BoBEJuQ0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeaeLWhg.js";import"./useFocusable-CAY1QTdY.js";import"./ContextMenuSection-BHRqy7hA.js";import"./Action-gSATwLl0.js";import"./context-BoMfRFQo.js";import"./useStatic-DDG80hCS.js";import"./getActionGroupSlot-e-XHpWMr.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C9-zvFsT.js";import"./RSPContexts-Cd0V4yxa.js";import"./OverlayArrow-DnTwsWqb.js";import"./useControlledState-BXC3uZfW.js";import"./Collection-jwpUx6pV.js";import"./CollectionBuilder-CLrwyJlT.js";import"./Separator-CedZax0a.js";import"./SearchField-Pbcm1Prj.js";import"./useTextField-661dC4d6.js";import"./useFormReset-BL-bWUrE.js";import"./TextField-BlHsJIwz.js";import"./useEvent-KXd4In2f.js";import"./SelectionManager-ClbqTV3I.js";import"./useCollator-CMfRCWJM.js";import"./FocusScope-CkC1yDzC.js";import"./VisuallyHidden-CByVy45C.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
