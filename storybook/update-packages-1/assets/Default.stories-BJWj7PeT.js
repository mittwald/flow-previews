import{j as e,r as O}from"./iframe-DkoDxfR2.js";import{L as s}from"./Label-XXLO5rpK.js";import{F as o}from"./FileField-IZ5EmeCF.js";import{B as t}from"./Button-Cp9hbBL4.js";import{S as A}from"./Section-aatm0iXa.js";import{F as H}from"./FieldError-lU0r29TM.js";import{F as P}from"./FieldDescription-BVYKETey.js";import{C as R,_ as G}from"./IconWarning-Ck0HvR0Q.js";import{u as U,F as k,t as q}from"./Form--YIAPmWe.js";import{A as w}from"./ActionGroup-B7KCCKqS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./context-De-s_lIT.js";import"./Label-DRKfcyWW.js";import"./utils-BOrYOV9F.js";import"./Hidden-De8D6e53.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CnPMOS5f.js";import"./useFocus-Ca2dqt2u.js";import"./useLabel-BuM0FhpV.js";import"./FieldError-X-QluTji.js";import"./Text-Ctymnv7p.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-T6PFTdYn.js";import"./useFocusRing-BDB7k6Pq.js";import"./browser-Bh7wweWi.js";import"./Text-CnS74kup.js";import"./EmulatedBoldText-CUhPQfrL.js";import"./LoadingSpinner-kZmvy7rj.js";import"./Button-DYTF7ZZs.js";import"./ProgressBar-D05nSwtV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DxrgSCNh.js";import"./useFocusable-BICMmXOk.js";import"./ContextMenuSection-BdY28UX7.js";import"./Action-Bcu2qL72.js";import"./context-92DLRHvs.js";import"./useStatic-DQBBioJh.js";import"./getActionGroupSlot-BidRnFe8.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C4-038Ac.js";import"./RSPContexts-CqAwA2eB.js";import"./OverlayArrow-DZuWnV6Z.js";import"./useControlledState-JTLXT68E.js";import"./Collection-B9R2_Cw6.js";import"./CollectionBuilder-DALOaQAz.js";import"./Separator-CIHlVyAb.js";import"./SearchField-z4vXhhfv.js";import"./useTextField-D0_dgvqT.js";import"./useFormReset-BbPVrHjA.js";import"./TextField-CLGPgbQU.js";import"./useEvent-C4SFAJBx.js";import"./SelectionManager-CvEqXULD.js";import"./useCollator-COoHYzT4.js";import"./FocusScope-DjWdfa-n.js";import"./VisuallyHidden-C20fNH5S.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var C,y,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(y=m.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,D,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
