import{r as x,j as e}from"./iframe-jPI25t47.js";import{F as t}from"./FileDropZone-CIaMlKfC.js";import{S as d}from"./Section-wgX4yeQq.js";import{F as u}from"./FileCardList-30zCtpOn.js";import{F}from"./FileCard-DjrFDZqy.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-B5ZX2fMA.js";import{B as f}from"./Button-CMdL10Ys.js";import{A as b}from"./ActionGroup-19L6oHyS.js";import{a0 as j,a1 as B}from"./IconWarning-D8uDJDej.js";import{H as g}from"./Heading-BYBgSNBh.js";import{F as h}from"./FileField-CNC7m77b.js";import{T as O}from"./Text-CzRKl4Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BBmse7hi.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./useFieldComponent-CHdLkU8r.js";import"./utils-DssEHlsW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BUiBuDRU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./useFocus-DZAeMhz-.js";import"./useCollator-TV1MmAHK.js";import"./context-yJg27e0-.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./useFocusRing-PgP7-E1A.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocusable-YzLAhItH.js";import"./VisuallyHidden-vrC_Lu36.js";import"./ContextMenuSection-BG427zDb.js";import"./ActionBatch-DVEQdHps.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./browser-BKdBfXKE.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./dynamic-DcvTJJQa.js";import"./Dialog-C4XHiXzR.js";import"./RSPContexts-COITpNJr.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./FocusScope-QARcb0VX.js";import"./ColumnLayout-BeNJcFgL.js";import"./Avatar-Dib0tgWN.js";import"./AlertIcon-HKJqs1Pu.js";import"./Image-DsIMfJjl.js";import"./Link-ChzTXjZ1.js";import"./OptionsButton-C6tSRe4L.js";import"./ButtonView-quZyuTrS.js";import"./ContextMenuTriggerView-UZvNg4X5.js";import"./ContextMenuTrigger-CqGtIJpw.js";import"./OverlayTrigger-DoiiNK8E.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./FieldError-DPfGZS1P.js";import"./FieldError-C3mwkvrq.js";import"./AlertText-D2z5AzT8.js";import"./ActionGroupView-BqWWBXhU.js";import"./Content-KabCAW67.js";import"./Modal-CdjOxPJU.js";import"./Overlay-BMoI33va.js";import"./LoadingSpinner-DhHtGG23.js";import"./Flex-DvdXj1RM.js";import"./useRef-XiRQpzNC.js";import"./remote-B_as-6Bm.js";import"./Heading-BvtnHnmW.js";import"./useFormValidation-aAlw1sTR.js";import"./Input-DUaj7rN4.js";import"./EmulatedBoldText-BPBEsAY6.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
