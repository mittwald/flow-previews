import{r as h,j as e}from"./iframe-BrFbgMdZ.js";import{F as t}from"./FileDropZone-Bl4j9d2l.js";import{S as c}from"./Section-JJYt51v4.js";import{F as d}from"./FileCardList-D2u3OWHZ.js";import{F as u}from"./FileCard-B78ztv7f.js";import{u as O,F as T,t as _}from"./Form-BGZhiE7p.js";import{B as s}from"./Button-DrqjXTlc.js";import{A as b}from"./ActionGroup-DRgN58LI.js";import{Y as x,Z as k}from"./IconWarning-aBCbZP3e.js";import{H as F}from"./Heading-PSfhCvE2.js";import{F as f}from"./FileField-CGyBxw0f.js";import{T as U}from"./Text-C3YpUANr.js";import"./IllustratedMessage-gMKJwzZT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./utils-uGt6lEHy.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B3veiim8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BY-hcXqn.js";import"./useFocus-D9Wd5vZ-.js";import"./useCollator-BKa_st1y.js";import"./context-B0-ElNi2.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./Button-dFM767hW.js";import"./ProgressBar-CACYrIaY.js";import"./Label-Dtl4zIvG.js";import"./Hidden-UstvKMMQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IpqNhXgC.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocusable-BzJo03Xl.js";import"./VisuallyHidden-BzneT5H9.js";import"./ContextMenuSection-DDzDyQ2c.js";import"./Action-ZQeDjVvM.js";import"./context-CFd8jkW8.js";import"./useStatic-BFH-Nkbb.js";import"./browser-BeJxvhux.js";import"./getActionGroupSlot-B9Qutl-P.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CO5NQ1rj.js";import"./RSPContexts-Dtf8PKxD.js";import"./OverlayArrow-BK6QcEmE.js";import"./useControlledState-n0b34ryi.js";import"./Collection-Djxaz1Ld.js";import"./CollectionBuilder-DxJUJjXq.js";import"./Separator-wEFTp470.js";import"./Group-BgvCwvxg.js";import"./SearchField-BfR4RjBt.js";import"./FieldError-DSdi5gGz.js";import"./Form-DphLKB0O.js";import"./useTextField-Hu8b04JP.js";import"./useFormReset-UpbI-Wf0.js";import"./TextField-Cv2sUUZR.js";import"./useEvent-8VQ1yeDi.js";import"./SelectionManager-BC1RK9KO.js";import"./FocusScope-ksb906db.js";import"./ColumnLayout-DMmP5RJk.js";import"./Avatar-D4fW_CSR.js";import"./AlertIcon-TCHqZPRR.js";import"./Image-DjO1SV4m.js";import"./Link-BZqig0ju.js";import"./OptionsButton-DFrXdxUc.js";import"./ButtonView-b6bd-a1R.js";import"./ContextMenuContent-Dq3c5s6z.js";import"./Popover-CkzfQVH3.js";import"./DialogTriggerView-1Z-HkVsl.js";import"./Switch-BsiKuvUr.js";import"./Label-BdYHzXib.js";import"./useToggleState-BIySWMKP.js";import"./FieldError-BCnk_DY_.js";import"./LoadingSpinner-3OtgiQa9.js";import"./Heading-Dffh2t79.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CmWQu6L0.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
