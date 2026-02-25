import{r as x,j as e}from"./iframe-CFTqgbub.js";import{F as t}from"./FileDropZone-DomKkq-A.js";import{S as d}from"./Section-DUGYD1S5.js";import{F as u}from"./FileCardList-BcgOdRyM.js";import{F}from"./FileCard-CxwJc7t-.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BsnX_xmS.js";import{B as f}from"./Button-DYo4uywI.js";import{A as b}from"./ActionGroup-CBwjeAhX.js";import{a0 as j,a1 as B}from"./IconWarning-BmBcYBZE.js";import{H as g}from"./Heading-439pSAMO.js";import{F as h}from"./FileField-DqxckE4w.js";import{T as O}from"./Text-DGb4Yj-N.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-kDXKouDy.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./useFieldComponent-CbaMz5aY.js";import"./utils-B4tY5r2S.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Djzy7Vo0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./useFocus-BOeBkWuf.js";import"./useCollator-BwS2zx0_.js";import"./context-DrUKb0cF.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./useFocusRing-Ck0KvK0z.js";import"./Button-BKBgz7xZ.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIXZ9Ppe.js";import"./useFocusable-Dm8xzBfk.js";import"./VisuallyHidden-CB7azLHp.js";import"./ContextMenuSection-C0W18m8x.js";import"./ActionBatch-D8GPDYy5.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./browser-DzYF9AGw.js";import"./getActionGroupSlot-B6jQShKX.js";import"./dynamic-GrVhUXuF.js";import"./Dialog-BnZ8dnOj.js";import"./RSPContexts-CFURB7yy.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./FocusScope-BtEv7ihW.js";import"./ColumnLayout-CbQqBLvR.js";import"./Avatar-DYbItyG9.js";import"./AlertIcon-DR1EaW6b.js";import"./Image-BYmweDIt.js";import"./Link-J9e9j8q_.js";import"./OptionsButton-9yLyb-e5.js";import"./ButtonView-B-4zjQiO.js";import"./ContextMenuTriggerView-CWpjHkxY.js";import"./ContextMenuTrigger-YPHTEBHC.js";import"./OverlayTrigger-C_Zwa0aQ.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./FieldError-CYjuAiBI.js";import"./FieldError-DNv3qA2U.js";import"./AlertText-CTc4Vkoh.js";import"./ActionGroupView-BE1yaK9j.js";import"./Content-CuF6CEcC.js";import"./Modal-bFHglDPM.js";import"./Overlay-BHE1PsiE.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./Flex-DlegQ8We.js";import"./useRef-Bmtm6YEx.js";import"./remote-BlniWp0j.js";import"./Heading-D2J3_q6l.js";import"./useFormValidation-BPzjnfej.js";import"./Input-7Pv0YxOe.js";import"./EmulatedBoldText-Dyut30RV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
