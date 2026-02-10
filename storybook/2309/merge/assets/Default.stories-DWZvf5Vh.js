import{r as x,j as e}from"./iframe-BAXQY30e.js";import{F as t}from"./FileDropZone-G_k-oCMz.js";import{S as d}from"./Section-BVe0LGVq.js";import{F as u}from"./FileCardList-mb3jLwwf.js";import{F}from"./FileCard-bBvJJgLf.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-D0JxP27a.js";import{B as f}from"./Button-CvDqM7Lu.js";import{A as b}from"./ActionGroup-BudZkh0v.js";import{_ as j,$ as B}from"./IconWarning-NY-vs6K4.js";import{H as g}from"./Heading-B7OcLMTv.js";import{F as h}from"./FileField-DhhwFZDX.js";import{T as O}from"./Text-CsFAJPGd.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C9tqwKf-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./index-BAu7LBGH.js";import"./useFieldComponent-RBMXOPsB.js";import"./utils-CPq9a2_3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CgyRU_jx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./useFocus-Bjv2U0Px.js";import"./useCollator-DxEFZJkY.js";import"./context-Ch7cvv9N.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./useFocusRing-eOVByyHK.js";import"./Button-Ca5Nx2F5.js";import"./ProgressBar-DOlyg40u.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-0WoXV1eK.js";import"./useFocusable-B7f7k6Nb.js";import"./VisuallyHidden-qM1rInXZ.js";import"./ContextMenuSection-CYSyIaWU.js";import"./Action-CDH3oaiQ.js";import"./context-DKCDV3-b.js";import"./useStatic-rplOn2Qs.js";import"./browser-7M05TLI2.js";import"./getActionGroupSlot-CKOsA57z.js";import"./dynamic-0Mu-qEnq.js";import"./Dialog-BnZvghEV.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./FocusScope-PoiaPb2X.js";import"./ColumnLayout-D_MUxXPB.js";import"./Avatar-BsK31Qqf.js";import"./AlertIcon-C4A5rqth.js";import"./Image-DCBcfCxf.js";import"./Link-CMQ5K8Q-.js";import"./OptionsButton-Dhcy02bz.js";import"./ButtonView-DderywPS.js";import"./ContextMenuTriggerView-sktAACRz.js";import"./ContextMenuTrigger-YnZfWB7j.js";import"./OverlayTrigger-CKjWJPQI.js";import"./OverlayContextProvider-CtvKPXhV.js";import"./FieldError-D1QPRlMW.js";import"./FieldError-RUpMVejq.js";import"./AlertText-Do_swE0s.js";import"./useRef-DMh8YqdE.js";import"./LoadingSpinner-JX83AFJj.js";import"./remote-X8ibHJNw.js";import"./Heading-o5Ph-k-z.js";import"./useFormValidation-DAvMLm6e.js";import"./Input-Dt_0h10s.js";import"./EmulatedBoldText-RGEYlPNA.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
