import{r as x,j as e}from"./iframe-BgKMnsqP.js";import{F as t}from"./FileDropZone-BdxSbz_V.js";import{S as d}from"./Section-D7E7l6M3.js";import{F as u}from"./FileCardList-D2nwowHt.js";import{F}from"./FileCard-DgAo_MhE.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-COmaz_iZ.js";import{B as f}from"./Button-BtfzhoC2.js";import{A as b}from"./ActionGroup-Baw08tLW.js";import{a0 as j,a1 as B}from"./IconWarning-LAZRyVR3.js";import{H as g}from"./Heading-Dr5lCRWs.js";import{F as h}from"./FileField-DTsfe3XK.js";import{T as O}from"./Text-C3i_8DOD.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CycRWiQg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./index-Cjd0WNlk.js";import"./useFieldComponent-BrPuybAK.js";import"./utils-DF7rIzyn.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DxRa_Q_m.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./useFocus-rZbUMOOr.js";import"./useCollator-Dqx-tu-j.js";import"./context-bU_PoVUz.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./useFocusRing-Do_SyrKm.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BRD_gMdl.js";import"./useFocusable-D4mYKpyk.js";import"./VisuallyHidden-CtgyRlvv.js";import"./ContextMenuSection-DBH05xVc.js";import"./ActionBatch-4ndP-n8L.js";import"./useOverlayController-D55f6wXT.js";import"./useStatic-BGwbdR9P.js";import"./browser-CrtXW1Io.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./dynamic-EDiDAp0E.js";import"./Dialog-BWmXoaKF.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./FocusScope-CnP7IT5L.js";import"./ColumnLayout-2O44tZq2.js";import"./Avatar-BzZWgZ5O.js";import"./AlertIcon-CcDG2G1r.js";import"./Image-D5xoWZSI.js";import"./Link-DQzWffQ1.js";import"./OptionsButton-jmCTXsA-.js";import"./ButtonView-DXAFCp_d.js";import"./ContextMenuTriggerView-C0FhAcpu.js";import"./ContextMenuTrigger-wRUtG6NL.js";import"./OverlayTrigger-B2K0MccU.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./FieldError-C-lZWEzn.js";import"./FieldError-DrPRBP1_.js";import"./AlertText-bVfxlZAe.js";import"./ActionGroupView-Clwct5K6.js";import"./Content-CbjXc6mW.js";import"./Modal-Bb86vIfw.js";import"./Overlay-jspJFumx.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./Flex-Cg9PpE8E.js";import"./useRef-B-um_LIx.js";import"./remote-BqVO6mjn.js";import"./Heading-DVJa8yG2.js";import"./useFormValidation-BuWufY-j.js";import"./Input-DxGeYMpI.js";import"./EmulatedBoldText-CGtkaQmh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
