import{j as e,r as O}from"./iframe-CR8Ddg53.js";import{L as s}from"./Label-ZXYVd8nk.js";import{F as o}from"./FileField-X6ENaiuc.js";import{B as t}from"./Button-Dau4z8hc.js";import{S as A}from"./Section-EGStAKj9.js";import{F as H}from"./FieldError-e25kDgdq.js";import{F as P}from"./FieldDescription-5bt3DrYj.js";import{D as R,_ as G}from"./IconWarning-B_4O4CPt.js";import{u as U,F as k,t as q}from"./Form-CkhxsqKJ.js";import{A as w}from"./ActionGroup-CbaTAXG0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqN4v3Py.js";import"./mergeRefs-mV7XR32G.js";import"./index-Kj0ypInV.js";import"./useLocalizedStringFormatter-CsImQUVf.js";import"./context-CK3Xzdoe.js";import"./Label-BGtqz6Va.js";import"./utils-CPU25MAw.js";import"./Hidden-CcFqVLpr.js";import"./FormField.module-B9AzUSUD.js";import"./Form-knrQXPF2.js";import"./useFocus-B62aW2Cd.js";import"./useLabel-Cs4Ke5Sw.js";import"./FieldError-D80gKGFP.js";import"./Text-cGYhBKhC.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DuGIesTy.js";import"./useFocusRing-RTREyv-v.js";import"./browser-mRWe3g-L.js";import"./Text-BErvAADj.js";import"./EmulatedBoldText-DQgoED4q.js";import"./LoadingSpinner-CQuEQatc.js";import"./Button-DYYTgRSY.js";import"./ProgressBar-BTwhL8hz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-_KFTzH0P.js";import"./useFocusable-alsSoJVf.js";import"./ContextMenuSection-DT2fj72n.js";import"./Action-DHaG0aqo.js";import"./context-BXRR_TNN.js";import"./useStatic-PrBBNnv4.js";import"./getActionGroupSlot-DHUqTI33.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-H-c5ZIEM.js";import"./RSPContexts-CzStg2xL.js";import"./OverlayArrow-CgdJalR5.js";import"./useControlledState-C1vKNjS4.js";import"./Collection-BsJXi1eq.js";import"./CollectionBuilder-BOVbIZYX.js";import"./Separator-DA11LE-f.js";import"./SearchField-yrOr7IhK.js";import"./useTextField-BXQ9ns67.js";import"./useFormReset-CWiQQPlL.js";import"./TextField-ipRwSBAP.js";import"./useEvent-rwuiNVtk.js";import"./SelectionManager-BaZzBhEG.js";import"./useCollator-DPpvLnMn.js";import"./FocusScope-BbJ4WC9_.js";import"./VisuallyHidden-D_HRp7SG.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
