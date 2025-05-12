import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-F2Fta7eo.js";import{L as s}from"./Label-RNQn_NAE.js";import{F as o}from"./FileField-SWSXeVap.js";import{B as t}from"./Button-FYdEfAPS.js";import{S as H}from"./Section-C-ZC57DR.js";import{F as G}from"./FieldError-vV6cTwrc.js";import{F as R}from"./FieldDescription-CqiWff4d.js";import{l as k,m as q}from"./IconWarning-BXNHVn6I.js";import{u as w,F as U,t as _}from"./Form-DShYMyrk.js";import{a as O}from"./index-B-lxVbXh.js";import{A as z}from"./ActionGroup-C0UIXB8Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-dnCHcaDZ.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./Label-DhTxnYZq.js";import"./utils-DsSK6wng.js";import"./Hidden-aaDrlwOM.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-Cx3HAYEY.js";import"./useFocus-CPhYqd-d.js";import"./FieldError-BaSwT8L9.js";import"./Text-D85TVzOv.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-U0jm-HC5.js";import"./useFocusRing-4oM8aI2c.js";import"./Text-CSTNT9NW.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./LoadingSpinner-FjZNoaNQ.js";import"./Button-xWdcV2_p.js";import"./ProgressBar-C0yX1I0t.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocusable-S4fA3fDW.js";import"./ContextMenuSection-CrpLscK9.js";import"./Action-BLwy8x-7.js";import"./context-B4icoHkB.js";import"./useStatic-DZIU6iu_.js";import"./getActionGroupSlot-DgOV_5yI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Btg-CSVS.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-DrRmwQ1y.js";import"./Collection-CXg7zLcg.js";import"./CollectionBuilder-YMr182AN.js";import"./Separator-9Mo8yYmd.js";import"./useOverlayTriggerState-DOVnl7Ya.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./v4-CtRu48qb.js";const Yr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=O("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(G,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(k,{children:r.jsx(q,{})})})})},d={render:e=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return r.jsxs(H,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=w(),n=_();return r.jsx(U,{form:e,onSubmit:J,children:r.jsxs(H,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(z,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Zr=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,p as IconButton,c as WithDescription,m as WithError,d as WithHandler,u as WithReactHookForm,Zr as __namedExportsOrder,Yr as default};
