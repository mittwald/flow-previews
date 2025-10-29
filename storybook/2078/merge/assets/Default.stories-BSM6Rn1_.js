import{r as x,j as e}from"./iframe-qTztDmQ9.js";import{F as t}from"./FileDropZone-Bh3_OGQ0.js";import{S as u}from"./Section-_3FhfXN7.js";import{F}from"./FileCardList-t5m74ine.js";import{F as f}from"./FileCard-BmAnXlSl.js";import{u as S,F as C,t as D}from"./Form-_TiOEZqw.js";import{B as s}from"./Button-B4S912ZH.js";import{A as y}from"./ActionGroup-DAaZlTM3.js";import{_ as j,$ as O}from"./IconWarning-DPAJHOeD.js";import{H as g}from"./Heading-BY9Ux7Jv.js";import{F as h}from"./FileField-B2oiGgNp.js";import{T as b}from"./Text-C9f0aLW8.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-Dicgb9l2.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./index-_9O3yG_2.js";import"./useFieldComponent-DGEmXGQh.js";import"./utils-CdWUsvaa.js";import"./Text-B9fEov2V.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-uF6YmIyy.js";import"./useFocus-CdJCReig.js";import"./useCollator-CFJsu416.js";import"./context-bFJEZtp8.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dljjmf_y.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./ContextMenuSection-CsIBhJMu.js";import"./Action-DjajA33V.js";import"./context-Cf3mID_7.js";import"./useStatic-CJuuYRzf.js";import"./browser-D-RoGxAl.js";import"./getActionGroupSlot-CA2czWAm.js";import"./dynamic-BKe9EJ7U.js";import"./Dialog-a9xsPkPz.js";import"./RSPContexts-C3w4xSHJ.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useControlledState-tlJilXH9.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./FocusScope-BLJU626h.js";import"./ColumnLayout-BvgxRkj3.js";import"./Avatar-FDpw6OGU.js";import"./AlertIcon-BjOcUyn7.js";import"./Image-CRKxXahb.js";import"./Link-Cv-RM-OJ.js";import"./ContextMenuTriggerView-CLlKnvhn.js";import"./ContextMenuTrigger-DSXumjS0.js";import"./OverlayTrigger-Bw3qBN6u.js";import"./ControlledNotification-BCXQpFCZ.js";import"./OverlayContextProvider-g6FpQG7e.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-C5H0hepe.js";import"./Heading-BEEVnEbY.js";import"./useFormValidation-DR7MCNfC.js";import"./Input-DABpozkM.js";import"./useMakeFocusable-CCDaBvVW.js";import"./EmulatedBoldText-C04JDKuJ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,ze as __namedExportsOrder,$e as default};
