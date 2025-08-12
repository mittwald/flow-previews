import{r as h,j as e}from"./iframe-BpEavT04.js";import{F as t}from"./FileDropZone-CmyYp7jP.js";import{S as c}from"./Section-Cen1jqO9.js";import{F as d}from"./FileCardList-DkxeY0Nl.js";import{F as u}from"./FileCard-BkPrAUA2.js";import{u as g,F as j,t as S}from"./Form-CXoJvbIg.js";import{B as s}from"./Button-CCZgVc0N.js";import{A as C}from"./ActionGroup-oawpU2v7.js";import{Y as x,Z as D}from"./IconWarning-vA6HsYJq.js";import{H as F}from"./Heading-9sAKSscM.js";import{F as f}from"./FileField-BXCMxqiy.js";import{T as y}from"./Text-CcXeyI30.js";import"./index-k6QiPQ3a.js";import"./IllustratedMessage-JmzRv9fF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./utils-CpHgE-S6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DWLjOUr2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6-vYiz3X.js";import"./useFocus-BaJLfW1J.js";import"./useCollator-bTe8AndB.js";import"./context-1jMNVxHt.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./VisuallyHidden-DD5pbayJ.js";import"./ContextMenuSection-CNQcPdTQ.js";import"./Action-h-c20zp_.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";import"./browser-DDZLlA7g.js";import"./getActionGroupSlot-B7TFfcap.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DAXkTNx8.js";import"./RSPContexts-z3euxKCR.js";import"./OverlayArrow-CMORky_-.js";import"./useControlledState-Cjeeyz03.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./Group-DG2VW6yX.js";import"./SearchField-DiZ_IivY.js";import"./FieldError-BmEWAGf_.js";import"./Form-DJ2svD4f.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./TextField-CoVUwaSO.js";import"./useEvent--O7DxxGG.js";import"./SelectionManager-BpD0kl0T.js";import"./FocusScope-CJ6Nm8ct.js";import"./ColumnLayout-DqbzJnhq.js";import"./Avatar-Cg6oWtsy.js";import"./AlertIcon-CnPP9zGs.js";import"./Image-D85ZzrKW.js";import"./Link-C8m8wITW.js";import"./OptionsButton-3UBXj1eE.js";import"./ButtonView-CJ30fLtu.js";import"./ContextMenuContent-B_huxHzb.js";import"./Popover-Db5mAq-N.js";import"./DialogTriggerView-DpWn2yoK.js";import"./Switch-D96mgkY9.js";import"./Label-CiJybHgW.js";import"./useToggleState-D8ngGgNi.js";import"./FieldError-DY8OUBEl.js";import"./LoadingSpinner-CRDc6voB.js";import"./Heading-DFRS6AVv.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CG9Doyve.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},L=B("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(D,{}),e.jsx(F,{children:"Drop image"}),e.jsx(y,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=g(),i=S();return e.jsxs(j,{form:n,onSubmit:L,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(C,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Xe=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
