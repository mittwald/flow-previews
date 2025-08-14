import{j as e,r as O}from"./iframe-CxaV-_2O.js";import{L as s}from"./Label-DeXHoAKG.js";import{F as o}from"./FileField-CSnw6MRB.js";import{B as t}from"./Button-4xzDtBTb.js";import{S as A}from"./Section-B4MjtKVh.js";import{F as H}from"./FieldError-CYSu8c40.js";import{F as P}from"./FieldDescription-DAOYF3Oa.js";import{D as R,_ as G}from"./IconWarning-D1KlvyS5.js";import{u as U,F as k,t as q}from"./Form-IBOsS-x1.js";import{A as w}from"./ActionGroup-BuC4o8V4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-z-cWY8Dd.js";import"./mergeRefs-C1I7UQxo.js";import"./index-Bv-xhCU8.js";import"./useLocalizedStringFormatter-z8DhIEVV.js";import"./context-Cj-dJZ3y.js";import"./Label-CMom07rS.js";import"./utils-DIYfzur0.js";import"./Hidden-ib7KOmtl.js";import"./FormField.module-B9AzUSUD.js";import"./Form-Y2IMt8C-.js";import"./useFocus-IPoI70H0.js";import"./useLabel-CxTeeGsz.js";import"./FieldError-DeYp8bGg.js";import"./Text-CkN05LTG.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Iq-x4EK-.js";import"./useFocusRing-CW_TQqaA.js";import"./browser-DOb4XPLl.js";import"./Text-BIjq1xdd.js";import"./EmulatedBoldText-Dg2hewFF.js";import"./LoadingSpinner-BcxnB7eR.js";import"./Button-CSmp7O-R.js";import"./ProgressBar-B40XscyZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C5E9TJvv.js";import"./useFocusable-Y-_8tCBP.js";import"./ContextMenuSection-DRRRslYb.js";import"./Action-B6ZniWyv.js";import"./context-EEeOWra-.js";import"./useStatic-BvJkPPln.js";import"./getActionGroupSlot-Gydu4YTC.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BcGIOR88.js";import"./RSPContexts-CEJikpJX.js";import"./OverlayArrow-CSLKLpb3.js";import"./useControlledState-CfXHiewS.js";import"./Collection-CUgqaI6s.js";import"./CollectionBuilder-1JtBbuTz.js";import"./Separator-Cjyqlw0C.js";import"./SearchField-CI94D4yf.js";import"./useTextField-7uSnsU3k.js";import"./useFormReset-CwuAQO3t.js";import"./TextField-DnRR4HPH.js";import"./useEvent-C38G0Vvw.js";import"./SelectionManager-BNj2TXCV.js";import"./useCollator-CO3LIzeI.js";import"./FocusScope-COp4d16A.js";import"./VisuallyHidden-DPnP-D6J.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
