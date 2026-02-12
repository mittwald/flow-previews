import{r as x,j as e}from"./iframe-C_XCETJ4.js";import{F as t}from"./FileDropZone-Cfxe1bjb.js";import{S as d}from"./Section-BxK_Nbwa.js";import{F as u}from"./FileCardList-Bmw1TmPF.js";import{F}from"./FileCard-BDxMWJ-V.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DlCnoRdL.js";import{B as f}from"./Button-BRKehz01.js";import{A as b}from"./ActionGroup-CmEQbpco.js";import{a0 as j,a1 as B}from"./IconWarning-D8ZYq2sU.js";import{H as g}from"./Heading-42b9lNh5.js";import{F as h}from"./FileField-Bxff7v1M.js";import{T as O}from"./Text-l7AxHvJY.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-lMej2Tzb.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./useFieldComponent-K9rhjMxn.js";import"./utils-Bso2FrGw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CpxVEUdG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./useFocus-D-vzktAn.js";import"./useCollator-CSjtRqd2.js";import"./context-CpOW4Kl4.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./useFocusRing-Dl1uWSge.js";import"./Button-DIlWiE4j.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-xR971w.js";import"./useFocusable-CMVXl80p.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./ContextMenuSection-D5WrvUWV.js";import"./ActionBatch-TqepIOEV.js";import"./context-BzuZVooY.js";import"./useStatic-CKCyvBOK.js";import"./browser-BQl26QHV.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./dynamic-DjbOT4dP.js";import"./Dialog-BbJdb0zX.js";import"./RSPContexts-PVsy4Zek.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./FocusScope-f515rn4z.js";import"./ColumnLayout-DT0vB16y.js";import"./Avatar-BE3_HRKs.js";import"./AlertIcon-Bo1DHsRX.js";import"./Image-BZV1j-SR.js";import"./Link-DkaoxxaB.js";import"./OptionsButton-Bu4GTDrV.js";import"./ButtonView-CkPSl8Kd.js";import"./ContextMenuTriggerView-CNB9IcnQ.js";import"./ContextMenuTrigger-CxmoahH1.js";import"./OverlayTrigger-lTtRcte7.js";import"./OverlayContextProvider-Ben69tTv.js";import"./FieldError-Cv_CJ9jj.js";import"./FieldError-5QFQIGqn.js";import"./AlertText-B-9KJ9sd.js";import"./useRef-DPssy75n.js";import"./LoadingSpinner-dY4_o8YP.js";import"./remote-BBIBCAlv.js";import"./Heading-Cm7wIRHP.js";import"./useFormValidation-CsbIfaDX.js";import"./Input-54bUd5Aj.js";import"./EmulatedBoldText-D4ZS6afz.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
