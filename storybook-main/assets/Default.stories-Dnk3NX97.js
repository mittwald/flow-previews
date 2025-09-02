import{j as e,r as O}from"./iframe-cK4MHKim.js";import{L as s}from"./Label-DBVrm7rf.js";import{F as o}from"./FileField-BQV8klNm.js";import{B as t}from"./Button-tRyoiE64.js";import{S as A}from"./Section-BzkOS2ta.js";import{F as H}from"./FieldError-lgMlex5D.js";import{F as P}from"./FieldDescription-DPhI7FEj.js";import{K as R,_ as G}from"./IconWarning-DC4_CpRf.js";import{u as U,F as k,t as q}from"./Form-BH0gpjFQ.js";import{A as w}from"./ActionGroup-R8BjU1ZZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OWbcmO7Y.js";import"./mergeRefs-CbouoeLx.js";import"./index-C0FnYpIX.js";import"./useLocalizedStringFormatter-yrbwHSL5.js";import"./context-BROjSY2y.js";import"./Label-0KSLZDSS.js";import"./utils-DNizpOE3.js";import"./Hidden-DPS3aF7x.js";import"./FormField.module-B9AzUSUD.js";import"./Form-Bkh8JfAF.js";import"./useFocus-PfRPzZF9.js";import"./useLabel-CcxHXXo7.js";import"./FieldError-DXq6AbFm.js";import"./Text-CdSAgC2T.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-zgF9gzKV.js";import"./useFocusRing-CfOQ7Cy2.js";import"./browser-DLRwst_8.js";import"./Text-FUpRzF42.js";import"./EmulatedBoldText-DX7VDiw5.js";import"./LoadingSpinner-Be0PLLzY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-j0J6t_ue.js";import"./ProgressBar-D0PLg1H8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DxZYFGgJ.js";import"./useFocusable-D26CMdgI.js";import"./ContextMenuSection-DyxtMrK9.js";import"./Action-Bmtfn7OI.js";import"./context-BAX0bMt2.js";import"./useStatic-CeVBJjTX.js";import"./getActionGroupSlot-Dq1WdNDk.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BMNDou9L.js";import"./RSPContexts-DhgL2OGs.js";import"./OverlayArrow-Dw1wGyeW.js";import"./useControlledState-BIGan-OB.js";import"./Collection-DDFYkT_e.js";import"./CollectionBuilder-DWibNHzH.js";import"./Separator-C_60SsjZ.js";import"./SearchField-BZKVt08V.js";import"./useTextField-Bd94TOwc.js";import"./useFormReset-8LX1mmkH.js";import"./TextField-B4j1tk_1.js";import"./useEvent-BXCZp1cQ.js";import"./SelectionManager-D8Yp4yhw.js";import"./useCollator-CxGNCHfH.js";import"./FocusScope-D00_KgQG.js";import"./VisuallyHidden-Bp326u91.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
