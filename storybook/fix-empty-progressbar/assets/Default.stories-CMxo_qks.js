import{j as e,r as O}from"./iframe-D9T-SQ_w.js";import{L as s}from"./Label-BSTVZqJp.js";import{F as o}from"./FileField-FjUftNN9.js";import{B as t}from"./Button-DTUBFRfD.js";import{S as A}from"./Section-Dy49rPJx.js";import{F as H}from"./FieldError-Co5krp6V.js";import{F as P}from"./FieldDescription-UW2WuRr2.js";import{C as R,_ as G}from"./IconWarning-D9gb5D__.js";import{u as U,F as k,t as q}from"./Form-BJzujqly.js";import{A as w}from"./ActionGroup-o9bdAQZo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOfdVnxG.js";import"./mergeRefs-Dpt4nLOm.js";import"./index-MwhQmWus.js";import"./useLocalizedStringFormatter-DPVccqQm.js";import"./context-1X1M6th-.js";import"./Label-BiAaxhJ7.js";import"./utils-DnMOHCo2.js";import"./Hidden-SV0U3IVR.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CWxNV6uB.js";import"./useFocus-BzfdG_e6.js";import"./useLabel-DgmVUIzX.js";import"./FieldError-CZoysCXy.js";import"./Text-ClgQ9ANO.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D8pjdbbd.js";import"./useFocusRing-ZVwQEQ-X.js";import"./browser-BxWBoSIU.js";import"./Text-DV6mBCf8.js";import"./EmulatedBoldText-DAr7Y6gD.js";import"./LoadingSpinner-DnW7ID0m.js";import"./Button-CgtNxK_E.js";import"./ProgressBar-DwCiEGCB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DglIwZgS.js";import"./useFocusable-BvY9usgM.js";import"./ContextMenuSection-DMb_WIEt.js";import"./Action-DYSYcGA4.js";import"./context-4_PGxGcD.js";import"./useStatic-CzpehBqE.js";import"./getActionGroupSlot-DWP6Eju1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CcOmolEx.js";import"./RSPContexts-Mr9JIPza.js";import"./OverlayArrow-C2Xh83El.js";import"./useControlledState-iBkipCXW.js";import"./Collection-DoXxkf38.js";import"./CollectionBuilder-F1uF5_xz.js";import"./Separator-BPxbBsrv.js";import"./SearchField-BlkgpjOt.js";import"./useTextField-q7WjWLDn.js";import"./useFormReset-BokEu4v1.js";import"./TextField-CQIeTEIt.js";import"./useEvent-B9biFPGH.js";import"./SelectionManager-C0FPyjqE.js";import"./useCollator-CYP1g-jw.js";import"./FocusScope-Bai1ujT7.js";import"./VisuallyHidden-DQCLJ5yw.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
