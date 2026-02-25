import{r as x,j as e}from"./iframe-BoiTaxGN.js";import{F as t}from"./FileDropZone-CI3CKIf3.js";import{S as d}from"./Section-Cq-t_YW4.js";import{F as u}from"./FileCardList-3Lk4kh09.js";import{F}from"./FileCard-DB_Ri2ne.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-W7v6pmtV.js";import{B as f}from"./Button-MYsVPgLO.js";import{A as b}from"./ActionGroup-aDJBka0X.js";import{a0 as j,a1 as B}from"./IconWarning-DctWBCm0.js";import{H as g}from"./Heading-9cwIlFFB.js";import{F as h}from"./FileField-DHAi4-xL.js";import{T as O}from"./Text-ClfpXeTF.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-b4eh6n1z.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./useFieldComponent-DiiGd8t3.js";import"./utils-RetFhwyR.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DnUg5-aR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./useFocus-BSOUAoQt.js";import"./useCollator-CCHmo4fs.js";import"./context-hlBZKj-7.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./useFocusRing-VutGkHGx.js";import"./Button-BZbFxF4O.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoLCzapA.js";import"./useFocusable-CNuWQ5Vu.js";import"./VisuallyHidden-CML_0Z6P.js";import"./ContextMenuSection-CBBb0XeQ.js";import"./ActionBatch-D2Yqxa5D.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./browser-zBSS86_h.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./dynamic-X8snMUB4.js";import"./Dialog-BL8T3CnU.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./FocusScope-p908I3Or.js";import"./ColumnLayout-CGK2mhyv.js";import"./Avatar-P2YueCDD.js";import"./AlertIcon-B1VBridV.js";import"./Image-D6AayUUg.js";import"./Link-BXD_Kg0Z.js";import"./OptionsButton-ZmSabDgs.js";import"./ButtonView-Jmrl6E5f.js";import"./ContextMenuTriggerView-B-aOXpHy.js";import"./ContextMenuTrigger-CEzSc6a_.js";import"./OverlayTrigger-Db6so5Mf.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./FieldError-DjT7Sc36.js";import"./FieldError-C1wD6V1t.js";import"./AlertText-aAUEFisb.js";import"./ActionGroupView-dG558uao.js";import"./Content-Bi6LQS0I.js";import"./Modal-BCaxB9zM.js";import"./Overlay-CDL6WOnf.js";import"./LoadingSpinner-BBdroSRA.js";import"./Flex-BlwptNjQ.js";import"./useRef-CEacQt_r.js";import"./remote-C4jG3DXh.js";import"./Heading-BcC1Qw26.js";import"./useFormValidation-CX6eZKbg.js";import"./Input-CHjKW2hG.js";import"./EmulatedBoldText-vFeun45o.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
