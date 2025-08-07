import{j as e,r as O}from"./iframe-Bl4Z707A.js";import{L as s}from"./Label-CPCFvVkX.js";import{F as o}from"./FileField-BNlZPQf1.js";import{B as t}from"./Button-CAeJc8Z4.js";import{S as A}from"./Section-XBpvj9Ol.js";import{F as H}from"./FieldError-QhX9CBNs.js";import{F as P}from"./FieldDescription-BMYWLYwx.js";import{D as R,_ as G}from"./IconWarning-BzUaRhpv.js";import{u as U,F as k,t as q}from"./Form-QL7RCKvX.js";import{A as w}from"./ActionGroup-C1Fczimo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BOV7_qOz.js";import"./mergeRefs-Cl6DsAU2.js";import"./index-Ct7SW8Jp.js";import"./useLocalizedStringFormatter-65RopkTU.js";import"./context-DCYh_tbU.js";import"./Label-G_0fE9c9.js";import"./utils-B5rgjLnQ.js";import"./Hidden-CHUtH-RP.js";import"./FormField.module-B9AzUSUD.js";import"./Form-Ch0FWOcT.js";import"./useFocus-CBM9z24y.js";import"./useLabel-CUTayXOd.js";import"./FieldError-C8A_yU5e.js";import"./Text-DhMTI7iw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C53hMQbG.js";import"./useFocusRing-CE5kArcs.js";import"./browser-CQSXz4Vb.js";import"./Text-NIRm_0Gu.js";import"./EmulatedBoldText-BAGT2_Bu.js";import"./LoadingSpinner-RrbLYMgz.js";import"./Button-H_Ok05n0.js";import"./ProgressBar-Cbl5iDEF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cab7A3iT.js";import"./useFocusable-D6HN1uNY.js";import"./ContextMenuSection-NKfRt_X1.js";import"./Action-Xhvrngkc.js";import"./context-BTbq7RPj.js";import"./useStatic-CbeUAfqO.js";import"./getActionGroupSlot-CiRXGJlD.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DBqZXEFY.js";import"./RSPContexts-Cn8bYmaC.js";import"./OverlayArrow-BA0zDJHh.js";import"./useControlledState-CTldHWvB.js";import"./Collection-Ujk4Ju59.js";import"./CollectionBuilder-OReuuDhF.js";import"./Separator-CHUHKizG.js";import"./SearchField-C3XyOz-3.js";import"./useTextField-B3Re73jf.js";import"./useFormReset-knu-9Cub.js";import"./TextField-BXBGjaTA.js";import"./useEvent-Bs-KGgDm.js";import"./SelectionManager-BhBrKG28.js";import"./useCollator-BR3Iakvu.js";import"./FocusScope-DPadz4__.js";import"./VisuallyHidden-DoxRRjGn.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
