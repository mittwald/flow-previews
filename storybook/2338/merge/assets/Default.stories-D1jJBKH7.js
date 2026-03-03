import{r as h,j as e}from"./iframe-BZ1p44Xs.js";import{F as t}from"./FileDropZone-C9Ne2Kcx.js";import{S as p}from"./Section-DYkPYl1t.js";import{F as c}from"./FileCardList-CrFIMRus.js";import{F as d}from"./FileCard-Bj5WG3b4.js";import{u as g,F as j,S,t as C}from"./ResetButton-BCpb_Ry0.js";import{B as u}from"./Button-BXzJaHaH.js";import{A as D}from"./ActionGroup-D6AJDGA7.js";import{a0 as x,a1 as B}from"./IconWarning-BeCXg6tW.js";import{H as F}from"./Heading-DAuGI7Cj.js";import{F as f}from"./FileField-DKbQreh7.js";import{T as L}from"./Text-CplKG2wk.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DBcKx2v6.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./useFieldComponent-CdmiPNAX.js";import"./utils-Cc2PUaBi.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DOPFHCGV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./useFocus-O4gnqY9s.js";import"./useCollator-D08tnIgu.js";import"./useFocusRing-vNPEpCai.js";import"./context-C5KsUqFD.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocusable-BXiUGBNe.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ContextMenuSection-FMJg67QM.js";import"./ActionBatch-kp--iEDz.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./browser-N7XS9wRL.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./FocusScope-C1V2bg9k.js";import"./ColumnLayout-BCB7DSmP.js";import"./Avatar-WXSkv75C.js";import"./AlertIcon-CBSVIKWa.js";import"./Image-BdCDw9k5.js";import"./Link-CnlokJZe.js";import"./OptionsButton-BWO0jioz.js";import"./ButtonView-BwTEXUNO.js";import"./ContextMenuTriggerView-Cz8K08k4.js";import"./ContextMenuTrigger-rOh1KcX0.js";import"./OverlayTrigger-DzQUlxLA.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./FieldError-t823MHuJ.js";import"./FieldError-DP4FZd0x.js";import"./AlertText-CHdPuYCZ.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Modal-hb6flPm1.js";import"./Overlay-BnwE_UHm.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./remote-BEHhGsYi.js";import"./Heading-acaQddxn.js";import"./useFormValidation-oY9u4Y5a.js";import"./Input-Bt20yVH7.js";import"./EmulatedBoldText-VgOMGZVr.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone accept="image/png" {...props} onChange={setFiles}>
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const rr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Multiple,m as WithAcceptedTypes,l as WithReactHookForm,rr as __namedExportsOrder,er as default};
