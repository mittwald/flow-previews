import{r as h,j as e}from"./iframe-cREoqKkU.js";import{F as t}from"./FileDropZone-D24VScez.js";import{S as c}from"./Section-BJ1tMJY3.js";import{F as d}from"./FileCardList-YRWaVFvv.js";import{F as u}from"./FileCard-CWTNhKXo.js";import{u as O,F as T,t as _}from"./Form-Dn3OB4JB.js";import{B as s}from"./Button-BiI53Bc2.js";import{A as b}from"./ActionGroup-CM-_bD-L.js";import{Y as x,Z as k}from"./IconWarning-BZ0g_Se0.js";import{H as F}from"./Heading-B3oRQKgK.js";import{F as f}from"./FileField-BcP_LAMW.js";import{T as U}from"./Text-n81s0DiV.js";import"./IllustratedMessage-CHCFx6Gi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./utils-yXINXq--.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-IBVIMvOc.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-lx63atcd.js";import"./useFocus-DdT7TrV6.js";import"./useCollator-JlvF5Y_E.js";import"./context-B2t2DGfo.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./Button-Cu-YDSLu.js";import"./ProgressBar-CUbrDEJ6.js";import"./Label-CiJ2ihSa.js";import"./Hidden-lwWUIJBj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDwaJuL4.js";import"./useFocusRing-BqHxEjMi.js";import"./useFocusable-6okJE7SL.js";import"./VisuallyHidden--yTRKci1.js";import"./ContextMenuSection-DKrbCPqh.js";import"./Action-DoeNPaZS.js";import"./context-C3KwCnKN.js";import"./useStatic-BAYq7Sdb.js";import"./browser-DLud-_LN.js";import"./getActionGroupSlot-CbQGimXy.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-le0_HQU8.js";import"./RSPContexts-BbhueAoC.js";import"./OverlayArrow-C8FHnWmq.js";import"./useControlledState-CU5MoX31.js";import"./Collection-DyOpwtKv.js";import"./CollectionBuilder-DBdNKsot.js";import"./Separator-BbGpBOgo.js";import"./Input-V1vrGjHl.js";import"./SearchField-CSUzKRpw.js";import"./FieldError-CvRuj6qL.js";import"./Form-FfGMTlZb.js";import"./Group-BI8C3Od1.js";import"./useTextField-RgubrTZC.js";import"./useFormReset-D4g7a1lX.js";import"./TextField-BSAOaaLk.js";import"./SelectionManager-BiiBfqxw.js";import"./useEvent-CzSnF3qn.js";import"./FocusScope-D9lXdOdd.js";import"./ColumnLayout-CTjoby71.js";import"./Avatar-DjBW-iAd.js";import"./AlertIcon-DUVMTC5C.js";import"./Image-DdryTStH.js";import"./Link-BiBbVyZ_.js";import"./OptionsButton-f8JX3Mjn.js";import"./ButtonView-DFJVuJx_.js";import"./ContextMenuContent-DgPHY1Zd.js";import"./Popover-D0iKC4-k.js";import"./DialogTriggerView-DDpbwryG.js";import"./Switch-DbDiUC_i.js";import"./Label-DZvsfDgY.js";import"./useToggleState-DNwTfAm-.js";import"./FieldError-B5o1ZaV9.js";import"./LoadingSpinner-BEZ9UYVH.js";import"./Heading-DJASOrw2.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Do4ZwDP6.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
