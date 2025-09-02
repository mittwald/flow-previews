import{j as e,r as O}from"./iframe-DzdsrO80.js";import{L as s}from"./Label-Bm3Js6Mn.js";import{F as o}from"./FileField-CA3A4btO.js";import{B as t}from"./Button-DVR7cX3i.js";import{S as A}from"./Section-BEJbtXxb.js";import{F as H}from"./FieldError-_YRaGmgh.js";import{F as P}from"./FieldDescription-DFDjApG-.js";import{K as R,_ as G}from"./IconWarning-B3m6OsdH.js";import{u as U,F as k,t as q}from"./Form-BvaKwJX7.js";import{A as w}from"./ActionGroup-DOlXr0dv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./context-DCkzppns.js";import"./Label-DXfcpAFN.js";import"./utils-CvAakX2W.js";import"./Hidden-BVbf7n1G.js";import"./FormField.module-B9AzUSUD.js";import"./Form-C696dGLt.js";import"./useFocus-B0VC8u8k.js";import"./useLabel-BtHrL8qq.js";import"./FieldError-CeKpopQl.js";import"./Text-CRTGmFuV.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cdr53w7M.js";import"./useFocusRing-CBIzKb6Q.js";import"./browser-CWHi4dia.js";import"./Text-DXUL7YAG.js";import"./EmulatedBoldText-BUyeaD_Y.js";import"./LoadingSpinner-PW_7_s64.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BCqDIvjf.js";import"./ProgressBar-LQ-fnBcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DskVbL7b.js";import"./useFocusable-COvMPAb3.js";import"./ContextMenuSection-AWtfZJeN.js";import"./Action-Ba6ZxKlY.js";import"./context-DKufrzCY.js";import"./useStatic-CzVMgagU.js";import"./getActionGroupSlot-COrah7QA.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-d3aXPnlF.js";import"./RSPContexts-DgNZ7nRI.js";import"./OverlayArrow-4JOsbCJv.js";import"./useControlledState-D4aZ1p71.js";import"./Collection-C9A_LHc0.js";import"./CollectionBuilder-CaWr36HU.js";import"./Separator-CBpgeXgJ.js";import"./SearchField-C817Qgil.js";import"./useTextField-BarUssyk.js";import"./useFormReset-B7pkU5Xm.js";import"./TextField-Cwc92i9-.js";import"./useEvent-DVhg_FlY.js";import"./SelectionManager-CLk07rVx.js";import"./useCollator-B4_CrHfJ.js";import"./FocusScope-DDPGgWDg.js";import"./VisuallyHidden-BfQH1Q-z.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
