import{r as x,j as e}from"./iframe-BF3zk0it.js";import{F as t}from"./FileDropZone-DUcDBoKX.js";import{S as d}from"./Section-CrNjTCEJ.js";import{F as u}from"./FileCardList-CcunSC9e.js";import{F}from"./FileCard-B5fTFXz0.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-UxrlNzUI.js";import{B as f}from"./Button-ZNdemegp.js";import{A as b}from"./ActionGroup-DJsQWQF2.js";import{a0 as j,a1 as B}from"./IconWarning-BmoaMC54.js";import{H as g}from"./Heading-Dtu6R2J5.js";import{F as h}from"./FileField-DlAc5jXo.js";import{T as O}from"./Text-C9_U4GIb.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DS9y49Ku.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./index-S59XLRls.js";import"./useFieldComponent-Z2yLJYUo.js";import"./utils-Ds629Okb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CwwNB0nU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./useFocus-BGqYFkhn.js";import"./useCollator-zZACkIog.js";import"./context-B_W42rBs.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./useFocusRing-C8HzCuNM.js";import"./Button-CioOZKSP.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./useFocusable-BWie7cw6.js";import"./VisuallyHidden-P8G91P8h.js";import"./ContextMenuSection-DmXH8tfJ.js";import"./ActionBatch-DvnrQlZS.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./browser-Cxel5Cqf.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./dynamic-DMyjxIhV.js";import"./Dialog-IYHamviF.js";import"./RSPContexts-ssfE85JL.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./FocusScope-YXqkLzes.js";import"./ColumnLayout-DYqYsNcJ.js";import"./Avatar-Du8K-yac.js";import"./AlertIcon-CwrMzrhG.js";import"./Image-Zoclxo10.js";import"./Link-B1BbKw69.js";import"./OptionsButton-YESyB4gV.js";import"./ButtonView-CID7lXee.js";import"./ContextMenuTriggerView-jIod8JpQ.js";import"./ContextMenuTrigger-CLnx66A6.js";import"./OverlayTrigger-C5NrL7-k.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./FieldError-C2kAtlyK.js";import"./FieldError-WTvIa9hl.js";import"./AlertText-BB1yiwFt.js";import"./ActionGroupView-DXV0SNwP.js";import"./Content-DDW4skoa.js";import"./Modal-CVbQ3im3.js";import"./Overlay-CyMqAfYA.js";import"./LoadingSpinner-BryS_W8u.js";import"./Flex-Box9uTPb.js";import"./useRef-C7wP-y9c.js";import"./remote-CJL-gtYq.js";import"./Heading-N6x-j70c.js";import"./useFormValidation-Clvn3NKc.js";import"./Input-Q6yM49Eu.js";import"./EmulatedBoldText-tEygNJi1.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
