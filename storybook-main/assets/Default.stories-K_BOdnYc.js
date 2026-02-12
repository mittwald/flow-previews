import{r as x,j as e}from"./iframe-DeaTJDua.js";import{F as t}from"./FileDropZone-ZzAkkrHk.js";import{S as d}from"./Section-BH_SD1YF.js";import{F as u}from"./FileCardList-Cl-DsPJX.js";import{F}from"./FileCard-D-ewSk1q.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-dguijozO.js";import{B as f}from"./Button-Cbxy7DVV.js";import{A as b}from"./ActionGroup-BydBbbmr.js";import{a0 as j,a1 as B}from"./IconWarning-Bnohnd1u.js";import{H as g}from"./Heading-DNOFGRof.js";import{F as h}from"./FileField-DgTBeuux.js";import{T as O}from"./Text-DmX-Z1ax.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-UKrk4zlM.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./useFieldComponent-Bk8CgTUl.js";import"./utils-DAn_19Le.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D55T9z4A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./useFocus-DwX8c8hl.js";import"./useCollator-DPWjVVbc.js";import"./context-DpHy2B7Z.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./useFocusRing-CR3AbbfB.js";import"./Button-CkcG2vDz.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGs6tBRd.js";import"./useFocusable-DXFTvAH_.js";import"./VisuallyHidden-BMpCP5yc.js";import"./ContextMenuSection-CEBTY825.js";import"./ActionBatch-RbyKfuct.js";import"./useOverlayController-DRqv1s8t.js";import"./useStatic-Die7f9lk.js";import"./browser-DgW11PhP.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./dynamic-_cZQrmBt.js";import"./Dialog-BDRpw9MJ.js";import"./RSPContexts-n2YtmRLP.js";import"./OverlayArrow-seoLwAns.js";import"./useControlledState-CvKG4MPs.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./FocusScope-CpKBh6MC.js";import"./ColumnLayout-HIE7v333.js";import"./Avatar-C0FVAL0T.js";import"./AlertIcon-KKj1r8Dh.js";import"./Image-XhZqbVjX.js";import"./Link-CeQaTb3H.js";import"./OptionsButton-B1Nabj64.js";import"./ButtonView-MbZrvuWF.js";import"./ContextMenuTriggerView-CHs5cS4d.js";import"./ContextMenuTrigger-B7vm9S1N.js";import"./OverlayTrigger-Cd2hfWuE.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./FieldError-1N6EvFt7.js";import"./FieldError-BF0ggQ3i.js";import"./AlertText-CNiFry47.js";import"./ActionGroupView-ZKtugs6_.js";import"./Content-CLiYZXIJ.js";import"./Modal-D3vemkDI.js";import"./Overlay-C4R6Qd88.js";import"./LoadingSpinner-tY2JT6X0.js";import"./Flex-JXNPn7Yl.js";import"./useRef-DbGYr9ig.js";import"./remote-4WWdz0S_.js";import"./Heading-Bb4nX13J.js";import"./useFormValidation-Ca3G17wV.js";import"./Input-B9L4_sDl.js";import"./EmulatedBoldText-cuvIuyGo.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
