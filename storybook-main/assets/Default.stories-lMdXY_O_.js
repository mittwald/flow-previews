import{j as e,r as O}from"./iframe-B5D6Jy2e.js";import{L as s}from"./Label-C5afoFui.js";import{F as o}from"./FileField-3zZnEBCi.js";import{B as t}from"./Button-D_cucc2Q.js";import{S as W}from"./Section-D-49RRcv.js";import{F as H}from"./FieldError-BGY0RJ8v.js";import{F as P}from"./FieldDescription--sEKc3Pw.js";import{A as R,_ as G}from"./IconWarning-DjYRPplk.js";import{u as U,F as k,t as q}from"./Form-BBA-3fEK.js";import{A as w}from"./ActionGroup-CNyyAHOL.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./context-Bj-w4NoV.js";import"./Label-36rBC0g7.js";import"./utils-Bs8Wqn-q.js";import"./Hidden-C8fkQIAB.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DGtlbNAt.js";import"./useFocus-CkjZAdJ6.js";import"./useLabel-DkjeIhDx.js";import"./FieldError-DXJUVvju.js";import"./Text-Bv7a287p.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-ryFqDY2c.js";import"./useFocusRing-SK3yyEZg.js";import"./browser-C-lA9C9Q.js";import"./Text-Fuh2Ogih.js";import"./EmulatedBoldText-bgj99tWG.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./Button-BIn7btPV.js";import"./ProgressBar-B93iLJrK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./useFocusable-D_QF0Scb.js";import"./ContextMenuSection-kqh9ATtY.js";import"./Action-BDQA-SJt.js";import"./context-IJ_Eymmu.js";import"./useStatic-DN3utWlK.js";import"./getActionGroupSlot-ul0ry97b.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CYkZaeYk.js";import"./RSPContexts-v362EzbA.js";import"./OverlayArrow-m6vw9un5.js";import"./useControlledState-Yj7M3RjN.js";import"./Collection-Cl2OOjED.js";import"./CollectionBuilder-DuYXSFPS.js";import"./Separator-DAvj9ZN-.js";import"./SearchField-Bsl1v9iA.js";import"./Group-ClvX5TRg.js";import"./useTextField-4CgH3C31.js";import"./useFormReset-CFSg60RK.js";import"./TextField-PNGd04kr.js";import"./SelectionManager-Yyuo4m1t.js";import"./useEvent-DdUUCx0h.js";import"./useCollator-BXMjrBT_.js";import"./FocusScope-BljfDlo2.js";import"./VisuallyHidden-1pt6eLog.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
