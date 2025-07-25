import{j as e,r as O}from"./iframe-BjkHoCV_.js";import{L as s}from"./Label-BYU6zcWR.js";import{F as o}from"./FileField-b3Ur7S3H.js";import{B as t}from"./Button-DVqiRGCO.js";import{S as W}from"./Section-DhI7rSAc.js";import{F as H}from"./FieldError-mxRvqHca.js";import{F as P}from"./FieldDescription-CbqPGn6F.js";import{A as R,_ as G}from"./IconWarning-CwiGKHoc.js";import{u as U,F as k,t as q}from"./Form-x4DN-GwU.js";import{A as w}from"./ActionGroup-Dtw_UogW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./context-rlbqmEoV.js";import"./Label-B_ZT4LJD.js";import"./utils-CGiEt-XO.js";import"./Hidden-CDdp3qbI.js";import"./FormField.module-B9AzUSUD.js";import"./Form-PglXiK24.js";import"./useFocus-xSbgpmNE.js";import"./useLabel-1QSzRNK-.js";import"./FieldError-BxnpY5Jk.js";import"./Text-C4ERGDAc.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-CkroWKbe.js";import"./useFocusRing-Wt9DLJeW.js";import"./browser-D-wpRimX.js";import"./Text-eTJAYSJY.js";import"./EmulatedBoldText-Bcu9u8Hb.js";import"./LoadingSpinner-DEvuHU_p.js";import"./Button-Di6PObN5.js";import"./ProgressBar-B7PSoMX-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEdNq8mA.js";import"./useFocusable-CXhBXWqP.js";import"./ContextMenuSection-BSbpkMS3.js";import"./Action-CzPwWBMx.js";import"./context-CsL7NKVl.js";import"./useStatic-D1q5yxzl.js";import"./getActionGroupSlot-Bo5RA54w.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DTbN5TSI.js";import"./RSPContexts-B3qavTDI.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./useControlledState-DGwCCxzP.js";import"./Collection-CFDXeLKH.js";import"./CollectionBuilder---ElTJdF.js";import"./Separator-s9nTWt-s.js";import"./SearchField-C9v5dfT_.js";import"./Group-CFG6yZ2f.js";import"./useTextField-DkP6KCaQ.js";import"./useFormReset-DzRnd0mU.js";import"./TextField-gOyCtBR-.js";import"./SelectionManager-DffnzBv0.js";import"./useEvent-DmGZIyRy.js";import"./useCollator-BsISA5DC.js";import"./FocusScope-mH_5A_-I.js";import"./VisuallyHidden-DAjtA0IX.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
