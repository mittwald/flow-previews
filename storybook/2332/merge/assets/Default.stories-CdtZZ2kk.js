import{r as x,j as e}from"./iframe-PZSwL5UI.js";import{F as t}from"./FileDropZone-dacMyHKp.js";import{S as d}from"./Section-Ly32yzfQ.js";import{F as u}from"./FileCardList-jIt2dzZr.js";import{F}from"./FileCard-CfWXvwVu.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DSe7vvOE.js";import{B as f}from"./Button-Dx8ytIXV.js";import{A as b}from"./ActionGroup-CuC620Qy.js";import{a0 as j,a1 as B}from"./IconWarning-Brl3hUMe.js";import{H as g}from"./Heading-DkYLS7Fi.js";import{F as h}from"./FileField-CtNwF74d.js";import{T as O}from"./Text-CkpR2hqn.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BceKgGNq.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./useFieldComponent-BUmkKSsK.js";import"./utils-lOj21ZD_.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BG-2dzKS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./useFocus-BI7y428A.js";import"./useCollator-DzxVKGp5.js";import"./context-Ff7U_4vz.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./useFocusRing-C-2IcVPM.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B1ZCcdw8.js";import"./useFocusable-B4WRTgkS.js";import"./VisuallyHidden-UxX7HzEl.js";import"./ContextMenuSection-B4TWz5w1.js";import"./ActionBatch-KmZgQ_FO.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./browser-Ds1bEyov.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./dynamic-DDVyub9n.js";import"./Dialog-BxivZnjn.js";import"./RSPContexts-TcotrMre.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./FocusScope-BkNZ8LpG.js";import"./ColumnLayout-Blx4YVs9.js";import"./Avatar-DkdidpBe.js";import"./AlertIcon-BtM4zuia.js";import"./Image-CBAsRPIp.js";import"./Link-sMsqPXw3.js";import"./OptionsButton-DCVEOrz_.js";import"./ButtonView-XkIAqQ4n.js";import"./ContextMenuTriggerView-HB8qaRMi.js";import"./ContextMenuTrigger-Ca2zwc8B.js";import"./OverlayTrigger-w9ToWuXF.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./FieldError-DI2vGfZA.js";import"./FieldError-mE8Rrcl-.js";import"./AlertText-CY4BBxtN.js";import"./ActionGroupView-CIbffeee.js";import"./Content-DRuiMhgn.js";import"./Modal-C7FSQX3Q.js";import"./Overlay-DZSkN4bv.js";import"./LoadingSpinner-kHlSwNnH.js";import"./Flex-Bs1WbtgB.js";import"./useRef-BIiAMvRM.js";import"./remote-mdYu2fN6.js";import"./Heading-DxHx-m9x.js";import"./useFormValidation-BFZ87yhB.js";import"./Input-uYjA58vR.js";import"./EmulatedBoldText-CuqW50TP.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
