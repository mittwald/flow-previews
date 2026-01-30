import{r as x,j as e}from"./iframe-1hZ9wzBW.js";import{F as t}from"./FileDropZone-BC-H9w7P.js";import{S as d}from"./Section-Bc3YMvvr.js";import{F as u}from"./FileCardList-NAQNscYX.js";import{F}from"./FileCard-Dd18w53o.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-B4tSpU0s.js";import{B as f}from"./Button-7Po4DI29.js";import{A as b}from"./ActionGroup-CGjwNThe.js";import{_ as j,$ as B}from"./IconWarning-Bq_05zLs.js";import{H as g}from"./Heading-CHsPWFD7.js";import{F as h}from"./FileField-CopEcV_i.js";import{T as O}from"./Text-BF_GklVB.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-lEqT5LWC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./index-dx0Fbu95.js";import"./useFieldComponent-B-hW6CDY.js";import"./utils-CnJx27u5.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B1mgaTQV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CrikywT0.js";import"./useFocus-iMNco4FL.js";import"./useCollator-7JXdm9sI.js";import"./context-Dx8Lg4Ma.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./useFocusRing-DJmPDLK7.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNGT1V3C.js";import"./useFocusable-CvXOfqVX.js";import"./VisuallyHidden-UazS1TBU.js";import"./ContextMenuSection-CZDIsfmP.js";import"./Action-5-LJxdMW.js";import"./context-Ci4eovAp.js";import"./useStatic-BSOtV-Rw.js";import"./browser-jjcexMIs.js";import"./getActionGroupSlot-BJec6nln.js";import"./dynamic-BsriuUgB.js";import"./Dialog-DTOlRROi.js";import"./RSPContexts-Da-kz4p_.js";import"./OverlayArrow-CJR0hx1K.js";import"./useControlledState-DAXJPifs.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useEvent-CxVl1HjR.js";import"./FocusScope-Dxs6Wric.js";import"./ColumnLayout-Bg8yDoNJ.js";import"./Avatar-B41KUjsA.js";import"./AlertIcon-fApV2-nR.js";import"./Image-DXQuT_X6.js";import"./Link-CzWTZWql.js";import"./OptionsButton-DWY0Qigj.js";import"./ButtonView-DUby8yC0.js";import"./ContextMenuTriggerView-DZWLX5-v.js";import"./ContextMenuTrigger-CzZk0wZa.js";import"./OverlayTrigger-DkAzLvEk.js";import"./OverlayContextProvider-DZK4ly6O.js";import"./FieldError-BLPNRQRQ.js";import"./FieldError-y4Ibnc6j.js";import"./AlertText-D19RpsJk.js";import"./useRef-qfDvHpZ7.js";import"./LoadingSpinner-CBIfE8tz.js";import"./remote-CnwnRZPi.js";import"./Heading-BDZkQl9H.js";import"./useFormValidation-yU8XYtwO.js";import"./Input-BD7vx0Sp.js";import"./EmulatedBoldText-D3kC_v2V.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
