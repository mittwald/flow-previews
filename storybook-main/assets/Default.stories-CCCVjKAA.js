import{r as h,j as e}from"./iframe-Cnqm4lFy.js";import{F as t}from"./FileDropZone-BaGk3QiN.js";import{S as c}from"./Section-Dg5LLnYW.js";import{F as d}from"./FileCardList-5vM0sYSz.js";import{F as u}from"./FileCard-BDWbofm1.js";import{u as O,F as T,t as _}from"./Form-D5anfSgp.js";import{B as s}from"./Button-GqX5Ed_0.js";import{A as b}from"./ActionGroup-Bl2vI95-.js";import{Y as x,Z as k}from"./IconWarning-BGJHeHvx.js";import{H as F}from"./Heading-CJFTySQe.js";import{F as f}from"./FileField-NZXJlNPO.js";import{T as U}from"./Text-BEWqZmc4.js";import"./IllustratedMessage-DChrh30Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./utils-CnzLW3AP.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CzkkWfVE.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BaQUBcK6.js";import"./useFocus-_F3heiAA.js";import"./useCollator-BSKS0jpr.js";import"./context-CV4GK-7T.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./Button-IuJiQec9.js";import"./ProgressBar-DvnI1q4y.js";import"./Label-DR_AMUCZ.js";import"./Hidden-Cs157XWu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DsDytGfO.js";import"./useFocusRing-CPUfygMd.js";import"./useFocusable-BzgCWsb7.js";import"./VisuallyHidden-CPCVsxvc.js";import"./ContextMenuSection-zBRyPG3T.js";import"./Action-D5xue7JO.js";import"./context-p0am_T1z.js";import"./useStatic-Gr7dtALz.js";import"./browser-B2d62Nc4.js";import"./getActionGroupSlot-CCVLKGat.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B5ExOuoq.js";import"./RSPContexts-D_hI6riA.js";import"./OverlayArrow-BzYR1xCl.js";import"./useControlledState-BaDEj8YE.js";import"./Collection-FQ9k0Rtz.js";import"./CollectionBuilder-BxLrnRW8.js";import"./Separator-LafJE-2b.js";import"./Group-DTUadKgc.js";import"./SearchField-3la4eIFC.js";import"./FieldError-CjkOwEOv.js";import"./Form-BSD4Q5fC.js";import"./useTextField-C6ieJdik.js";import"./useFormReset-eFY2_Wll.js";import"./TextField-EAqwucdm.js";import"./useEvent-D6x-_Zc1.js";import"./SelectionManager-ByPZOqoP.js";import"./FocusScope-BkqoV2HT.js";import"./ColumnLayout-Co78cifa.js";import"./Avatar-DaDhIe82.js";import"./AlertIcon-CWwqXlZc.js";import"./Image-DLdD0OhA.js";import"./Link-DuHzgy4L.js";import"./OptionsButton-DW3JzNe1.js";import"./ButtonView-DrDIEKOY.js";import"./ContextMenuContent-BGRz_ooR.js";import"./Popover-CSuX_gIS.js";import"./DialogTriggerView-DiXTTJbN.js";import"./Switch-CiV68xMt.js";import"./Label-DI5vbAp_.js";import"./useToggleState-5VwEi6Lo.js";import"./FieldError-BShtxMou.js";import"./LoadingSpinner-Bfw-PGOT.js";import"./Heading-BHukavFk.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DcBlvLGt.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
