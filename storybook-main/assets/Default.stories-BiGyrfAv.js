import{r as h,j as e}from"./iframe-XU38G95a.js";import{F as t}from"./FileDropZone-BBB7yaL7.js";import{S as c}from"./Section-C9qtj2pB.js";import{F as d}from"./FileCardList-CN1vDOBR.js";import{F as u}from"./FileCard-uGsabAGL.js";import{u as O,F as T,t as _}from"./Form-WYXypPLt.js";import{B as s}from"./Button-BRSF3HU2.js";import{A as b}from"./ActionGroup-altzehyl.js";import{Y as x,Z as k}from"./IconWarning-C4sgFplx.js";import{H as F}from"./Heading-DBS9KkyH.js";import{F as f}from"./FileField-DgJr5ZuC.js";import{T as U}from"./Text-BiCu62_D.js";import"./IllustratedMessage-DUzQgeJv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./utils-CRMz2C-S.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BOldZPQm.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWzTJ_60.js";import"./useFocus-BcwSg9Gz.js";import"./useCollator-C7gGvaqP.js";import"./context-DoEtjPsM.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./Button-DXKMbIig.js";import"./ProgressBar-B_1vEsN7.js";import"./Label-B-D8nJqg.js";import"./Hidden-CmYs0ax8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmxXsmze.js";import"./useFocusRing-_ts8IeVv.js";import"./useFocusable-bB4ldgF4.js";import"./VisuallyHidden-DU3qZR-S.js";import"./ContextMenuSection-BC5uz-fg.js";import"./Action-ak2exQl4.js";import"./context-C_3J_Isg.js";import"./useStatic-IEgx7F5P.js";import"./browser-DzHUdCJ5.js";import"./getActionGroupSlot-CNBLHpLc.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-WotfotBD.js";import"./RSPContexts-Dggqaxhp.js";import"./OverlayArrow-DHjXAVGD.js";import"./useControlledState-D-ouz_Ia.js";import"./Collection-PyKyE3xx.js";import"./CollectionBuilder-BF5rDR9u.js";import"./Separator-DvLdq-tR.js";import"./Group-CaxTXUah.js";import"./SearchField-C9T5dJPC.js";import"./FieldError-iHvRLgo5.js";import"./Form-BwQPNTC6.js";import"./useTextField-DczSeHlH.js";import"./useFormReset-CGohrCOb.js";import"./TextField-OEkZHrb0.js";import"./useEvent-BbdxCe-3.js";import"./SelectionManager-C40pIXC_.js";import"./FocusScope-ng_yE7d5.js";import"./ColumnLayout-q_N7OkKo.js";import"./Avatar-CnU4uX63.js";import"./AlertIcon-Jrp23BH4.js";import"./Image-B1vJgybq.js";import"./Link-DOp9cMFN.js";import"./OptionsButton-CfuWpj8X.js";import"./ButtonView-BlGKleuL.js";import"./ContextMenuContent-CYP7NGyS.js";import"./Popover-B2HVaTEw.js";import"./DialogTriggerView-C6cdj0HA.js";import"./Switch-DwVjMOyT.js";import"./Label-ClqUqVil.js";import"./useToggleState-Bkk0UKaM.js";import"./FieldError-DDQ8jatw.js";import"./LoadingSpinner-BHQyVil0.js";import"./Heading-DmSbkR1e.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DgdtlBmQ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
