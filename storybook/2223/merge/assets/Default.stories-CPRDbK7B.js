import{r as x,j as e}from"./iframe-D3NxpU8u.js";import{F as t}from"./FileDropZone-B3NpYsEb.js";import{S as d}from"./Section-DtUAatzw.js";import{F as u}from"./FileCardList-CBtCMTZG.js";import{F}from"./FileCard-Dv9cSmtT.js";import{u as S,F as C,t as D}from"./Form-BS1fmLWP.js";import{S as y}from"./ResetButton-BwZ7v_gB.js";import{B as f}from"./Button-edx4tjlA.js";import{A as b}from"./ActionGroup-BiPDUCFA.js";import{Z as j,_ as B}from"./IconWarning-CbcK8G8M.js";import{H as g}from"./Heading-BTvslLGP.js";import{F as h}from"./FileField-DD5FzXjQ.js";import{T as O}from"./Text-D1hVvtRE.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-YGV_q_-Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./index-A0HM7_1k.js";import"./useFieldComponent-BWjf97vE.js";import"./utils-C5WN15Gt.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-ChwArYoy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./useFocus-C0SaCLF4.js";import"./useCollator-CIF19XO1.js";import"./context-CgVi_M53.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./Button-BOXTMksI.js";import"./ProgressBar-COGAiyei.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Byc6DAfn.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./ContextMenuSection-BZ_yBJ42.js";import"./Action-CgjRBsSL.js";import"./context-BviD8e-k.js";import"./useStatic-Cxgn0lDK.js";import"./browser-_fqBbauj.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./dynamic-Cp5s9Mjb.js";import"./Dialog-CvwxtaFW.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./useControlledState-CQ4qwdX_.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./FocusScope-0a8lKbDZ.js";import"./ColumnLayout-BaFneyJX.js";import"./Avatar-CAdA-CK4.js";import"./AlertIcon-Ca7Aqq8g.js";import"./Image-u72nW70a.js";import"./Link-cJTSf6Vg.js";import"./OptionsButton-LCpJj10J.js";import"./ButtonView-D-stYF68.js";import"./ContextMenuTriggerView-DyMqnyCA.js";import"./ContextMenuTrigger-DBSsuwgi.js";import"./OverlayTrigger-BzsNNahf.js";import"./OverlayContextProvider-Dq_iYQ8p.js";import"./FieldError-CpaS6eds.js";import"./FieldError-C5ECIufL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DzPq8Aca.js";import"./LoadingSpinner-D_HEbJEf.js";import"./remote-Cz3kT78_.js";import"./Heading-apCDmXp5.js";import"./useFormValidation-sS7ClLRw.js";import"./Input-DsjyUW1i.js";import"./EmulatedBoldText-BTtwXUtX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
