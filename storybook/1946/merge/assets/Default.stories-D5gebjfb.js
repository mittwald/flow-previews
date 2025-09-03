import{j as e,r as O}from"./iframe-B9WJ5iKj.js";import{L as s}from"./Label-Txm3TZUN.js";import{F as o}from"./FileField-DYlJbZtt.js";import{B as t}from"./Button-D_a9cGts.js";import{S as A}from"./Section-CXkYem1U.js";import{F as H}from"./FieldError-BOUOKYBY.js";import{F as P}from"./FieldDescription-BeSAjbke.js";import{K as R,a1 as G}from"./IconWarning-iA3abBs4.js";import{u as U,F as k,t as q}from"./Form-CZL4xkFP.js";import{A as w}from"./ActionGroup-Ds5-Qvpw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./context-B6-GkfV2.js";import"./Label-D_4wO_RK.js";import"./utils-DB8fltME.js";import"./Hidden-DsQKnrr0.js";import"./FormField.module-CqWyJNQI.js";import"./Form-FBD95hlW.js";import"./useFocus-hMfli9CJ.js";import"./useLabel-oUVSUbln.js";import"./FieldError-DavyfSHK.js";import"./Text-COQnmlIw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cz3tZ_vF.js";import"./useFocusRing-BfWSMilO.js";import"./browser-BOk1fb3_.js";import"./Text-CSPzXI-q.js";import"./EmulatedBoldText-C7rcw5Ry.js";import"./LoadingSpinner-BLFdik4W.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BgiaEGOw.js";import"./ProgressBar-C1_1cHyi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cwd9gmzr.js";import"./useFocusable-uW0l0Nx0.js";import"./ContextMenuSection-DlocWNYv.js";import"./Action-BKjYIDhz.js";import"./context-WaClvBnE.js";import"./useStatic-oaWlYVrV.js";import"./getActionGroupSlot-DpnJzbbM.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D5fJjWQP.js";import"./RSPContexts-CDVdjyBw.js";import"./OverlayArrow-CE7drKv_.js";import"./useControlledState-DqBsJvcb.js";import"./Collection-DJgASAUx.js";import"./CollectionBuilder-C14ghNrk.js";import"./Separator-dmjViTlK.js";import"./SearchField-DA0x0iyL.js";import"./useTextField-CTUt_DB_.js";import"./useFormReset-X7y3l5xq.js";import"./TextField-DKiK_bQe.js";import"./useEvent-CBc3F-6H.js";import"./SelectionManager-CfvJ92XB.js";import"./useCollator-2x6iNpQz.js";import"./FocusScope-aIFO3fHs.js";import"./VisuallyHidden-BITg658c.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var D,W,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
