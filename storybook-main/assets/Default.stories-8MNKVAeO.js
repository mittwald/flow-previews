import{j as e,r as O}from"./iframe-Cnqm4lFy.js";import{L as s}from"./Label-DI5vbAp_.js";import{F as o}from"./FileField-NZXJlNPO.js";import{B as t}from"./Button-GqX5Ed_0.js";import{S as A}from"./Section-Dg5LLnYW.js";import{F as H}from"./FieldError-BShtxMou.js";import{F as P}from"./FieldDescription-B9zcA8Q-.js";import{D as R,_ as G}from"./IconWarning-BGJHeHvx.js";import{u as U,F as k,t as q}from"./Form-D5anfSgp.js";import{A as w}from"./ActionGroup-Bl2vI95-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./context-CV4GK-7T.js";import"./Label-DR_AMUCZ.js";import"./utils-CnzLW3AP.js";import"./Hidden-Cs157XWu.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BSD4Q5fC.js";import"./useFocus-_F3heiAA.js";import"./useLabel-BaQUBcK6.js";import"./FieldError-CjkOwEOv.js";import"./Text-CzkkWfVE.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DTUadKgc.js";import"./useFocusRing-CPUfygMd.js";import"./browser-B2d62Nc4.js";import"./Text-BEWqZmc4.js";import"./EmulatedBoldText-DcBlvLGt.js";import"./LoadingSpinner-Bfw-PGOT.js";import"./Button-IuJiQec9.js";import"./ProgressBar-DvnI1q4y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DsDytGfO.js";import"./useFocusable-BzgCWsb7.js";import"./ContextMenuSection-zBRyPG3T.js";import"./Action-D5xue7JO.js";import"./context-p0am_T1z.js";import"./useStatic-Gr7dtALz.js";import"./getActionGroupSlot-CCVLKGat.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B5ExOuoq.js";import"./RSPContexts-D_hI6riA.js";import"./OverlayArrow-BzYR1xCl.js";import"./useControlledState-BaDEj8YE.js";import"./Collection-FQ9k0Rtz.js";import"./CollectionBuilder-BxLrnRW8.js";import"./Separator-LafJE-2b.js";import"./SearchField-3la4eIFC.js";import"./useTextField-C6ieJdik.js";import"./useFormReset-eFY2_Wll.js";import"./TextField-EAqwucdm.js";import"./useEvent-D6x-_Zc1.js";import"./SelectionManager-ByPZOqoP.js";import"./useCollator-BSKS0jpr.js";import"./FocusScope-BkqoV2HT.js";import"./VisuallyHidden-CPCVsxvc.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
