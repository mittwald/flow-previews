import{j as e,r as O}from"./iframe-dcfCh18n.js";import{L as s}from"./Label-CuZ7LHL3.js";import{F as o}from"./FileField-CSzxIp08.js";import{B as t}from"./Button-Da273mbx.js";import{S as A}from"./Section-CGMHI8Qq.js";import{F as H}from"./FieldError-DGN7u_q3.js";import{F as P}from"./FieldDescription-CrQCJ9Lz.js";import{K as R,_ as G}from"./IconWarning-BWA_nqvd.js";import{u as U,F as k,t as q}from"./Form-DkOIl7UI.js";import{A as w}from"./ActionGroup-Cm-hgm7e.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./context-BfLqp0TH.js";import"./Label-DBNmmXrt.js";import"./utils-CaaN6tMi.js";import"./Hidden-CnGKQwOV.js";import"./FormField.module-B9AzUSUD.js";import"./Form-k5YG3sGC.js";import"./useFocus-DiEh5oG5.js";import"./useLabel-CpnVZyQW.js";import"./FieldError-jHHw5TXz.js";import"./Text-38QS6QcB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-qqCya-sH.js";import"./useFocusRing-kHWWBcyh.js";import"./browser-D8aXoHXc.js";import"./Text-D7p3kvP7.js";import"./EmulatedBoldText-De2JmDGd.js";import"./LoadingSpinner-Bo6_-KdV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D8qJizcb.js";import"./ProgressBar-BcZD8tRU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BgO5jEhv.js";import"./useFocusable-Cdnk8Kqp.js";import"./ContextMenuSection-BRh-I5dJ.js";import"./Action-4w-CWFpf.js";import"./context-TKpdQxdP.js";import"./useStatic-Dqwqzi-C.js";import"./getActionGroupSlot-DfUfHthN.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DLMrif4z.js";import"./RSPContexts-W4MNUJhM.js";import"./OverlayArrow-NUC550dY.js";import"./useControlledState-CjmCqi1H.js";import"./Collection-DEoan4F0.js";import"./CollectionBuilder-WRzFhLbw.js";import"./Separator-DQZuDVMG.js";import"./SearchField-DOB9WtIS.js";import"./useTextField-BUPKcxtd.js";import"./useFormReset-DV-dKI4G.js";import"./TextField-DqWSAtzr.js";import"./useEvent-9GQqu5so.js";import"./SelectionManager-BtQR7swA.js";import"./useCollator-DK-_TAlj.js";import"./FocusScope-BOAHQoFR.js";import"./VisuallyHidden-7QHbeduJ.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
