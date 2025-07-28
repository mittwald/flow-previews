import{r as h,j as e}from"./iframe-DkoDxfR2.js";import{F as t}from"./FileDropZone-DaHteenP.js";import{S as c}from"./Section-aatm0iXa.js";import{F as d}from"./FileCardList-DG8hdqZI.js";import{F as u}from"./FileCard-BlU_oi3B.js";import{u as O,F as T,t as _}from"./Form--YIAPmWe.js";import{B as s}from"./Button-Cp9hbBL4.js";import{A as b}from"./ActionGroup-B7KCCKqS.js";import{Y as x,Z as k}from"./IconWarning-Ck0HvR0Q.js";import{H as F}from"./Heading-BOxKIZt8.js";import{F as f}from"./FileField-IZ5EmeCF.js";import{T as U}from"./Text-CnS74kup.js";import"./IllustratedMessage-C8MKgnRO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./utils-BOrYOV9F.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Ctymnv7p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BuM0FhpV.js";import"./useFocus-Ca2dqt2u.js";import"./useCollator-COoHYzT4.js";import"./context-De-s_lIT.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./Button-DYTF7ZZs.js";import"./ProgressBar-D05nSwtV.js";import"./Label-DRKfcyWW.js";import"./Hidden-De8D6e53.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DxrgSCNh.js";import"./useFocusRing-BDB7k6Pq.js";import"./useFocusable-BICMmXOk.js";import"./VisuallyHidden-C20fNH5S.js";import"./ContextMenuSection-BdY28UX7.js";import"./Action-Bcu2qL72.js";import"./context-92DLRHvs.js";import"./useStatic-DQBBioJh.js";import"./browser-Bh7wweWi.js";import"./getActionGroupSlot-BidRnFe8.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C4-038Ac.js";import"./RSPContexts-CqAwA2eB.js";import"./OverlayArrow-DZuWnV6Z.js";import"./useControlledState-JTLXT68E.js";import"./Collection-B9R2_Cw6.js";import"./CollectionBuilder-DALOaQAz.js";import"./Separator-CIHlVyAb.js";import"./Group-T6PFTdYn.js";import"./SearchField-z4vXhhfv.js";import"./FieldError-X-QluTji.js";import"./Form-CnPMOS5f.js";import"./useTextField-D0_dgvqT.js";import"./useFormReset-BbPVrHjA.js";import"./TextField-CLGPgbQU.js";import"./useEvent-C4SFAJBx.js";import"./SelectionManager-CvEqXULD.js";import"./FocusScope-DjWdfa-n.js";import"./ColumnLayout-MdeEfwCz.js";import"./Avatar-DKqNEO69.js";import"./AlertIcon-BOh2uqwn.js";import"./Image-CoMIvc1d.js";import"./Link-C3MdfYbf.js";import"./OptionsButton-CpkQyaBS.js";import"./ButtonView-Bkm4GMrq.js";import"./ContextMenuContent-DQ3UvTlq.js";import"./Popover-BthwtJdm.js";import"./DialogTriggerView-CduBBth1.js";import"./Switch-GpJPGzlW.js";import"./Label-XXLO5rpK.js";import"./useToggleState-CT2ie8rV.js";import"./FieldError-lU0r29TM.js";import"./LoadingSpinner-kZmvy7rj.js";import"./Heading-D_yR9HjO.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CUhPQfrL.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
