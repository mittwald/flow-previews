import{j as e,r as O}from"./iframe-CYUlilGp.js";import{L as s}from"./Label-Ciz8t2Io.js";import{F as o}from"./FileField-BTivLCqX.js";import{B as t}from"./Button-BfM0n2Gx.js";import{S as W}from"./Section-BJzWF4y6.js";import{F as H}from"./FieldError-BBFKNZH-.js";import{F as P}from"./FieldDescription-BJmqulzb.js";import{A as R,_ as G}from"./IconWarning-ghAEmGH8.js";import{u as U,F as k,t as q}from"./Form-5VHA0Q5l.js";import{A as w}from"./ActionGroup-DGiDrFu2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./context-D26uRp-g.js";import"./Label-BzlJ5vcG.js";import"./utils-IwmXOWz0.js";import"./Hidden-CtQ_5AUI.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CJHBPzNS.js";import"./useFocus-6n3T7pEK.js";import"./useLabel-BQ0P6uHm.js";import"./FieldError-BpkjstJ1.js";import"./Text-DsFZoYY-.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-CJk741gA.js";import"./useFocusRing-Bl1ft2NQ.js";import"./browser-BP1SPJnQ.js";import"./Text-ot4TW2RP.js";import"./EmulatedBoldText-CMJy8lEl.js";import"./LoadingSpinner-CJLXwe_9.js";import"./Button-DY4YyasG.js";import"./ProgressBar-CLAf1-ry.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JEo6mDJS.js";import"./useFocusable-hSKUHOaq.js";import"./ContextMenuSection-uFKGMmAR.js";import"./Action-W129oGJ4.js";import"./context-CPlmB9Cj.js";import"./useStatic-CaXlYNsR.js";import"./getActionGroupSlot-QiwrXWOU.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-E3oWZOKb.js";import"./RSPContexts-8GpZLPll.js";import"./OverlayArrow-DFgxRKys.js";import"./useControlledState-D9dJQ2qs.js";import"./Collection-D4l8encG.js";import"./CollectionBuilder-B8Luejyn.js";import"./Separator-CYwUbqtz.js";import"./SearchField-B0kT3X35.js";import"./Group-_cQVCYDW.js";import"./useTextField-BchAki_m.js";import"./useFormReset-BKFhzP-_.js";import"./TextField-BqCOguPh.js";import"./SelectionManager-BA-kOSfV.js";import"./useEvent-BKYwrgSI.js";import"./useCollator-BxGQV5d9.js";import"./FocusScope-AdChhofX.js";import"./VisuallyHidden-D7ZslAb9.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
