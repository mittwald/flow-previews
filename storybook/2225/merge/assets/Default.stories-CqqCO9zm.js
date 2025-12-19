import{r as x,j as e}from"./iframe-DyIQYB7R.js";import{F as t}from"./FileDropZone-BVNyTLJN.js";import{S as d}from"./Section-yajK3SK5.js";import{F as u}from"./FileCardList-DUDRwN6B.js";import{F}from"./FileCard-BBW3kxyZ.js";import{u as S,F as C,t as D}from"./Form-B0lxAPLg.js";import{S as y}from"./ResetButton-MDw1h-vd.js";import{B as f}from"./Button-C3sAJBlh.js";import{A as b}from"./ActionGroup-KTNDS_nc.js";import{Z as j,_ as B}from"./IconWarning-BlqJF_wS.js";import{H as g}from"./Heading-C6tbK1yl.js";import{F as h}from"./FileField-CZi_3IFX.js";import{T as O}from"./Text-DP5VQe4y.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CcblOIu2.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./useFieldComponent-BuMHMJdd.js";import"./utils-Br5k-T_U.js";import"./intlStrings-ZMTSFH_M.js";import"./Text--49tgveg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./useFocus-MkZ0Yize.js";import"./useCollator-CNrMRXe4.js";import"./context-DQwa7-Zw.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./Button-BuUG1_MS.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DBMxrrfH.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./VisuallyHidden-CpJBcPMb.js";import"./ContextMenuSection-CGwj4hwH.js";import"./Action-2iALePMB.js";import"./context--viOmW11.js";import"./useStatic-CPovvC2L.js";import"./browser-Dsy2EDmz.js";import"./getActionGroupSlot-D_7amHYE.js";import"./dynamic-tPr8Th1P.js";import"./Dialog-Bezv0IMM.js";import"./RSPContexts-D0G5Z96Z.js";import"./OverlayArrow-B8joZ1vL.js";import"./useControlledState-C9rhpCZz.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./FocusScope-CPYLtjFE.js";import"./ColumnLayout-H9oEHPqH.js";import"./Avatar-BHP8nOFb.js";import"./AlertIcon--LZTg8-U.js";import"./Image-CXIxZr83.js";import"./Link-BHjryOZC.js";import"./OptionsButton-CyEy7pJZ.js";import"./ButtonView-LTtgsx-z.js";import"./ContextMenuTriggerView-DvF1EGfX.js";import"./ContextMenuTrigger-B9ehtSgd.js";import"./OverlayTrigger-Dkelca7C.js";import"./OverlayContextProvider-D2R86dNb.js";import"./FieldError-Drb2NmJE.js";import"./FieldError-CJCkmHNP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BA2dHosU.js";import"./LoadingSpinner-BJz_a5cm.js";import"./remote-CduUCN7o.js";import"./Heading-BomgGhUe.js";import"./useFormValidation-BzfV6dUL.js";import"./Input-DTEp0DEd.js";import"./EmulatedBoldText-B3WFDqoc.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
