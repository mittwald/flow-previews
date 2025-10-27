import{r as x,j as e}from"./iframe-QQgxjfU-.js";import{F as t}from"./FileDropZone-CbLqNYNX.js";import{S as u}from"./Section-DXb3tH7e.js";import{F}from"./FileCardList-KOeGbmMD.js";import{F as f}from"./FileCard-Bzgehrxn.js";import{u as S,F as C,t as D}from"./Form-Bc9x2LYG.js";import{B as s}from"./Button-BWu_s2A1.js";import{A as y}from"./ActionGroup-CwMcSxbk.js";import{_ as j,$ as O}from"./IconWarning-CSQYjrC1.js";import{H as g}from"./Heading-BhecTOma.js";import{F as h}from"./FileField-BKYgqmlI.js";import{T as b}from"./Text-CRs-OO-e.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-veZI5LS7.js";import"./clsx-B-dksMZM.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./index-3NdHptBj.js";import"./useFieldComponent-B5mMljfV.js";import"./utils-DhA81qjX.js";import"./Text-D_WC5Uss.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-2-HBtGkG.js";import"./ClearPropsContext-C1xOcMSE.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-BVJbXyTi.js";import"./useFocus-0cMRA2DE.js";import"./useCollator-Dex40a3g.js";import"./context-CRx6Bs8B.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./Button-D9YKuqRT.js";import"./ProgressBar-DarvvV7I.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIrX7kgo.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocusable-ClkP-4lm.js";import"./VisuallyHidden-B95C2FUL.js";import"./ContextMenuSection-BZb_tlaR.js";import"./Action-DetrUASE.js";import"./context-C73KBwIX.js";import"./useStatic-B5jRDwsJ.js";import"./browser-CvCNE6Dh.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./dynamic-BjF6TIyL.js";import"./Dialog-D5kgP22k.js";import"./RSPContexts-CsH1Ib1c.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useControlledState-CkoNAxF1.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./FocusScope-Bg9evWjP.js";import"./ColumnLayout-DJjt9-9Z.js";import"./Avatar-DqeRZ3SN.js";import"./AlertIcon-Dt_kIrwl.js";import"./Image-aMm-Eabq.js";import"./Link-B57fKZbB.js";import"./ButtonView-DdE2NGK2.js";import"./ContextMenuTriggerView-BMHanYZA.js";import"./ContextMenuTrigger-PKqcZi61.js";import"./OverlayTrigger-Kv_JLhIy.js";import"./ControlledNotification-BZ0xiENt.js";import"./OverlayContextProvider-DVG4wpYy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DsHmX75T.js";import"./Heading-SF4sVKWG.js";import"./useFormValidation-CrlfASAQ.js";import"./Input-BMf7xRQe.js";import"./useMakeFocusable-DfOzNy-a.js";import"./EmulatedBoldText-DL56_OWd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
