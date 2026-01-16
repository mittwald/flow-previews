import{r as x,j as e}from"./iframe-DZ4teeW0.js";import{F as t}from"./FileDropZone-CA23iVSC.js";import{S as d}from"./Section-239igX5r.js";import{F as u}from"./FileCardList-BC1rSL-K.js";import{F}from"./FileCard-BnvBgjGx.js";import{u as S,F as C,t as D}from"./Form-DTH9u47l.js";import{S as y}from"./ResetButton-Cubo-Q6d.js";import{B as f}from"./Button-DKoFnNBZ.js";import{A as b}from"./ActionGroup-CGiFoQ-O.js";import{$ as j,a0 as B}from"./IconWarning-BMXzPSbA.js";import{H as g}from"./Heading-DmKF-kzC.js";import{F as h}from"./FileField-CcbaEjiB.js";import{T as O}from"./Text-C4YBtGrU.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-nTu0Bz5P.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./useFieldComponent-D07Wu5hH.js";import"./utils-CmR_RyV0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BkVlga5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./useFocus-DPzONbd_.js";import"./useCollator-DxlaTcxe.js";import"./context-CZC3VL3b.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DM-2A3ZD.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";import"./VisuallyHidden-DG5gzPUr.js";import"./ContextMenuSection-NaF-svH4.js";import"./Action-IUgUGwCY.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./browser-BOIGtlkn.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./dynamic-DLpaDBxN.js";import"./Dialog-mp_BsC5B.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./useControlledState-CE05dG3o.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./FocusScope-BJdWB0PZ.js";import"./ColumnLayout-CsNbWTYs.js";import"./Avatar-Bonfp6V7.js";import"./AlertIcon-Dng1V2P2.js";import"./Image-CfehdNX_.js";import"./Link-BGXzo5UM.js";import"./OptionsButton-CEAPeb6a.js";import"./ButtonView-GY_qalku.js";import"./ContextMenuTriggerView-Dvjh0c5O.js";import"./ContextMenuTrigger-DaYyEAiy.js";import"./OverlayTrigger-DrQSWpcn.js";import"./OverlayContextProvider-Bp1oUVk4.js";import"./FieldError-AZ-rkViQ.js";import"./FieldError-DkoCPEDN.js";import"./AlertText-Dur7DX9B.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DPiX1vSz.js";import"./LoadingSpinner-DJRFuNH9.js";import"./remote-C7mA51oY.js";import"./Heading-OLDiOTzf.js";import"./useFormValidation-DQHMrpfA.js";import"./Input-D0qY3wir.js";import"./EmulatedBoldText-D386c9ln.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
