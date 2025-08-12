import{j as e,r as O}from"./iframe-C1l4k2HV.js";import{L as s}from"./Label-C9vdNbU9.js";import{F as o}from"./FileField-Cp2S4i8N.js";import{B as t}from"./Button-CknaAKeQ.js";import{S as A}from"./Section-BXiL9o1E.js";import{F as H}from"./FieldError-CHl9pdWs.js";import{F as P}from"./FieldDescription-BQR9Rr2h.js";import{D as R,_ as G}from"./IconWarning-DU-YpMEs.js";import{u as U,F as k,t as q}from"./Form-Cd9H8Csw.js";import{A as w}from"./ActionGroup-BYkyVYsH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-UGszKfi1.js";import"./mergeRefs-Dwr6BYYS.js";import"./index-D2SS6_dL.js";import"./useLocalizedStringFormatter-Cfss7tUo.js";import"./context-DZKv31KF.js";import"./Label-BgYgpH4h.js";import"./utils-v9anKdvO.js";import"./Hidden-Bf1cKpiB.js";import"./FormField.module-B9AzUSUD.js";import"./Form-AqkLdwZK.js";import"./useFocus-DYgEZHE7.js";import"./useLabel-DOI1XvOs.js";import"./FieldError-1hdg8Lt2.js";import"./Text-CRjxumht.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-UiVaQAL3.js";import"./useFocusRing-UjyG7JyR.js";import"./browser-kLrz4LrJ.js";import"./Text-TULuMeKV.js";import"./EmulatedBoldText-g1-xYpae.js";import"./LoadingSpinner-CZRDoJTo.js";import"./Button-CNQMHeIL.js";import"./ProgressBar-DvublPU5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DuL0mT4v.js";import"./useFocusable-BYtFdzHx.js";import"./ContextMenuSection-CTyNXhTO.js";import"./Action-D7CpOYlL.js";import"./context-D-GsK0VP.js";import"./useStatic-B47nXigD.js";import"./getActionGroupSlot-CEjKYc7J.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-TYA03L2P.js";import"./RSPContexts-BcFnB_Bf.js";import"./OverlayArrow-DkLbTEcV.js";import"./useControlledState-C9Oc57Yt.js";import"./Collection-B5WxU_Tr.js";import"./CollectionBuilder-5yucyFA6.js";import"./Separator-DvVADXJA.js";import"./SearchField-B9KiNtuR.js";import"./useTextField-COpDxnv4.js";import"./useFormReset-CBR7MSqM.js";import"./TextField-BUvKpsdJ.js";import"./useEvent-CEVQhyLE.js";import"./SelectionManager-BROy-fD_.js";import"./useCollator-uWxVCJwD.js";import"./FocusScope-CHMeNqcW.js";import"./VisuallyHidden-BCmSOm_5.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
