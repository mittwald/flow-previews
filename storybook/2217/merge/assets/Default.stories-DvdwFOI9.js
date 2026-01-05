import{r as x,j as e}from"./iframe-DITmTDde.js";import{F as t}from"./FileDropZone-DJXget5l.js";import{S as d}from"./Section-LC8gX_k1.js";import{F as u}from"./FileCardList-uJGVvKk5.js";import{F}from"./FileCard-HXPEipUR.js";import{u as S,F as C,t as D}from"./Form-CrJtjiP0.js";import{S as y}from"./ResetButton-vhInV8y4.js";import{B as f}from"./Button-DgKZKMvA.js";import{A as b}from"./ActionGroup-BB5mge67.js";import{Z as j,_ as B}from"./IconWarning-FbTim4wC.js";import{H as g}from"./Heading-BikOeUcJ.js";import{F as h}from"./FileField-CSgWGmZI.js";import{T as O}from"./Text-B4ALgTL8.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-YiSnEL8X.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./index-oEm39XqO.js";import"./useFieldComponent-CR_sI6nz.js";import"./utils-C40myb20.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-rw4H23NJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZbkZQ01.js";import"./useFocus-DrnrNdFb.js";import"./useCollator-CsbGxztB.js";import"./context-CEC4U_pc.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./Button-CsPSNcu1.js";import"./ProgressBar-DNk1ASVc.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cwz_fpS2.js";import"./useFocusRing-DXc99t-B.js";import"./useFocusable-m8WXVW9y.js";import"./VisuallyHidden-CcOPNtcw.js";import"./ContextMenuSection-Dk8lBhMu.js";import"./Action-BJnGojjr.js";import"./context-fizPycLA.js";import"./useStatic-OoNPiP3V.js";import"./browser-wgtkTybB.js";import"./getActionGroupSlot-C8PBzZsA.js";import"./dynamic-BjimB01T.js";import"./Dialog-Bmgfq9R9.js";import"./RSPContexts-jFJkk-mB.js";import"./OverlayArrow-CD7gdoFk.js";import"./useControlledState-D6UlgZp0.js";import"./Collection-CIVuuc0n.js";import"./CollectionBuilder-IVJxZg8U.js";import"./SelectionIndicator-711mCjj0.js";import"./Separator-BPOzmHFV.js";import"./SelectionManager-WdH-qHQg.js";import"./useEvent-CgJsVtlm.js";import"./FocusScope-zqNAAOXF.js";import"./ColumnLayout-DIbtHGGQ.js";import"./Avatar-CBge5GYQ.js";import"./AlertIcon-TRF3QsjZ.js";import"./Image-CbpbMegv.js";import"./Link-D_huAvzE.js";import"./OptionsButton-qKnsd9xh.js";import"./ButtonView-CvbO9w1t.js";import"./ContextMenuTriggerView-DoXcoGkg.js";import"./ContextMenuTrigger-2h6J5hH5.js";import"./OverlayTrigger-D23x4NHr.js";import"./OverlayContextProvider-4GqAJ6zk.js";import"./FieldError-CBw2sGOe.js";import"./FieldError-B8qSKLtD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-AytpOevM.js";import"./LoadingSpinner-CQhA1l2h.js";import"./remote-BYAMMrVX.js";import"./Heading-DTo4uMVU.js";import"./useFormValidation-gmIFw0Kx.js";import"./Input-tNtxpliI.js";import"./EmulatedBoldText-CTBn_63u.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
