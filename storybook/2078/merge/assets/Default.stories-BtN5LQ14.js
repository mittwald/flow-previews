import{r as x,j as e}from"./iframe-EUG4rdOg.js";import{F as t}from"./FileDropZone-Ba5YP54T.js";import{S as d}from"./Section-BL7lUYfi.js";import{F as u}from"./FileCardList-Bk45rC91.js";import{F}from"./FileCard-BscxCCio.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-CYKdI8jW.js";import{B as f}from"./Button-CEake6G1.js";import{A as b}from"./ActionGroup-BZH42G79.js";import{$ as j,a0 as B}from"./IconWarning-CN_aXaJM.js";import{H as g}from"./Heading-Bi7E6SrE.js";import{F as h}from"./FileField-RkdhogRt.js";import{T as O}from"./Text-DlICJI4S.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B5rKpkWw.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./useFieldComponent-Bs969hQl.js";import"./utils-DJPQq0Ir.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BNRjjFE0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./useFocus-Ca80QzG_.js";import"./useCollator-DB4dbnWY.js";import"./context-DxYQrQkA.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./useFocusRing-pMATsfPY.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyxS_pZ-.js";import"./useFocusable-YuTP7Rcp.js";import"./VisuallyHidden-DwLUyGt6.js";import"./ContextMenuSection-BWaZOiqV.js";import"./Action-DJ1WPhSw.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./browser-Dr5hWFfi.js";import"./getActionGroupSlot-nY47Clec.js";import"./dynamic-B-NoN6qZ.js";import"./Dialog-ClYDKCvQ.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./useControlledState-DorIVmrH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./FocusScope-BEv8tYIC.js";import"./ColumnLayout-D55PSz29.js";import"./Avatar-Dy4tfaM3.js";import"./AlertIcon-C4O6kAyM.js";import"./Image-EkLrMt4k.js";import"./Link-DH1Vm4ZB.js";import"./OptionsButton-BCSpkvcJ.js";import"./ButtonView-BC_ryqYl.js";import"./ContextMenuTriggerView-BN5hHamM.js";import"./ContextMenuTrigger-_OSnRPnl.js";import"./OverlayTrigger-CAZY-Adw.js";import"./OverlayContextProvider-bBBj8Jql.js";import"./FieldError-D_yigqvG.js";import"./FieldError-CVa256dc.js";import"./AlertText-D2qcucoC.js";import"./useRef-oohqBRQZ.js";import"./LoadingSpinner-CJqmAtLp.js";import"./remote-Bl5KctCq.js";import"./Heading-DsDU_kOR.js";import"./useFormValidation-OWtbzU_T.js";import"./Input-BJHxReEX.js";import"./EmulatedBoldText-wvGqieyl.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
