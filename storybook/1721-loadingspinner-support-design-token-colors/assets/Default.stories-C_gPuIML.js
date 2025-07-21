import{j as e,r as O}from"./iframe-ZeYQaqTq.js";import{L as s}from"./Label-DaFn2Xmv.js";import{F as o}from"./FileField-DpXQBkC3.js";import{B as t}from"./Button-CmxRhHKt.js";import{S as W}from"./Section-o3pTB1O3.js";import{F as H}from"./FieldError-DbdUr15j.js";import{F as P}from"./FieldDescription-BMK4H7nJ.js";import{A as R,_ as G}from"./IconWarning-Mt76M62l.js";import{u as U,F as k,t as q}from"./Form-BmPd2M3r.js";import{A as w}from"./ActionGroup-BJWnFRlh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./context-BdRPu6tD.js";import"./Label-BCX0WWwJ.js";import"./utils-CZSTTIRS.js";import"./Hidden-BCzOp-Gy.js";import"./FormField.module-B9AzUSUD.js";import"./Form-MeaiSeb5.js";import"./useFocus-EvOFeEzd.js";import"./useLabel-1QKgiZqr.js";import"./FieldError-mFBw1lmq.js";import"./Text-CTESEC7p.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-Co1lLTdd.js";import"./useFocusRing-D3GUo_QM.js";import"./browser-BE8-G2h8.js";import"./Text-ADEYgpsM.js";import"./EmulatedBoldText-CNK-5iTs.js";import"./LoadingSpinner-BsYGnIlm.js";import"./Button-8lvA6fYu.js";import"./ProgressBar-y-6EHwAj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C2f9EIPz.js";import"./useFocusable-_P_eC141.js";import"./ContextMenuSection-CNp4xeCS.js";import"./Action-RN05S-xF.js";import"./context-D0miJpww.js";import"./useStatic-B42yuxiF.js";import"./getActionGroupSlot-BZJ1-G1h.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CPFJ-em9.js";import"./RSPContexts-B51mpv1W.js";import"./OverlayArrow-BX3D_PZr.js";import"./useControlledState-fovAuXst.js";import"./Collection-DRioiR9B.js";import"./CollectionBuilder-_wjpVTSh.js";import"./Separator-CPoxSccm.js";import"./SearchField-Bklbm_03.js";import"./Group-DRjYMMoj.js";import"./useTextField-D3PtH1hi.js";import"./useFormReset-DYMhoeZf.js";import"./TextField-C77kbV9Z.js";import"./SelectionManager-exFNYZLH.js";import"./useEvent-BAIrY4aR.js";import"./useCollator-CCl5WH_E.js";import"./FocusScope-C_dTN5HC.js";import"./VisuallyHidden-CW-y3tuT.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,A,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Xe as default};
