import{j as e,r as O}from"./iframe-Czve8Ng1.js";import{L as s}from"./Label-FUFGZTqe.js";import{F as o}from"./FileField-CD3B6UzH.js";import{B as t}from"./Button-D73APsNA.js";import{S as A}from"./Section-DEA4irc9.js";import{F as H}from"./FieldError-JfKFDbH2.js";import{F as P}from"./FieldDescription-6iurUfiv.js";import{D as R,_ as G}from"./IconWarning-YJtY_uKm.js";import{u as U,F as k,t as q}from"./Form-DPdhl0qo.js";import{A as w}from"./ActionGroup-C0o4bhxw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./context-D03EQw3p.js";import"./Label-BfVvFZj4.js";import"./utils-C85tsJLi.js";import"./Hidden-B3217TUg.js";import"./FormField.module-B9AzUSUD.js";import"./Form-B2b0RBd7.js";import"./useFocus-DLNoddQ5.js";import"./useLabel-BFN45BzM.js";import"./FieldError-CNai_82t.js";import"./Text-xUaxq5aV.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D_IbuD73.js";import"./useFocusRing-Bu3hVrpu.js";import"./browser-C659BIXC.js";import"./Text-CMgn7hJq.js";import"./EmulatedBoldText-CYlQsTFY.js";import"./LoadingSpinner-B0jtDNpX.js";import"./Button-Cis11iQd.js";import"./ProgressBar-CQMCSPa7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8K4_ozuW.js";import"./useFocusable-DPi5-Rks.js";import"./ContextMenuSection-BwsDvC0k.js";import"./Action-B4jn1mWw.js";import"./context-CNefDW5h.js";import"./useStatic-CzYWXmZ1.js";import"./getActionGroupSlot-DCBGN5KI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DRA529j2.js";import"./RSPContexts-dpque2BF.js";import"./OverlayArrow-DAtBTKTJ.js";import"./useControlledState-BeXkP8kb.js";import"./Collection-CSylHNqr.js";import"./CollectionBuilder-Dt6aii9k.js";import"./Separator-C90j9JiE.js";import"./SearchField-C86J2fE8.js";import"./useTextField-l00Z-hVA.js";import"./useFormReset-BM4kigyU.js";import"./TextField-IalWcoDx.js";import"./useEvent-CJyM_iko.js";import"./SelectionManager-BrCB2ldz.js";import"./useCollator-Bl41TtO8.js";import"./FocusScope-Cg_D6BEH.js";import"./VisuallyHidden-DTvv8wPC.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
