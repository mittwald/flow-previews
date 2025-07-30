import{r as h,j as e}from"./iframe-5e2kPeup.js";import{F as t}from"./FileDropZone-DTkm78bN.js";import{S as c}from"./Section-Bu5yQTuK.js";import{F as d}from"./FileCardList-T4Qo5uh8.js";import{F as u}from"./FileCard-DIVgpo34.js";import{u as O,F as T,t as _}from"./Form-BRRqFQyb.js";import{B as s}from"./Button-BSAdG0Rb.js";import{A as b}from"./ActionGroup-TeGEU1Wd.js";import{Y as x,Z as k}from"./IconWarning-CAYwnCqi.js";import{H as F}from"./Heading-Da8IGzQL.js";import{F as f}from"./FileField-2npMsTof.js";import{T as U}from"./Text-CEKkIKYs.js";import"./IllustratedMessage--vBa3e8d.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./utils-Bj-e-2L9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DiRiFDT_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-uzLes6Tz.js";import"./useFocus-CgJ_pcIH.js";import"./useCollator-BVV2o25k.js";import"./context-BlWBKAs5.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./Button-DovRDHW7.js";import"./ProgressBar-Cw08Slz6.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";import"./VisuallyHidden-DW4vMZrD.js";import"./ContextMenuSection-CpzUQ3fn.js";import"./Action-DcYaOngB.js";import"./context-B0hGlOln.js";import"./useStatic-8VbMuKEU.js";import"./browser-D35eJ3ID.js";import"./getActionGroupSlot-BumiIRNm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BrwhBbGd.js";import"./RSPContexts-DWx74BAe.js";import"./OverlayArrow-GmN5SuYH.js";import"./useControlledState-CITgxuHh.js";import"./Collection-AOfdJwwW.js";import"./CollectionBuilder-BEe1h0VT.js";import"./Separator-C6iA2-Vt.js";import"./Group-CcUvI-aQ.js";import"./SearchField-BRz9qbLc.js";import"./FieldError-CADLGuZ8.js";import"./Form-Dy9v5K9J.js";import"./useTextField-B1rPS-0t.js";import"./useFormReset-SVEOBZG_.js";import"./TextField-bzeDf3ll.js";import"./useEvent-WpBbrSIs.js";import"./SelectionManager-C5ZwUPgy.js";import"./FocusScope-BoeQH_qo.js";import"./ColumnLayout-DS9uzAz-.js";import"./Avatar-BjQRK9A1.js";import"./AlertIcon-4i-_h-D8.js";import"./Image-B_wsrVWL.js";import"./Link-VHwN6L0N.js";import"./OptionsButton-HSfbWVwf.js";import"./ButtonView-BWykkv3t.js";import"./ContextMenuContent-C9hylZBJ.js";import"./Popover-D55kjhkB.js";import"./DialogTriggerView-BuVkX4hm.js";import"./Switch-BjYfxF7b.js";import"./Label-rQ1K5PG1.js";import"./useToggleState-C2YIMOHE.js";import"./FieldError-CL__YS6Z.js";import"./LoadingSpinner-D5xWaFe2.js";import"./Heading-0mE3T3ep.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DjgxRs5N.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
