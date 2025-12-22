import{r as x,j as e}from"./iframe-Du65Ph_c.js";import{F as t}from"./FileDropZone-DJd_No60.js";import{S as d}from"./Section-CmcN9Eur.js";import{F as u}from"./FileCardList-DxDJ9GCI.js";import{F}from"./FileCard-cYy7qKIt.js";import{u as S,F as C,t as D}from"./Form-B3SdpJl2.js";import{S as y}from"./ResetButton-16xJCuRV.js";import{B as f}from"./Button-2wmaPnFC.js";import{A as b}from"./ActionGroup-CUUirHEC.js";import{Z as j,_ as B}from"./IconWarning-CGSd0Gik.js";import{H as g}from"./Heading-t4nXMG5j.js";import{F as h}from"./FileField-DZMU5tBD.js";import{T as O}from"./Text-CtX5enn3.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B8MoOuQf.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./index-c0t27COx.js";import"./useFieldComponent-XbdbUfvB.js";import"./utils-xIJEb5Gc.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cl831mKA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./useFocus-mAbeDdRN.js";import"./useCollator-DYYkh59M.js";import"./context-BMDcuGwa.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./Button-CjwwJrCh.js";import"./ProgressBar-B4qFtVbo.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyOin5iy.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./VisuallyHidden-rhukFLga.js";import"./ContextMenuSection-Dk6jrzXb.js";import"./Action-BMmoeCN3.js";import"./context-Cb5nHwHn.js";import"./useStatic-B95N-aRU.js";import"./browser-57tL9X_d.js";import"./getActionGroupSlot-BXwxo_QL.js";import"./dynamic-CtEU0XPC.js";import"./Dialog-BO9iihOE.js";import"./RSPContexts-CGKyxyrO.js";import"./OverlayArrow-CbRWYOrW.js";import"./useControlledState-Cdt3oZ6_.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./FocusScope-DUOtKQcD.js";import"./ColumnLayout-DRxeelUr.js";import"./Avatar-DXk-boWe.js";import"./AlertIcon-CiJO5KdE.js";import"./Image-D3QVzqKi.js";import"./Link-WyYnnYYE.js";import"./OptionsButton-8o3Oj-ey.js";import"./ButtonView-Dgx7AxHv.js";import"./ContextMenuTriggerView-DkfGv52X.js";import"./ContextMenuTrigger-C-Yfuy1l.js";import"./OverlayTrigger-CM2nLyXn.js";import"./OverlayContextProvider-CsKpo_xf.js";import"./FieldError-VBXyMAIR.js";import"./FieldError-cRzcLKxU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DEleeR3P.js";import"./LoadingSpinner-DEfGApvw.js";import"./remote-D3fYDNUY.js";import"./Heading-BTx9jAYe.js";import"./useFormValidation-DAWFGl74.js";import"./Input-CyqTlZ7V.js";import"./EmulatedBoldText-CITvecLd.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
