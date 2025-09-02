import{j as e,r as O}from"./iframe-DaUAgimo.js";import{L as s}from"./Label-BgV7ip1p.js";import{F as o}from"./FileField-BBFffibA.js";import{B as t}from"./Button-BNJyR7fn.js";import{S as A}from"./Section-CYdsUElM.js";import{F as H}from"./FieldError-BvHufvs5.js";import{F as P}from"./FieldDescription-cWSnkLNH.js";import{K as R,a1 as G}from"./IconWarning-Jl_pbRrq.js";import{u as U,F as k,t as q}from"./Form-v8meviLP.js";import{A as w}from"./ActionGroup-DCIqMTyH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./context-DGmQszzG.js";import"./Label-BA5dW2di.js";import"./utils-Dv3HAiNW.js";import"./Hidden-DmAVKgDo.js";import"./FormField.module-CqWyJNQI.js";import"./Form-StxO2YAG.js";import"./useFocus-DfmeJaC9.js";import"./useLabel-4W4rDaLN.js";import"./FieldError-CBWJBmz-.js";import"./Text-DKL0uLiC.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D-iHY_KE.js";import"./useFocusRing-6fCWhHXp.js";import"./browser-DFc9RAYz.js";import"./Text-DqLl2XlR.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./LoadingSpinner-MgjzVDHH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CD_lBn7X.js";import"./ProgressBar-Cs4fjP5n.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEu6_Qu_.js";import"./useFocusable-91Y8y3Dw.js";import"./ContextMenuSection-BgngavkU.js";import"./Action-6Ewb0bna.js";import"./context-C_g0dLJp.js";import"./useStatic-Djoi-J49.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CaJ4kRlO.js";import"./RSPContexts-GpjylgJ9.js";import"./OverlayArrow-De5g7eHd.js";import"./useControlledState-HXI1EgZM.js";import"./Collection-Cbp4nuPj.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Separator-AEaXKmSc.js";import"./SearchField-De9Vc972.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./TextField-Cz-3i59y.js";import"./useEvent-dvApoQWz.js";import"./SelectionManager-bQOu0uyJ.js";import"./useCollator-CI-kdhZu.js";import"./FocusScope-Gc7sAVxN.js";import"./VisuallyHidden-BnUSGmEW.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
