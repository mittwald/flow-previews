import{r as x,j as e}from"./iframe-n3VOiEf5.js";import{F as t}from"./FileDropZone-ELX8T3Vh.js";import{S as d}from"./Section-BlfcbXvq.js";import{F as u}from"./FileCardList-BhyXcdby.js";import{F}from"./FileCard-BcFTaUW0.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-fxisxfEG.js";import{B as f}from"./Button-gwePC8r8.js";import{A as b}from"./ActionGroup-DCg0s9cx.js";import{a0 as j,a1 as B}from"./IconWarning-BKHoIgIa.js";import{H as g}from"./Heading-C6n9bJf2.js";import{F as h}from"./FileField-L2-de2Rc.js";import{T as O}from"./Text-CwVjZxCT.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-MuD10R_a.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./useFieldComponent-6hUMLoYk.js";import"./utils-BTX3Dk-t.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BWj5dCJ1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./useFocus-Di5Kz97s.js";import"./useCollator-BWOk8TKb.js";import"./context-DhQskmxc.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./useFocusRing-50iWl84k.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVHN3NRW.js";import"./useFocusable-ZTBPsPh1.js";import"./VisuallyHidden-DCK-vxP3.js";import"./ContextMenuSection-MotZbouy.js";import"./ActionBatch-B7NWJImq.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./browser-DXFXi5M2.js";import"./getActionGroupSlot-CP2KeStW.js";import"./dynamic-DgHDUJEW.js";import"./Dialog-Be8vTliz.js";import"./RSPContexts-DzW0xATd.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./FocusScope-BBR4OeS8.js";import"./ColumnLayout-DjHJEmmJ.js";import"./Avatar-DWNc0D-e.js";import"./AlertIcon-DtfTxuVy.js";import"./Image-CbfNw6Mt.js";import"./Link-GSlAfwA0.js";import"./OptionsButton-CEKJnn2A.js";import"./ButtonView-CrXGo-AL.js";import"./ContextMenuTriggerView-B395wK9V.js";import"./ContextMenuTrigger-CdM56nvW.js";import"./OverlayTrigger-CSrVMpec.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./FieldError-DRCS1Gz9.js";import"./FieldError-IZ2wmqkG.js";import"./AlertText-BJDrahB4.js";import"./ActionGroupView-CZAOrVnR.js";import"./Content-D1DgylIT.js";import"./Modal-B-xEtS1E.js";import"./Overlay-DXNeIFBA.js";import"./LoadingSpinner-BZywMYAM.js";import"./Flex-i6CO50OO.js";import"./useRef-D3Fh0Wul.js";import"./remote-CWx46e_E.js";import"./Heading-Dk8PIdV3.js";import"./useFormValidation-0mLIssn1.js";import"./Input-IuhSVj8_.js";import"./EmulatedBoldText-eIBSog0P.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
