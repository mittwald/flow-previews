import{r as x,j as e}from"./iframe-QYa5fCvd.js";import{F as t}from"./FileDropZone-Bi4nQWxx.js";import{S as u}from"./Section-DfsoS9tc.js";import{F}from"./FileCardList-Di7ayF9n.js";import{F as f}from"./FileCard-C3QA3MDe.js";import{u as E,F as W,t as G}from"./Form-DcoODqVz.js";import{B as s}from"./Button-DtEggira.js";import{A as M}from"./ActionGroup-B8EbhdWH.js";import{_ as j,$ as q}from"./IconWarning-DEqdDiS_.js";import{H as g}from"./Heading-Dho9wAM0.js";import{F as h}from"./FileField-DqKRQOdQ.js";import{T as v}from"./Text-D98HT4db.js";import"./IllustratedMessage-BFdDkxzX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./utils-lb8KrrIv.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BD3o8xQb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./useFocus-D2QZKYlR.js";import"./useCollator-EfErOZQE.js";import"./context-BsMul4n4.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./Button-u3ZYuRRI.js";import"./ProgressBar-BeUyRfom.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BKI1i-pB.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocusable-DEca05gc.js";import"./VisuallyHidden-B3sifiz6.js";import"./ContextMenuSection-BNRXmqNj.js";import"./Action-BQI9QTKN.js";import"./context-NUuZzhZl.js";import"./useStatic-DIir9R4I.js";import"./browser-BNaQCdYt.js";import"./getActionGroupSlot-8GawWr3Y.js";import"./dynamic-BhpRGc-9.js";import"./Popover-BojVT5-a.js";import"./DialogTriggerView-DucWr1Mr.js";import"./RSPContexts-uNufUlk-.js";import"./ClearPropsContextView-DF7vfwc8.js";import"./useControlledState-Bu1M14oY.js";import"./FocusScope-ByQquqFt.js";import"./Collection-DAGhelkx.js";import"./CollectionBuilder-DNb6DOFN.js";import"./Separator-CsR4K24c.js";import"./Group-BKMRBfUs.js";import"./SearchField-BY7ftgY4.js";import"./FieldError-BGtuYqZa.js";import"./Form-BOiG0M1T.js";import"./useTextField-gTkvMWQG.js";import"./useFormReset-DzIk_Opn.js";import"./TextField-DYh5UApz.js";import"./useEvent-D3g7XMTk.js";import"./SelectionManager-yhE4bEMZ.js";import"./Switch-58030LT7.js";import"./Label-REb55_aV.js";import"./useToggleState-CGSsvXtE.js";import"./ColumnLayout-Clf84fV1.js";import"./Avatar-1Jl2Zthj.js";import"./AlertIcon-CvCYqD3R.js";import"./Image-Hbw9XWQb.js";import"./Link-M0xbFHUi.js";import"./ButtonView-CoMcGdi_.js";import"./ContextMenuTriggerView-X_V4iUUm.js";import"./FieldError-DIhpKsfz.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DKDkxF6a.js";import"./Heading-ghp5YyKn.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BuggfMa1.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
